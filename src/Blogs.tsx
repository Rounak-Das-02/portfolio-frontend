import axios from 'axios'
import { useEffect, useState } from 'react';


interface StateProperties {
        "_id": string,
        "author_id": string,
        "title": string,
        "slug": string,
        "link": string,
        "date": string,
}



const Blogs = () => {

    const [data, setFetchedData] = useState<StateProperties[]>([])

    useEffect(()=>{
        const getData = async () => {
            const _data = await axios.get("http://localhost:3000/blog/showfew/4");
            setFetchedData(_data.data)
        }
        getData()
    }, [])


    return (
        <div className="flex flex-col items-center w-full min-h-screen overflow-y-hidden font-Oxanium" id="blogs"> 
            <div className="font-Oxanium text-7xl md:text-9xl">My Blogs</div>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
            {
                data.map((data) => {
                    return (
                    
                        <div className=" w-full lg:max-w-full lg:flex shadow-xl">
                                <div className="border-r border-t border-l border-gray-400 lg:border-r-0 lg:border-b lg:border-gray-400  h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-gradient-to-r from-indigo-800 to-white rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl text-center overflow-hidden" title="Mountain">
                                    
                                </div>
                                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl p-4 flex flex-col justify-between leading-normal">
                                    <div className="mb-8">
                                        <p className="text-sm text-gray-600 flex items-center">
                                            <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                            </svg>
                                        </p>
                                        <div className="text-gray-900 font-bold text-xl mb-2">{data.title}</div>
                                        <p className="lg:h-40 lg:w-56 text-gray-700 text-base"></p>
                                    </div>
                                    <div className="flex items-center">
                                    {/* <img className="w-10 h-10 rounded-full mr-4" src="/ben.png" alt="Avatar of Writer"/> */}
                                    <div className="text-sm">
                                        <p className="text-gray-900 leading-none">{data.title}</p>
                                        <p className="text-gray-600">{new Date(Date.parse(data.date)).toString().slice(0,16)}</p>
                                    </div>
                                    </div>
                                </div>
                        </div>
)}
                )}
            </div> 

            <a href="allblogs" className={"text-white rounded-full bg-indigo-500 hover:bg-indigo-700 px-4 py-1.5 duration-200 ease-in-out"}> See More Blogs ... </a>
       
        </div>
    )
}

export default Blogs;