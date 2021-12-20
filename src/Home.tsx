import React from "react";

const Home = () => {
    return (
    <div className="flex flex-row space-x-10 text-9xl md:text-2xl min-h-screen w-full justify-center items-center" id = "home">
        <img className = "w-48 h-48 rounded-full shadow-xl " src = "https://st2.depositphotos.com/5045705/8696/v/950/depositphotos_86967558-stock-illustration-long-haired-teen.jpg"></img>
        <div className="flex flex-col space-y-4 bg-transparent rounded-xl p-7 shadow-xl  h-auto max-w-lg">
            <h1 className="text-9xl md:text-7xl space-y-3 text-indigo-500 font-Oxanium">Hi,</h1>
            <h2 className="font-Oxanium text-5xl">I'm Rounak</h2>
            <p className="font-Oxanium text-4xl">
                And I am an inquisitive CompSci Student
            </p>
        </div>
    </div>
    )
}

export default Home;