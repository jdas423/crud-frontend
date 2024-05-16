import CloseIcon from '@mui/icons-material/Close';

export default function Signin({dispatch}){
    return(
        <div className="flex h-[fit-content] flex-1 flex-col justify-center p-[20px] lg:px-8 bg-white rounded-[8px] max-w-[300px] w-[80vw]">
        <div className=" relative sm:mx-auto sm:w-full sm:max-w-sm flex justify-center items-center flex-col">
        <div className='absolute top-[-10px] right-[-10px] p-[10px] cursor-pointer'
         onClick={()=>dispatch({type:"setSignInShow",value:false})}
        ><CloseIcon style={{fontSize:"16px",color:"#6EEB83"}}/></div>
          <h2 className="mt-[10px] text-center text-[1rem] font-bold leading-9 tracking-tight text-green-variant">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-[10px] sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-[14px] font-medium leading-6 text-green-variant">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=" !text-[12px] block w-full rounded-md border-0 py-1.5 px-[8px] text-green-variant shadow-sm ring-1 ring-inset ring-green-variant placeholder:text-green-variant focus:ring-2 focus:ring-inset focus:ring-green-variant outline-white sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between flex-wrap">
                <label htmlFor="password" className="block text-[14px] font-medium leading-6 text-green-variant">
                  Password
                </label>
                <div className="text-sm ml-[10px]">
                  <a href="#" className="font-light text-black hover:text-green-variant text-[14px] opacity-80">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-[8px] text-green-variant shadow-sm ring-1 ring-inset ring-green-variant placeholder:text-green-variant focus:ring-2 focus:ring-inset focus:ring-green-variant text-[12px] sm:leading-6 outline-white"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-variant px-3 py-1.5 text-[14px] font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-[15px] text-center text-[14px] text-green-variant">
            Not a member?{' '}
            <a href="#" className="font-light leading-6 text-black opacity-80   hover:text-green-variant text-[14px]">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    )
}
