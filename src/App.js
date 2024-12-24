import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global/global";
import theme from "./global/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setUserStatus } from "./modules/user";


function App() {
const dispatch = useDispatch();
const { currentUser, isLogin } = useSelector((state)=>state.user);
const jwtToken = localStorage.getItem("jwtToken");
  // 최초 사용자가 토큰을 가지고 있는지 확인하고, 토큰 요청을 보낸다.
  // 토큰 요청시 만료되었다면 삭제하고, 만료가 되지 않았다면 자동으로 로그인 시킨다.
useEffect(()=>{
  
  
  if(jwtToken){
    const isAuthenticate = async ()=>{
      const response = await fetch("http://localhost:8000/oauth/jwt",{
        method: "POST",
        headers: {
          "Authorization" : `Bearer ${jwtToken}`
        }
      })
      const getAuthenticate = await response.json();
      return getAuthenticate;
    }
    isAuthenticate()
    .then((res)=>{
      console.log(res)
      // 3) 화면에 뿌릴 수 있도록 유저정보를 파싱
      dispatch(setUser(res.user)) //currentUser
      dispatch(setUserStatus(true)) // isLogin
    })
    .catch(console.error)
  }


},[jwtToken])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <RouterProvider router={router} future={{ v7_startTransition: true }}/>
      </ThemeProvider>
    </>
  );
};

export default App;