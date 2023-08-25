import { useState } from "react";
import loginImg from "../static/login.svg";
import Button from "../components/Button/Button";
import InputBox from "../components/InputBox/InputBox";
import { useLoginMutation } from "../hooks/apollo/mutation/auth";
import { themeProps } from "../types/Types";



function Login({ theme }: themeProps) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSuccess = () => {
    alert("Email: " + email + " Password: " + password);
  };

  const handleLoginFailure = (error: { message: string }) => {
    alert("Error: " + error);
  };



  const [, login] = useLoginMutation({
    onSuccess: handleLoginSuccess,
    onFail: handleLoginFailure,
  });



  const handleValidate = () => {
    alert("Email: " + email + " Password: " + password);
    login({
      variables: {
        email: email,
        password: password,
      }
    });
  };
  return (
    <div className="flex justify-center h-screen " data-theme={theme}>
      <div className="bg-dark w-full md:w-3/5 p-7 flex flex-col">
        <div className="flex justify-center md:justify-start">
          <h2 className="text-xl font-black text-customColor">maxence.co.in</h2>
        </div>
        <div className="flex items-center justify-center flex-grow">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <h1 className="text-5xl bg-txtColor font-semibold mb-3">
              Welcome back
            </h1>
            <div className="form-control">
              <InputBox label="Email" type="email" placeholder="Enter your email" state={email} setState={setEmail} />
              <InputBox label="Password" type="password" placeholder="Enter your password" state={password} setState={setPassword} />
              <a
                className="text-customColor hover:text-blue-800 my-3 font-bold"
                href="/login"
              >
                Forgot password
              </a>
              <Button bgColor="bg-customColor" customClass="w-full" validate={handleValidate}>Sign in</Button>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-gray-500">&copy; copyright 2023</h4>
        </div>
      </div>
      <div
        className={`w-2/5 hidden md:flex p-24 ${theme === "dark" ? "bg-dark" : "bg-gray-100"
          }`}
      >
        <img className="" src={loginImg} alt="login" />
      </div>
    </div>
  );
}

export default Login;
