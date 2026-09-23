import Navtitle from "./Navtitle"
function Dashboard(){
    return(
        
        
        <div className=" bg-[#FFFCF9] w-full h-screen  flex flex-col items-center-center">
            <Navtitle/>
            <div className="pt-50 flex flex-col gap-2 items-center p-10">
                <h1 className="text-3xl">Login Successful!</h1>
                <p className="text-xl">have a great day!</p>
            </div>
        </div>
        
    )
}

export default Dashboard