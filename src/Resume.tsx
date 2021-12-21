import react from 'react'


const Resume = () =>{
    return (
    <div className="flex flex-row space-x-10 text-9xl md:text-2xl min-h-screen w-full justify-center items-center" id = "resume">
        <a className={"text-white rounded-full bg-indigo-500 hover:bg-indigo-700 px-4 py-1.5 duration-200 ease-in-out flex flex-row space-x-1"}>
             <p>See My Resume</p>
            <svg className = "m-1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><g><rect fill="none" height="24" width="24"/><g><path d="M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z"/></g><path d="M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z"/></g></svg>
             </a>

</div>
    )}


export default Resume;