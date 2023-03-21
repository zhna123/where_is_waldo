import { useEffect, useState } from "react";
import PAUSE from "../images/pause.png"
import ARROW from "../images/green-arrow.png"

function Timer({ timerOverlayRef, recordTotalTimeUsed }) {
    const [isActive, setIsActive] = useState(true);
    const [time, setTime] = useState(0);
    const [paused, setPaused] = useState(false);

    const timeLimit = 30 * 60 * 1000;
    // time change
    useEffect(() => {
        let interval = null;
        console.log('call use effect')
        if (isActive && !paused) {
            interval = setInterval(() => {
                // timer change every one second
                setTime((pre) => pre + 1000)
            }, 1000)
        } else {
            clearInterval(interval)
        } 
        
        return () => {
            recordTotalTimeUsed(time)
            clearInterval(interval)
        }
    }, [isActive, paused, recordTotalTimeUsed])

    // time is up
    useEffect(() => {
        if (time > timeLimit) {
            setIsActive(false)
            recordTotalTimeUsed(time)
        }
    }, [time, timeLimit, recordTotalTimeUsed])

    useEffect (() => {
        const timerOverlayElement = timerOverlayRef.current;
        if (paused) {
            timerOverlayElement.classList.add("timer_overlay_show");
        } else {
            timerOverlayElement.classList.remove("timer_overlay_show");
        }
    }, [paused])

    const handleTimerPause = () => {
        setPaused(!paused)
    }

    const renderTimer = () => {
        return (
            <div className="timer">
                <img src={ paused ? ARROW : PAUSE } alt="" onClick={ handleTimerPause }/>
                <span className="time">
                    {("0" + Math.floor((time / 60000))).slice(-2)}:
                </span>
                <span className="time">
                    {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                </span>
            </div>
        )
    }

    return (
        <>
        {time <= timeLimit ? renderTimer() : <div className="time">Time is Up (30 minutes)</div>}
        </>
        
        
    )
}

export default Timer;