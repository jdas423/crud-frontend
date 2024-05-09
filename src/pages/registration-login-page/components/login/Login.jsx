import "./Login.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';
import { useContext, useReducer,useCallback,useRef } from "react";
import { globalContext } from "../../RlPage";
import { NavLink } from "react-router-dom";

const initialState={
  warnText: "",
  showPass:false,
}


const reducer=(state,action)=>{
  switch(action.type){
    case "warnText": return{
      ...state,
      warnText:action.payload
    };
    case "showPass": return{
      ...state,
      showPass:action.payload
    };
    default: return state;
 }
}



export default function Login() {
   const {num,changeBorder} = useContext(globalContext);
   const [state,dispatch] = useReducer(reducer,initialState);
   const loginForm=useRef(null);
   const email = useRef(null);
   const password = useRef(null);


   const submitForm=useCallback((e)=>{
    e.preventDefault();
    e.stopPropagation();

     if(!email.current.value) dispatch({type:"warnText",payload:"Please enter email"});
     else if(!password.current.value) dispatch({type:"warnText",payload:"Please enter password"});
     else if(!email.current.value.match(/^[a-zA-Z0-9]+([\-.+_]{1}[a-zA-Z0-9]+)*@{1}[A-Za-z0-9]+([-.]{1}[a-zA-Z0-9]+)+$/)) dispatch({type:"warnText",payload:"Please enter a valid email address"});
     else dispatch({type:"warnText",payload:""});
     return;
  },[])

    return(
      <main className="p-[20px] w-[80%] max-w-[427px] relative max-lg:bg-[#424769]">
      <div className="login-form-name  text-left pl-[10px] text-[1.5rem] uppercase mb-[30px] ">Login</div>
      <div className="login-form-container">
        <form
          method="post"
          className="flex flex-col justify-start items-center login-form"
          ref={loginForm}
        >
          
          <label onClick={(e)=>{
            e.stopPropagation();
            changeBorder(1)
          }}  className={num===1?"!border-l-deeppink":"border-l-dark-blue"}>
            <span>Email
            </span>
            <input type="email" name="email" placeholder="Enter your email" ref={email}/>
          </label>
        
          <label onClick={(e)=>{
            e.stopPropagation();
            changeBorder(2)
          }}  className={num===2?"!border-l-deeppink":"!border-l-dark-blue"}>
            <span>Password
            </span>
            <div className="w-[80%] relative">
            <input name="password" type={state.showPass?"text":"password"} placeholder="Enter your password" className="!w-[80%]" ref={password}/>
            {
              state.showPass && (
                <div className="absolute  top-[2px] right-[8px] cursor-pointer" onClick={()=>dispatch({type:"showPass",payload:!state.showPass})}><VisibilityIcon style={{fontSize:"14px"}}/></div>
              )
            }
            {
              !state.showPass && (
                <div className="absolute  top-[2px] right-[8px] cursor-pointer" onClick={()=>dispatch({type:"showPass",payload:!state.showPass})}><VisibilityOffIcon style={{fontSize:"14px"}}/></div>
               
              )
            }
            </div>                  
          </label>
        
          <div className="text-white text-[12px] mt-[6px] mb-[3px] text-right w-full pr-[10px] cursor-pointer">
            <NavLink to="/register">Not registered?</NavLink>
          </div>
          <div className="text-white text-[12px] my-[6px] text-right w-full pr-[10px] cursor-pointer">
            <NavLink to="/forgot-pass">Forgot your Password?</NavLink>
          </div>
          {
            state.warnText &&  <div className="warning  text-red-500 text-[14px] mt-[6px] text-left w-full pl-[10px]">{state.warnText}</div>
          }
          <button onClick={(e)=>{submitForm(e);}}>Login</button>
          <div className="w-full flex !flex-row items-start mt-[10px]">
            <label className="w-full flex !items-center !justify-start !flex-row !bg-transparent !border-none">
              <span className="inline-block !mr-[10px] !w-[fit-content] !ml-[10px] !text-[16px]">Login Through</span>
              <span className="inline-block !mr-[10px] !w-[fit-content] cursor-pointer hover:text-deeppink">
                <EmailIcon style={{fontSize:"30px"}}/></span>
              <span className="inline-block !mr-[10px] !w-[fit-content] cursor-pointer hover:text-deeppink"><GoogleIcon style={{fontSize:"30px"}}/></span>
            </label>
          </div>
        </form>
      </div>
    </main>
    )
}