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
            await axios.get(`https://${process.env.REACT_APP_API_DOMAIN}/blog/showfew/4`).then((response) => {setFetchedData(response.data)}).catch((error) => {
                if(error) return <div className="flex flex-col items-center w-full min-h-screen overflow-y-hidden font-Oxanium text-center" id="blogs"> Sorry! Cannot Fetch Blogs at the moment. Wait for sometime, or try refreshing</div>
            });
        }
        getData()
    }, [])


    return (
        <div className="flex flex-col items-center w-full min-h-screen overflow-y-hidden font-Oxanium" id="blogs"> 
            <div className="font-Oxanium text-7xl md:text-8xl">My Blogs</div>
            <div className="p-10 flex flex-wrap -m-3 w-full">
            {
                data.map((data) => {
                    return (

                          <a href = {data.link} className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col hover:bg-gray-100">
                              <div className="bg-cover h-48 bg-gradient-to-b from-indigo-600 to-transparent hover:from-indigo-500"></div>
                              <div className="p-4 flex-1 flex flex-col">
                                <h3 className="mb-4 text-2xl">{data.title}</h3>
                                <div className="mb-4 text-grey-darker text-sm flex-1">
                                  <p>{data.slug.slice(0,1000)} </p>
                                </div>
                                <a href="#" className="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide">{new Date(Date.parse(data.date)).toString().slice(3,16)}</a>
                              </div>
                            </div>  
                          </a>
)}
                )}
            </div> 

            <a href="allblogs" className={"text-white rounded-full bg-indigo-500 hover:bg-indigo-700 px-4 py-1.5 duration-200 ease-in-out"}> See More Blogs ... </a>
       
        </div>
    )
}

export default Blogs;