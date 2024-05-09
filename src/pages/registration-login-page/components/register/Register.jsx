import "./Register.css";
import { useContext, useRef , useReducer, useCallback} from "react";
import { globalContext } from "../../RlPage";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink } from "react-router-dom";

const initialState={
  showPass1:false,
  showPass2:false,
  warnText:"",
}
const reducer = (state, action) => {
   switch(action.type){
      case "warnText": return{
        ...state,
        warnText:action.payload
      };
      case "showPass1": return{
        ...state,
        showPass1:action.payload
      };
      case "showPass2": return{
        ...state,
        showPass2:action.payload
      };
      default: return state;
   }
}
export default function Register() {
  const [state,dispatch]=useReducer(reducer,initialState);
  const {num, changeBorder} = useContext(globalContext);
  const registerForm = useRef(null);
  const firstname = useRef(null);
  const lastname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  const submitForm=useCallback((e)=>{
    e.preventDefault();
    e.stopPropagation();
    if(!firstname.current.value) dispatch({type:"warnText",payload:"Please enter first name"});
    else if(!lastname.current.value) dispatch({type:"warnText",payload:"Please enter last name"});
    else if(!email.current.value) dispatch({type:"warnText",payload:"Please enter email"});
    else if(!password.current.value) dispatch({type:"warnText",payload:"Please enter password"});
    else if(!confirmPassword.current.value) dispatch({type:"warnText",payload:"Please enter confirm password"});
    else if(password.current.value!==confirmPassword.current.value) dispatch({type:"warnText",payload:"Password and confirm password should be same"});
    else if(!email.current.value.match(/^[a-zA-Z0-9]+([\-.+_]{1}[a-zA-Z0-9]+)*@{1}[A-Za-z0-9]+([-.]{1}[a-zA-Z0-9]+)+$/)) dispatch({type:"warnText",payload:"Please enter a valid email address"});
    else dispatch({type:"warnText",payload:""});
    return;
  },[])
  
  return (
    <main className="p-[20px] w-[80%] max-w-[427px] relative max-lg:bg-[#424769]">
      <div className="register-form-name  text-left pl-[10px] text-[1.5rem] uppercase mb-[30px] ">Register</div>
      <div className="register-form-container">
        <form
          method="post"
          className="flex flex-col justify-start items-center register-form"
          ref={registerForm}
        >
          <label onClick={(e)=>{
            e.stopPropagation();
            changeBorder(1)
          }} className={num===1?"!border-l-deeppink":"!border-l-dark-blue"}>
            <span>Firstname
            </span>
            <input type="text" name="firstname" placeholder="Enter your firstname" ref={firstname}/>
          </label>
         
          <label onClick={(e)=>{
            e.stopPropagation();
            changeBorder(2)
          }}  className={num===2?"!border-l-deeppink":"!border-l-dark-blue"}>
            <span>Lastname
            </span>
            <input type="text" name="lastname" placeholder="Enter your lastname" ref={lastname} />
          </label>
         
          <label onClick={(e)=>{
            e.stopPropagation();
            changeBorder(3)
          }}  className={num===3?"!border-l-deeppink":"border-l-dark-blue"}>
            <span>Email
            </span>
            <input type="email" name="email" placeholder="Enter your email" ref={email}/>
          </label>
        
          <label onClick={(e)=>{
            e.stopPropagation();
            changeBorder(4)
          }}  className={num===4?"!border-l-deeppink":"!border-l-dark-blue"}>
            <span>Password
            </span>
            <div className="w-[80%] relative">
            <input name="password" type={state.showPass1?"text":"password"} placeholder="Enter your password" className="!w-[80%]" ref={password}/>
            {
              state.showPass1 && (
                <div className="absolute  top-[2px] right-[8px] cursor-pointer" onClick={()=>dispatch({type:"showPass1",payload:!state.showPass1})}><VisibilityIcon style={{fontSize:"14px"}}/></div>
              )
            }
            {
              !state.showPass1 && (
                <div className="absolute  top-[2px] right-[8px] cursor-pointer" onClick={()=>dispatch({type:"showPass1",payload:!state.showPass1})}><VisibilityOffIcon style={{fontSize:"14px"}}/></div>
               
              )
            }
            </div>
           
           
          </label>
         
          <label onClick={(e)=>{
            e.stopPropagation();
            changeBorder(5)
          }}  className={num===5?"!border-l-deeppink":"!border-l-dark-blue"}>
            <span>Confirm Password
            </span>
            <div className="w-[80%] relative">
            <input type={state.showPass2?"text":"password"} name="confirmPassword" placeholder="confirm your password"  className="!w-[80%]" ref={confirmPassword}/>
             {
               state.showPass2 && (
                <div className="absolute top-[2px] right-[8px] cursor-pointer" onClick={()=>dispatch({type:"showPass2",payload:!state.showPass2})}><VisibilityIcon style={{fontSize:"14px"}}/></div>
               )
             }
             {
              !state.showPass2 && (
                <div className="absolute  top-[2px] right-[8px] cursor-pointer" onClick={()=>dispatch({type:"showPass2",payload:!state.showPass2})}><VisibilityOffIcon style={{fontSize:"14px"}}/></div>
              )
             }
             
            </div>     
          </label>
          <div className="text-white text-[12px] my-[6px] text-right w-full pr-[10px] cursor-pointer">
            <NavLink to="/login">Already Registered?</NavLink>
          </div>
          {
            state.warnText &&  <div className="warning  text-red-500 text-[14px] mt-[6px] text-left w-full pl-[10px]">{state.warnText}</div>
          }
          <button onClick={(e)=>{submitForm(e);}}>Register</button>
          <div className="w-full flex !flex-row items-start mt-[10px]">
            <label className="w-full flex !items-center !justify-start !flex-row !bg-transparent !border-none">
              <span className="inline-block !mr-[10px] !w-[fit-content] !ml-[10px] !text-[16px]">Register Through</span>
              <span className="inline-block !mr-[10px] !w-[fit-content] cursor-pointer hover:text-deeppink">
                <EmailIcon style={{fontSize:"30px"}}/></span>
              <span className="inline-block !mr-[10px] !w-[fit-content] cursor-pointer hover:text-deeppink"><GoogleIcon style={{fontSize:"30px"}}/></span>
            </label>
          </div>
        </form>
      </div>
    </main>
  );
}
