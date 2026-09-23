import Form from "./Form"

function Login(){
    return(
        <div className="mt-23 p-3">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl">Welcome Back!</h1>
            <p className="text-xs">The faster you fill up. the faster you get a access</p>
          </div>

          <Form/>
        </div>
    )
}

export default Login