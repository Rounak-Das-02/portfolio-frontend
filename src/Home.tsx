

const Home = () => {
    return (
    <div className="flex flex-col lg:flex-row space-x-10 space-y-5 p-5 text-9xl md:text-2xl min-h-screen w-full justify-center items-center" id = "home">
        <img className = "w-48 h-48 rounded-full shadow-xl " src = "https://st2.depositphotos.com/5045705/8696/v/950/depositphotos_86967558-stock-illustration-long-haired-teen.jpg" alt="Just my picture"/>
        <div className="flex flex-col space-y-4 bg-transparent rounded-xl p-7 shadow-xl border-t-2 md:border-0 border-gray-200 h-auto max-w-lg">
            <h1 className="md:text-9xl text-7xl space-y-3 text-indigo-500 font-Oxanium">Hi,</h1>
            <h2 className="font-Oxanium text-2xl md:text-5xl">I'm Rounak</h2>
            <p className="font-Oxanium text-lg md:text-4xl">
                And I am an inquisitive CompSci Student
            </p>
        </div>
    </div>
    )
}

export default Home;