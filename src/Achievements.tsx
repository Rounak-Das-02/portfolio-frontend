
import parse  from 'html-react-parser';
import data from './Routes/AllAchievements/achievements'


const Achievements = () => {
    return (
        <div className="flex flex-col items-center w-full min-h-screen max-h-max font-Oxanium " id="achievements"> 
            <div className="font-Oxanium text-5xl md:text-8xl text-center">My <br></br>Achievements</div>
            {
                data.slice(0,2).map((data) => {
                    return (
                    <div className='w-full flex flex-col px-5'>
                                <div className=' px-10 pt-10'>                         
                                    <div className='flex flex-row justify-between mx-1 py-2 px-3 rounded-t-2xl bg-gradient-to-b from-indigo-300 to-indigo-50 opacity-75'>
                                        <h1 className='md:text-3xl'>{data.title}</h1>
                                        <h2 className='text-sm md:text-xl'>{data.date}</h2>
                                    </div>
                                    <div className='py-5 mx-1 p-3'>
                                        {parse(data.description)}<br></br>
                                    </div>
                                    <div className='text-center'><a href= "/allachievements" className='border-2 border-purple-300 p-1 rounded-lg text-purple-500 opacity-70 hover:text-purple-700 hover:opacity-100 duration-100 ease-in-out'>Read More ... </a></div>
                                </div>                                              
                    </div>
                    )
                })
            }
            <div className='px-10 pt-10 w-full'>
                <div className='w-full flex flex-col px-5'>
                            <div className='p-10 flex flex-row justify-between bg-indigo-200 mx-1 py-2 px-3 rounded-2xl  bg-gradient-to-b from-indigo-200 to-indigo-50 opacity-75'>
                                <h1 className='md:text-3xl'>{data[2].title}</h1>
                                <h2 className='text-sm md:text-xl'>{data[2].date}</h2>
                            </div>
                            <div className='py-5 mx-1 p-3 opacity-5 pb-0 mb-0'>
                            {parse(data[2].description.slice(0,100))}<br></br>
                            </div>
                </div>
            </div>
            <a href = "/allachievements" className={"text-white rounded-full bg-indigo-500 hover:bg-indigo-700 px-4 py-1.5 duration-200 ease-in-out"}> See More ... </a>
        </div>
    )
}

export default Achievements;