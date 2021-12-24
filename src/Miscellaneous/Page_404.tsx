import ResponsiveNavBar from "./newNav";

const picture = require('./Page_404.jpg');

const PageNotFound = () => {

    return (
        <div>
            <ResponsiveNavBar></ResponsiveNavBar>

<div className="flex flex-col justify-center items-center text-center px-8 py-12" id = "contact">
        <div className="font-Oxanium lg:text-9xl md:text-5xl sm:text-4xl p-5 rounded-full">Page 404</div>
        <div className="max-w-screen-xl mt-24 px-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-2xl">
        <div className="flex flex-col justify-center items-center">
            <div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Sorry !!! <br></br>I cannot find what you are looking for!</h2>
            </div>
            <div className="mt-8 text-center">
                <img className = "w-80 rounded-2xl shadow-lg "src={picture} alt="Logo"/>
            </div>
        </div>
        </div>
</div>
        </div>
    )

 }


 export default PageNotFound;