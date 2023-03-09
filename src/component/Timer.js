import { useEffect, useState } from "react";

function Timer({ totalMarks }) {
    const [isActive, setIsActive] = useState(true);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTime((pre) => pre + 1000)
            }, 1000)
        } else {
            clearInterval(interval)
        } 
        
        return () => {
            clearInterval(interval)
        }
    }, [isActive])

    useEffect(() => {
        if (totalMarks === 5) {
            setIsActive(false)
        }
    }, [totalMarks])

    return (
        <div className="timer">
            <span className="digit">
                {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="digit">
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
            </span>
        </div>
    )
}

export default Timer;