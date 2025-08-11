import { useState } from "react";

function TabsComponent(){
    const [currentTab, setCurrentTab] = useState(1);

    function componentToShow(){
        if(currentTab === 1){
            return <span>content 1</span>
        }
        else if(currentTab === 2){
            return <span>content 2</span>
        }
        else if(currentTab === 3){
            return <span>content 3</span>
        } 
    }


    return(
        <>
            <div>
                <button onClick={()=>{setCurrentTab(1)}}>1st tab</button>
                <button onClick={()=>{setCurrentTab(2)}}>2nd tab</button>
                <button onClick={()=>{setCurrentTab(3)}}>3rd tab</button>
            </div>
            <div>
                {componentToShow()}
            </div>
        </>
    );
}

export default TabsComponent;