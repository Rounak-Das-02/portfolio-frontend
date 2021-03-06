import React from "react";

const About = () => {
    return (
    <div className="flex flex-col items-center w-full space-y-4 min-h-full font-Oxanium py-10" id="about"> 
        <div className="font-Oxanium text-7xl md:text-8xl">About Me</div>
        <p className="font-Oxanium text-center text-md md:text-xl px-5">
            Hey there! My name is Rounak and I am a highly passionate and curious individual. I've really not much idea what to write about myself. Well, let's pen it down in a way which would be less embarassing for me. 
            I am a type of person who is curious about the world and how the world runs. Small stuff like electrical appliances and their power ratings intrigues me. How do we use them to create something beautiful and useful?
            Well ... I will complete this later. It is almost 2 a.m. and I am trying to write about myself. I really think it is not the best time to write about anything (wink wink ;))
        </p>
        
        <a className={"text-white rounded-full bg-indigo-500 hover:bg-indigo-700 px-4 py-1.5 duration-200 ease-in-out"}> Read More ... </a>

    </div>
)}

export default About;