import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Form(){
    
    const [username,setusername] = useState('')
    const [pass,setpass] = useState('')

    const [emailerror,setemailerror] = useState(false)
    const [passworderror,setpassworderror] = useState(false)
    const [validusername,setvalidusername] = useState(false)
    const [validpass,setvalidpass] = useState(false)

    const navigate = useNavigate()

    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
     
     function handleusername(e){
      setusername(e.target.value.toLowerCase())

      if(!emailregex.test(username)){
        setemailerror(true)
        setvalidusername(false)
      }
      else{
        setemailerror(false)
        setvalidusername(true)
      }
    }

    function handlepassword(e){
     setpass(e.target.value.toLowerCase())
    
     if(pass.length<5){
        setpassworderror(true)
        setvalidpass(false)
      }
      else{
        setpassworderror(false)
        setvalidpass(true)
      }
     }

     function check(){
        const validuser = axios.post("http://localhost:3000/login",{username:username,password:pass})

        console.log(validuser)

        validuser.then((data)=>{
            if(data.data === true){
                navigate('/login')
            }
        })
        
     }

    return(
        <div className="p-5">
            <form action="">
                <table className="w-full">
                    <tr className="flex flex-col gap-1">
                       <p className="font-medium">Email</p>
                       <td><input className="border border-[#F7F2EF] rounded-xs w-full  p-2 outline-none shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]" 
                       type="text" onChange={handleusername} /></td>
                       {emailerror?<p className="text-xs mt-1 ml-1 text-red-500">email must contain @gmail and .com</p>:""}
                       {validusername?<div className="flex items-center gap-1 text-xs mt-1 ml-1 text-green-500">
                                          <p >Email</p> 
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                         </svg>
                                      </div>:""}
                    </tr>

                    <tr className="flex flex-col gap-1 mt-3">
                       <p className="font-medium">Password</p>
                       <td><input className="border border-[#F7F2EF] rounded-xs w-full p-2 outline-none shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]" type="text"
                        onChange={handlepassword} /></td>
                      {passworderror? <p className="text-xs mt-1 text-red-500">password must contain 6 characters</p>:""}
                      {validpass?<div className="flex items-center gap-1 text-xs mt-1 text-green-500">
                                          <p >Password</p> 
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                         </svg>
                                      </div>:""}
                    </tr>
                    
                    <tr className="text-right">
                        <p className="text-sm mt-2">forrgot password</p>
                    </tr>

                    <tr>
                        <button className="bg-[#181818] mt-3 rounded-sm text-white py-2 w-full" type="button" onClick={check}>Login</button>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default Form