import { useState } from 'react';

const images = ["https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=UHeb1pGOw6ozr6utsenXHhV19vW6oiPIxDqhKCS2Llk=", 
    "https://media.istockphoto.com/id/155368591/photo/cocktail-butterflies.jpg?s=612x612&w=0&k=20&c=uGBJdH4PCLCKPKyCPCrBaRzrvNdKntm2UUVdjFdGGY8=",
    "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"]

function Carousel(){

    const [currentIndex, setCurrentIndex] = useState(0);

    function handlePrev(){
        if(currentIndex > 0)
        setCurrentIndex(currentIndex - 1);
    }

    function handleNext(){
        if(currentIndex < images.length - 1){
            setCurrentIndex(currentIndex + 1);
        }
    }

    return(
        <div>
           <button onClick={handlePrev}>prev</button>
           <img src={images[currentIndex]} style={{height:"100px", width:"100px"}}></img>
           <button onClick={handleNext}>next</button>
        </div>
    )
}

export default Carousel;