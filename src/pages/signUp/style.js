import styled from "styled-components";
import { flexCenterColumn } from './../../global/common';

const S = {};
    
    S.SignUpWrapper = styled.div`
        ${flexCenterColumn}
        height: 600px;
    `
    S.Title = styled.p`
        font-size: 16px;
        color: #333;
        font-weight: 600;
        margin: 0 0 12px 0;
    `

    S.ConfirmMessage = styled.p`
        font-size: 12px;
        color: #B965F1;
        padding-top: 10px;
    `
    S.Label = styled.label`
    display: block;
    width: 100%;
    margin: 0 0 30px 0;
    `

    S.Form = styled.form`
        width: 100%;
        height: 100%;
    `

export default S;