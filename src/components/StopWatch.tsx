import { useRef, useState } from "react";

function StopWatch(){
    const [seconds, setSeconds] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const id = useRef(null);
    
    function onStart() {
        if(!id.current){
            const currId = setInterval(() => setSeconds((s)=>s+1), 10);
            id.current = currId;
            setIsTimerRunning(true);
        }
    }
    function onStop() {
        clearInterval(id.current);
        id.current = null;
        setIsTimerRunning(false);
    }
    function onReset() {
        clearInterval(id.current);
        setSeconds(0);
        id.current = null;
        setIsTimerRunning(false);
    }

    function getMinutes(time: number) {
        const sec = Math.floor(time/100);
        const hours = Math.floor(sec/360000);
        const minutes = Math.floor((sec % 360000)/60);
        const seconds = sec % 6000;
        const ms = time % 100; 
        return <p>{hours.toString().padStart(2, "0")} : {minutes.toString().padStart(2, "0")} : {seconds.toString().padStart(2, "0")} : {ms.toString().padStart(2, "0")}</p>
    }

return (
    <div style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"200px"}}>
        <div>
            {getMinutes(seconds)}
        </div>
        <div style={{display: "flex"}}>
            {isTimerRunning ? <button onClick={onStop}>Stop</button> :  <button onClick={onStart}>Start</button>}
            <button onClick={onReset}>Reset</button>
        </div>
    </div>
)
}

export default StopWatch;