import React, { useState } from "react";

let timerID;

const formatTime = (count) => {
	let min = Math.floor((count / 1000 / 60) << 0);
	if (min < 10) {
		min = "0" + min;
	}

	let sec = Math.floor((count / 1000) % 60);
	if (sec < 10) {
		sec = "0" + sec;
	}

	return min + ":" + sec;
};

const Timer = ({ time, step, onTick, autostart }) => {
	const [count, setCount] = React.useState(time);
	const [paused, setPaused] = React.useState(!autostart);

	const tik = () => {
		setCount((prev) => prev - step);
	};

	React.useEffect(() => {
		if (paused) {
			timerID = setInterval(tik, step);
			onTick(count);
			if (count === 0) {
				setPaused(!paused);
			}
			return () => {
				clearInterval(timerID);
			};
		}
	}, [count, paused]);

	const clickHandler = () => {
		if (count === 0) {
			setCount(time);
		}
		setPaused(!paused);
	};

	return (
		<div>
			<div>{formatTime(count)}</div>
			<button onClick={clickHandler}>{!paused ? "Start" : "Pause"}</button>
		</div>
	);
};

export default Timer;