import React, { useEffect } from "react";
import { setCurrentData } from "redux/currentData";
import { useDispatch } from "react-redux";
import store from "redux/store";
import Aos from "aos";
import Pages from "pages";
import { PAGE_DATA } from "constants/app";
import audioPlayer from 'helper/audioPlayer'
import DebugPanel,{debugRequestChangePage,debugPushRecord} from "components/DebugPanel/index";

import "aos/dist/aos.css";
import "./App.scss";

const App = () => {

    const dispatch = useDispatch();

    const handleClick = (e, actionType, value, callback) => {
        console.log('click-fireEvent');

        switch (actionType) {
            case "changePage":
                let { page, step } = value.eventData;
                //just for debug
                debugRequestChangePage(page,step);

                window.bridge.requestChangePage(page, step);
                break;

            case "fireEvent":
                const state = store.getState();
                const {
                    currentPage,
                    currentStep,
                } = state.app;

                //just for debug
                debugPushRecord(value);

                window.bridge.pushRecord({
                    eventPage:currentPage,
                    eventPageStep:currentStep,
                    eventTime:(new Date()).getTime(),
                    ...value
                });
                break;
            default:
                break;
        }

        if (typeof (callback) === 'function') {
            callback()
        }
    }

    useEffect(() => {
        Aos.init()
    }, [])

    useEffect(() => {
        window.bridge = window.BJYBridge.getInstance({
            onPageChange: (page, step) => {
                //翻页回调事件，需要先卸载当前页面，然后再去加载指定页面
                //卸载当前页面需要停止所有声音和未执行完的事件
                return new Promise((resolve) => {
                    console.log(`onPageChange-page:`, page);
                    console.log(`onPageChange-step:`, step);

                    //stopAllAudio
                    audioPlayer.cleanAllAudio();

                    dispatch(setCurrentData({
                        currentPage: page,
                        currentStep: step
                    }))

                    resolve(PAGE_DATA[page].length);
                })
            },
            onRecordChange: (record, prevRecord) => {
                //页面事件同步，需要判定事件的页面归宿，是否与当前的页面一致，不一致不处理。
                console.log(`onRecordChange-record:`, record);
                console.log(`onRecordChange-prevRecord:`, prevRecord);
                dispatch(setCurrentData({
                    currentRecord: record,
                    prevRecord: prevRecord
                }))
            }
        })

        new Promise((resolve) => {
            var initData = {
                page: 0,
                step: 0,
            };
            resolve(initData);
        }).then((initData) => {
            const page = initData.page;
            const step = initData.step;
            window.bridge.getReady({
                page: page,
                step: step,
                pageCount: PAGE_DATA.length,
                stepCount: PAGE_DATA[page].length,
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log('renderAppWrap')
    return (
        <div className="App">
            <DebugPanel />

            <div className="pageWrap">
                <Pages
                    onPushAction={handleClick}
                />
            </div>
        </div>
    )
}

export default React.memo(App)