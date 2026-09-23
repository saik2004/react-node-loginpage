import Navtitle from "./Navtitle"
function Loginfailed(){
    return(
         <div className=" bg-[#FFFCF9] w-full h-screen  flex flex-col items-center-center">
            <Navtitle/>
            <div className="pt-50 flex flex-col gap-2 items-center p-10">
                <h1 className="text-3xl">Login Failed!</h1>
                <p className="text-xl">We are sorry!</p>
            </div>
        </div>
    )
}

export default Loginfailed