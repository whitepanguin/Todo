import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import S from './style';
import BasicButton from '../../components/button/BasicButton';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setUserStatus } from '../../modules/user';

const Main = () => {

    const {isLogin, currentUser}=useSelector((state)=>state.user)
    const dispatch = useDispatch();
    const handleLogout= ()=>{
        localStorage.removeItem("jwtToken") // 토큰 삭제
        dispatch(setUser({})) // 리덕스 초기화
        dispatch(setUserStatus(false))
    }
    const locationGoogle = () =>{
        window.location.href = "http://localhost:8000/oauth/google";
    }


    return (
        <S.Wrapper className='wrapper'>
            <S.ImageWrapper className='imageWrapper'>
                <img src={process.env.PUBLIC_URL+"/images/main/KakaoTalk_20241114_201100572.png"}/>
            </S.ImageWrapper>
            <S.button className='buttonWrapper'>
                {isLogin ?(
                    <BasicButton onClick={handleLogout} size={"full"} shape= {"small"} 
                    variant={"black"} color={"white"}
                    >로그아웃</BasicButton>
                ):(<><Link to={"/sign-in"}>
                    <BasicButton size={"full"} shape= {"small"} 
                    variant={"black"} color={"white"}
                    >로그인</BasicButton>
                </Link>
                <Link to={"/sign-up"}>
                <BasicButton size={"full"} shape= {"small"} 
                variant={"black"} color={"white"}
                >회원가입</BasicButton>
                </Link>
                </>
            )}
                
                
            </S.button>
            <div>
                <S.IconButton onClick={locationGoogle}>
                    <img src={process.env.PUBLIC_URL+"/images/main/google.png"}/>
                </S.IconButton>
                <S.IconButton>
                    <img src={process.env.PUBLIC_URL+"/images/main/kakao.png"}/>
                </S.IconButton>
                <S.IconButton>
                    <img src={process.env.PUBLIC_URL+"/images/main/naver.png"}/>
                </S.IconButton>
            </div>
        </S.Wrapper>
    );
};

export default Main;