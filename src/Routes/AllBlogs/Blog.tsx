import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ResponsiveNavBar from '../../Miscellaneous/newNav';
import parse from 'html-react-parser';
import Contact from '../../Contact';
var md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true
  });



const Blog = () => {

    let {id} = useParams()
    const [data, setFetchedData] = useState("")
    useEffect(()=>{
        const getData = async () => {
            const _data = await axios.get(`https://${process.env.REACT_APP_API_DOMAIN}/blog/getBlog/`+id);
            const __data = await axios.get(_data.data.data.link);
            setFetchedData(__data.data)
        }
        getData()
    }, [])

    console.log(parse(data))
    return (
       <div className='bg-gray-100'>
        <div className="pb-28">
                <ResponsiveNavBar></ResponsiveNavBar>
            </div>
        <article className='mx-10 md:mx-80 font-Oxanium no-tailwindcss-base'>
            {parse(md.render(data))}
        </article>
        <Contact></Contact>
        </div>
    )
}

export default Blog;