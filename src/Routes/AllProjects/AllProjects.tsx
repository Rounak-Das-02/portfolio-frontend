
import Contact from '../../Contact';
import  ResponsiveNavBar  from '../../Miscellaneous/newNav';
import data from './projects'
import parse from 'html-react-parser'

const AllProjects = () => {

    return (
        <div>
            <div className="pb-20">
                <ResponsiveNavBar></ResponsiveNavBar>
            </div>
            <div className="flex flex-col text-gray-900 items-center w-full font-Oxanium bg-gray-100 " id="blogs">
                <div className="font-Oxanium lg:text-7xl text-5xl m-10">My Projects</div>
                {
                    data.map((data) => {
                        return (
                            <div className='w-full md:w-4/5 flex flex-col md:px-5 m-2'>
                                <div className=' px-10 pt-10 rounded-full'>                         
                                        <div className='flex flex-col md:flex-row justify-between mx-1 py-2 px-3 rounded-t-2xl bg-gradient-to-b from-gray-400 to-blue-0 opacity-75'>
                                            <h1 className='text-3xl'>{data.title}</h1>
                                            <h2 className=''>{data.date}</h2>
                                        </div>
                                        <div className='text-lg py-5 mx-1 p-3 bg-indigo-0 rounded-b-lg shadow-lg'>{parse(data.description)}
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

export default AllProjects;