import { FcGoogle } from "react-icons/fc";
import { useSelector } from "react-redux";
// import {useGoogleLogin,GoogleOAuthProvider} from '@react-oauth/google';

import frameImg from "../../../assets/Images/frame.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth);
  const responseGoogle = async(authResult)=>{
    try {
      console.log(authResult);
      
    } catch (error) {
      console.log("Error while sign in with google", error);
      
    }
  }

  // const googleLogin = useGoogleLogin({
  //   onSuccess: responseGoogle,
  //   onError: responseGoogle,
  //   flow:'auth-code'

  // })

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
              {title}
            </h1>
            <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
              <span className="text-richblack-100">{description1}</span>{" "}
              <span className="font-edu-sa font-bold italic text-blue-100">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
            <div className="flex place-items-center gap-1 mt-5 border border-richblack-5 py-2 justify-center rounded-md cursor-pointer" >
              <FcGoogle />
              <button className="text-richblack-5" >
                Login with Google
              </button>
            </div>
          </div>
          <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
            <img
              src={frameImg}
              alt="Pattern"
              width={558}
              height={504}
              loading="lazy"
            />
            <img
              src={image}
              alt="Students"
              width={558}
              height={504}
              loading="lazy"
              className="absolute -top-4 right-4 z-10"
            />
          </div>
        </div>
      )}
      {/* <div className="text-white">ckjbsdkfbj</div> */}
    </div>
  );
}

export default Template;
