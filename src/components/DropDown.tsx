import { useState } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';

const animals = ['apes', 'bear', 'cat', 'dog']

function DropDown(){
    const [isOpen, setIsOpen] = useState(false);
    const refEle = useClickOutside(()=>{setIsOpen(false)})

    return (
        <>
        <div ref={refEle}>
            <button onClick={()=>{setIsOpen(!isOpen)}}>{isOpen ? "close animals" : "see animals"}</button>
            {isOpen && animals.map((a, i)=><div key={i}>{a}</div>
            )}
        </div>
        <select>
            {animals.map((a, i)=><option key={i}>{a}</option>)}
        </select>
        </>
    );
}

export default DropDown;