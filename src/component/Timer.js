import { useEffect, useState } from "react";

function Timer({ recordTotalTimeUsed }) {
    const [isActive, setIsActive] = useState(true);
    const [time, setTime] = useState(0);

    const timeLimit = 30 * 60 * 1000;
    // time change
    useEffect(() => {
        let interval = null;
        if (isActive) {
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
    })

    // time is up
    useEffect(() => {
        if (time > timeLimit) {
            setIsActive(false)
            recordTotalTimeUsed(time)
        }
    }, [time, timeLimit, recordTotalTimeUsed])

    const renderTimer = () => {
        return (
            <div className="timer">
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