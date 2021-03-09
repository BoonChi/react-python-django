import React, { useEffect, useState } from 'react';
interface TimerProps {
    countTime: number
}

const Timer: React.FunctionComponent<TimerProps> = (props) => {
    const [countTime, setCountTime] = useState(0);
    const [started, setIsStarted] = useState(false);
    const [countingValue, setCountingValue] = useState(0);
    const handleCoundTimeChange = (event:any) => {
        setCountTime(event.target.value)
    }
    let countDownTimer:any = null
    let countDownNumber = 0
    const clearValue = () => {
        setCountTime(0)
        setIsStarted(false)
    }
    const startTimer = () => {
        setIsStarted(true)
        setCountingValue(countTime)
    }
    const countDown = () => {
        countDownNumber--
        console.log(countDownNumber)
        setCountingValue(countDownNumber)
        if(countDownNumber === 0) {
            clearInterval(countDownTimer)
            setIsStarted(false)
        };
    }
    const stopTimer = () => {
        setIsStarted(false)
        setCountTime(0)
    }
    useEffect(() => {
        console.log(started, countTime, countingValue)
        if(started && countTime === countingValue) {
            countDownNumber = countTime
            countDownTimer = setInterval(countDown,1000)
            console.log(countDownNumber)
        }
      }, [started])
    return (
        <div>
            <div>Time : 
                <input
                name="countTime"
                type="text"
                value={countTime}
                onChange={handleCoundTimeChange} />
            </div>
            {started ? <div>{countingValue}</div> : null}
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>End</button>
            <button onClick={clearValue}>Clear</button>
        </div>
    )

};

export default Timer;