import React, { useMemo } from "react";
import styles from "./styles";

const Container = (props) => {
	const { customStyleContainer } = props;

	const styleContainer = useMemo(() => {
		return window.innerHeight < window.innerWidth
			? styles.container
			: styles.container2;
	}, []);

	return (
		<div
			style={{
				...styleContainer,
				...customStyleContainer,
				// backgroundColor: "red",
			}}
		>
			{props.children}
		</div>
	);
};
export default React.memo(Container);
