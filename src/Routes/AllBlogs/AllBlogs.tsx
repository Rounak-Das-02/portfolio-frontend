import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../Contact';
import ResponsiveNavBar from '../../Miscellaneous/newNav';

interface StateProperties {
        "_id": string,
        "author_id": string,
        "title": string,
        "slug": string,
        "link": string,
        "date": string,
}



const AllBlogs = () => {

    const [data, setFetchedData] = useState<StateProperties[]>([])

    useEffect(()=>{
        const getData = async () => {
            const _data = await axios.get("http://localhost:3000/blog/showall");
            setFetchedData(_data.data)
        }
        getData()
    }, [])


    return (
        <div>
            <ResponsiveNavBar></ResponsiveNavBar>
            <div className="flex flex-col text-gray-900 items-center w-full font-Oxanium bg-gray-100 " id="blogs"> 
                <div className="font-Oxanium lg:text-7xl md:text-5xl sm:text-3xl m-10">My Blogs</div>
                {
                    data.map((data) => {
                        return (
                            <div className='w-full md:w-4/5 flex flex-col md:px-5 m-2'>
                                <div className=' px-10 pt-10 rounded-full'>                         
                                        <div className='flex flex-row justify-between mx-1 py-2 px-3 rounded-t-2xl bg-gradient-to-b from-gray-400 to-blue-0 opacity-75'>
                                            <h1 className='text-2xl'>{data.title}</h1>
                                            <h2 className=''>{new Date(Date.parse(data.date)).toString().slice(3,16)}</h2>
                                        </div>
                                        <div className='py-5 mx-1 p-3 text-md'>
                                            {data.slug}
                                        </div>
                                        <div className='text-center'><Link to = {"/blog/" + data._id} className='border-2 border-purple-300 p-1 rounded-lg text-purple-500 opacity-70 hover:text-purple-700 hover:opacity-100 duration-100 ease-in-out'>Read More ... </Link></div>
                                        <div className='text-lg py-5 mx-1 p-3 bg-indigo-0 rounded-b-lg shadow-lg' >
                                        </div>
                                    </div>                                              
                        </div>
                        )
                    })
                }
                <br></br>
                <Contact></Contact>
            </div>
        </div>
    )
}

export default AllBlogs;