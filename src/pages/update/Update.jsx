import React, { useEffect, useState } from 'react';
import S from './style';
import BasicInput from '../../components/input/BasicInput';
import BasicButton from '../../components/button/BasicButton';
import { useForm } from 'react-hook-form';

const Update = () => {

    // 이메일 양식 @,. 이메일 주소를 포함한 패턴을 지켜야 합니다.
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // 소문자, 숫자, 특수문자를 각 하나 포함한 8자리 이상이여야 합니다. 
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;
    
    // ^x : 문자열의 시작을 표현하며 x 문자로 시작됨을 의미한다.
    // x$ : 문자열의 종료를 표현하며 x 문자로 종료됨을 의미한다.
    // .x : 임의의 한 문자의 자리수를 표현하며 문자열이 x 로 끝난다는 것을 의미한다.
    // x+ : 반복을 표현하며 x 문자가 한번 이상 반복됨을 의미한다.
    // x? : 존재여부를 표현하며 x 문자가 존재할 수도, 존재하지 않을 수도 있음을 의미한다.
    // x* : 반복여부를 표현하며 x 문자가 0번 또는 그 이상 반복됨을 의미한다.
    // x|y : or 를 표현하며 x 또는 y 문자가 존재함을 의미한다.
    // (x) : 그룹을 표현하며 x 를 그룹으로 처리함을 의미한다.
    // (x)(y) : 그룹들의 집합을 표현하며 앞에서 부터 순서대로 번호를 부여하여 관리하고 x, y 는 각 그룹의 데이터로 관리된다.
    // (x)(?:y) : 그룹들의 집합에 대한 예외를 표현하며 그룹 집합으로 관리되지 않음을 의미한다. 
    // x{n} : 반복을 표현하며 x 문자가 n번 반복됨을 의미한다.
    // x{n,} : 반복을 표현하며 x 문자가 n번 이상 반복됨을 의미한다.
    // x{n,m} : 반복을 표현하며 x 문자가 최소 n번 이상 최대 m 번 이하로 반복됨을 의미한다.
    
    // '[]' 는 내부에 지정된 문자열의 범위 중에서 한 문자만을 선택하다는 특수한 의미를 가진다. 
    // 그리고 내부에서 Meta문자를 사용하면 다른 의미를 가지고 동작할 수 있으므로 잘 확인하고 사용해야 한다. 
    // 좀 더 특별한 용도로 사용되는 것들은 아래의 표와 같다. 
    
    // [xy] : 문자 선택을 표현하며 x 와 y 중에 하나를 의미한다.
    // [^xy] : not 을 표현하며  x 및 y 를 제외한 문자를 의미한다.
    // [x-z] : range를 표현하며 x ~ z 사이의 문자를 의미한다. 
    // \^ : escape 를 표현하며 ^ 를 문자로 사용함을 의미한다.
    // \b : word boundary를 표현하며 문자와 공백사이의 문자를 의미한다.
    // \B : non word boundary를 표현하며 문자와 공백사이가 아닌 문자를 의미한다.
    // \d : digit 를 표현하며 숫자를 의미한다. 
    // \D : non digit 를 표현하며 숫자가 아닌 것을 의미한다. 
    // \s : space 를 표현하며 공백 문자를 의미한다. 
    // \S : non space를 표현하며 공백 문자가 아닌 것을 의미한다.
    // \t : tab 을 표현하며 탭 문자를 의미한다.
    // \v : vertical tab을 표현하며 수직 탭(?) 문자를 의미한다.
    // \w : word 를 표현하며 알파벳 + 숫자 + _ 중의 한 문자임을 의미한다. 
    // \W : non word를 표현하며 알파벳 + 숫자 + _ 가 아닌 문자를 의미한다. 
    
    // console.log(useForm())
    const {register, handleSubmit, getValues, 
            formState: {isSubmitting, isSubmitted,errors}
        } = useForm({mode :"onChange"});

  
    return (
        <S.Form onSubmit={handleSubmit(async (data)=>{
            console.log(data)
            const {email,password}=data;
            // 회원가입 데이터 요청하기
            // fetch()이용, localhost:8000
            await fetch("http://localhost:8000/users/modify",{
                method: "PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body : JSON.stringify({
                    email: email,
                    password: password
                })
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
            })
            
        })}>
           
            <S.Label>
                <S.Title>이름</S.Title>
                <S.Input
                 type="text" placeholder="이름을 입력하세요" autoComplete='off'
                {...register("name")}
                />
            </S.Label>
            <S.Label>
                <S.Title>나이</S.Title>
                <S.Input
                 type="text" placeholder="나이를 입력하세요" autoComplete='off'
                {...register("age")}
                />
            </S.Label>
            <S.Label>
                <S.Title>휴대폰</S.Title>
                <S.Input
                 type="text" placeholder="번호를 입력하세요" autoComplete='off'
                {...register("phone")}
                />
            </S.Label>
            
            <BasicButton size={"full"} shape= {"small"} variant={"black"} color={"white"}
             disabled={isSubmitting}
            >
             회원 정보 수정
            </BasicButton>
        </S.Form>
    );
};

export default Update;