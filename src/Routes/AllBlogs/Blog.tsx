import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Contact from '../../Contact';
import ResponsiveNavBar from '../../Miscellaneous/newNav';
import parse from 'html-react-parser';
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
            const _data = await axios.get("http://localhost:3000/blog/getBlog/"+id);
            const __data = await axios.get(_data.data.data.link);
            console.log(__data.data)
            setFetchedData(__data.data)
        }
        getData()
    }, [])

    console.log(md.render(data))
    return (
       <div>
        <ResponsiveNavBar></ResponsiveNavBar> 
        <article className='prose prose-slate'>
            {parse(md.render(data))}
        </article>
        </div>
    )
}

export default Blog;