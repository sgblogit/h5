# bjy_h5_react_framework

### `项目目录结构`

```
|--src
    |--assets
        |--audios //存放音效文件，分为通用、各页面音效
            |--common
            |--home
            |--page_1
            |--page_...
        |--images //存放图片文件，分为通用、各页面图片
            |-common
            |--home
            |--page_1
            |--page_...
    |--components //通用组件
        |--DebugPanel //debug 面板
        |--...
    |--constants
    |--helper //常用公用方法
        |--audioPlayer //音效播放管理
    |--pages //课件页面
        |--home
        |--page_1
        |--page_...
        |--index.js //页面集合 会根据currentPage返回指定页面
    |--redux //redux数据
    |--styles //通用样式
    App.js
    index.js //入口文件



```


### `课件开发步骤`

1，分析课件页面，构建课件结构；
2，在pages下添加新的页面，在pages/index.js添加新的页面信息，在constants/app.js中添加页面数据
3，将页面素材（图片、音效）放入assets对应目录中
4，开发页面

### `DEBUG 面板`

debugPanel 位于右上角，用于模拟百家云交互，开发环境中可用，生产环境中不可用。


### `页面开发须知`
开发前必读
百家云H5课件 开发文档
https://dev.baijiayun.com/wiki/detail/87


### `概念`

“page” 指课件某一个页面
“step” 指课件某一个页面中的步骤，例如一个课件页面中设计了3个步骤，那么这个课件的step=3
“record” 指在课件某一页面的操作事件记录列表
“prevRecord” 指在课件某一页面的上一次操作记录列表
当page翻页后，record会清空

### `课件打包须知`
百家云H5课件zip要求压缩包内跟目录为一个英文名的文件夹，此文件夹中需要有index.html文件作为课件入口。

执行 yarn build 之后，只需要将build目录（可以改名）打成zip压缩包即可上传

### `百家云同步机制`

1，交互事件触发，将事件发送到百家云，此时只发送事件内容，不能做任何的事件执行（如页面跳转、动画、显示等）

2，待百家云sdk回调后，进行回调事件判断，如果是当前页面的事件，再进行页面事件执行（如动画、显示等），其中页面跳转会自动完成。

事件包含：页面（page）跳转 ｜ 步骤（step）跳转 ｜ 操作事件（eventRecord）

page，step，record，prevRecord 等数据均会自动存在redux中

####  `事件发送方式`
其中onPushAction方法可由上层组件传入
```
    const { onPushAction } = props;

    onPushAction(e,{
        actionType: [changePage,fireEvent]
        eventName: EventName:string,
        eventData: {
            ...
        }
    })

    //页面跳转
    onPushAction(e,{
        actionType: 'changePage'
        eventName: 'eg: from XXXX page',
        eventData: {
            page:10,
            step:0
        }
    })

    //操作事件
    onPushAction(e,{
        actionType: 'fireEvent'
        eventName: 'eg: from XXXX page',
        eventPage: currentPage,
        eventPageStep: currentStep,
        eventData: {
            playAudio:"iHaveAPaper"
            ...someData
        }
    })

    操作事件在提交之前，在外层会自动加入当前页面、步骤和时间戳数据
    {
        eventPage: currentPage,
        eventPageStep: currentStep,
        eventTime:(new Date()).getTime()
    }

```

####  `事件响应方式`
页面获取redux中的 currentRecord，对最后一条进行判断，如果符合本页的事件，执行事件
```
    import { useSelector } from "react-redux";

    const {
		currentPage,
		currentStep,
        currentRecord,
        prevRecord,
    } = useSelector((state) => state.app);

    useEffect(()=>{
		if(currentRecord.length > 0){
			let recordEventData = currentRecord[currentRecord.length-1];
			if(recordEventData.eventPage === currentPage && 
				recordEventData.eventPageStep === currentStep &&
				recordEventData.eventName === imgClickEventName){
				console.log(`runRecordEvent`,recordEventData)
				setImages(recordEventData.eventData.images);
				setImageIcons(recordEventData.eventData.imageIcons);

				//do something
			}
		}
	},[currentRecord])
```

### `本地主要的redux数据`

```
    currentPage:0,//当前页面
    currentStep:0,//当前页面的步骤
    currentRecord:[],//当前页面的操作事件列表记录
    prevRecord:[],//上一次操作的事件列表记录
```
