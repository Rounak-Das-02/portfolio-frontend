import React from 'react'

const data = [
    {
        author_id : "1",
        blogs : [
            {
            title: "Title 1",
            slug : "Slug 1",
            link : "Link 1",
            date : Date().toString().slice(3,16)
        },
        {
            title: "Title 1.1",
            slug : "Slug 1.1",
            link : "Link 1.1",
            date : Date().toString().slice(3,16)
        }
    ]
    },
]


const Blogs = () => {
    return (
        <div className="flex flex-col items-center w-full min-h-screen max-h-screen overflow-y-hidden font-Oxanium" id="blogs"> 
            <div className="font-Oxanium text-9xl md:text-7xl">My Blogs</div>
            {
                data.map((data) => {
                    return (
                    <div className='w-full flex flex-col px-5'>
                        {data.blogs.map((blog) => {
                            return(
                                <div className=' px-10 pt-10'>                         
                                    <div className='flex flex-row justify-between mx-1 py-2 px-3 rounded-2xl bg-gradient-to-b from-indigo-300 to-indigo-50 opacity-75'>
                                        <h1 className=''>{blog.title}</h1>
                                        <h2 className=''>{blog.date}</h2>
                                    </div>
                                    <div className='py-5 mx-1 p-3'>
                                        {blog.slug}<br></br>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero laboriosam quae molestiae voluptatibus ab, nisi repudiandae. Mollitia sequi maiores rerum.
                                    </div>
                                    <div className='text-center'><a className='border-2 border-purple-300 p-1 rounded-lg text-purple-500 opacity-70 hover:text-purple-700 hover:opacity-100 duration-100 ease-in-out'>Read More ... </a></div>
                                </div>

                            )
                        })}  
                                              
                    </div>
                    )
                })
            }
            <div className='px-10 pt-10'>
                <div className='w-full flex flex-col px-5'>
                            <div className='p-10 flex flex-row justify-between bg-indigo-200 mx-1 py-2 px-3 rounded-2xl  bg-gradient-to-b from-indigo-200 to-indigo-50 opacity-75'>
                                <h1 className=''>Random Title</h1>
                                <h2 className=''>Dec 21 2021</h2>
                            </div>
                            <div className='py-5 mx-1 p-3 opacity-5 pb-0 mb-0'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, reprehenderit. Nostrum porro cum, aliquid temporibus sed delectus accusamus ad eveniet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, adipisci quidem. Quo neque, ullam deleniti minima unde facere repellendus vitae?
                            </div>
                </div>
            </div>
            <a className={"text-white rounded-full bg-indigo-500 hover:bg-indigo-700 px-4 py-1.5 duration-200 ease-in-out"}> See More Blogs ... </a>
        </div>
    )
}

export default Blogs;