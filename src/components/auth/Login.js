import React from "react";
import { useState } from "react";
import AnimationRevealPage from "../src/helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "../src/components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import logo from "../src/images/logo.svg";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import GoogleLogin from "react-google-login";
import Home from '../src/components/auth/Home';

const Container = tw(ContainerBase)`min-h-screen bg-blue-600 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-blue-600 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;






const Login =  (
) => {
const [loginData, setLoginData] = useState(
  localStorage.getItem('loginData') ? 
  JSON.parse(localStorage.getItem('loginData'))
  : null
);
const [cred,setCred] = useState({
  email:"",
  password:""
})

const [submit,setSubmit] = useState({
  email:"",
  password:""
})

const handleFailure = () => {
  alert("Failure");
}

const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setCred((prev) => {
      return ({
        ...prev,
        [name]:value
      });
  });
}

const handleSubmit = async (event) => {
  event.preventDefault()
  setSubmit(cred);
  console.log(cred)
  const res = await fetch(process.env.REACT_APP_API+'loginuser/',{
    method : 'POST',
    body : JSON.stringify(cred),
    headers : {
      'Content-Type': 'application/json',
    }
  });

  const data1 = await res.json();
  console.log(data1)
  if (data1 === "Failed"){
    alert("Invalid Credentials !!");
    setLoginData(null);
  }else {
    setLoginData(data1);
    localStorage.setItem('loginData',JSON.stringify(data1));
  }

  setCred({
    username:"",
    email:"",
    password:""
  })

}

const handleSuccess = async (data) => {
  console.log(data.profileObj.email);
  const res = await fetch('http://localhost:8000/socialuser/',{
    method : 'POST',
    body : JSON.stringify({
      uid:null,
      username:data.profileObj.name,
      email:data.profileObj.email,
      password:"null",
      image: data.profileObj.imageUrl
    }),
    headers : {
      'Content-Type': 'application/json',
    }
  });

  const data1 = await res.json();
  setLoginData(data1);
  localStorage.setItem('loginData',JSON.stringify(data1));
  console.log(localStorage.getItem('loginData'))

  localStorage.setItem('token',true);
}

  return (
  <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer>
        {
                  loginData ? (
                    <>
                    {window.location.href="/dash"}
                    
                    <Home  />
                    </>
                  ) : <>
          <LogoLink href="/">
            <LogoImage src={logo} />
          </LogoLink>
          <MainContent>
            <Heading>Sign In To ShortNt</Heading>
            <FormContainer>
              <SocialButtonsContainer>

               
                <GoogleLogin
                className = "gbtn"
                clientId = {process.env.REACT_APP_GOOGLE_CLIENT_ID}
              
                onSuccess={handleSuccess}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
                ><span className="gtext">Sign In with Google</span>
                </GoogleLogin>
              </SocialButtonsContainer>
              <DividerTextContainer>
                <DividerText>Or Sign in with your e-mail</DividerText>
              </DividerTextContainer>
              <Form onSubmit={handleSubmit}>
                <Input type="email" placeholder="Email" value={cred.email} name="email" onChange={handleChange} required/>
                <Input type="password" placeholder="Password" value={cred.password} name="password" onChange={handleChange} required/>
                <SubmitButton type="submit">
                  <LoginIcon className="icon" />
                  <span className="text">Sign in</span>
                </SubmitButton>
              </Form>
              <p tw="mt-6 text-xs text-gray-600 text-center">
                <a href="/" tw="border-b border-gray-500 border-dotted">
                  Forgot Password ?
                </a>
              </p>
              <p tw="mt-8 text-sm text-gray-600 text-center">
                Dont have an account?{" "}
                <a href="/signup" tw="border-b border-gray-500 border-dotted">
                  Sign Up
                </a>
              </p>
            </FormContainer>

          </MainContent>
          </>
            }
        </MainContainer>
      </Content>
    </Container>
  </AnimationRevealPage>
);
      }

export default Login;