import styled from "styled-components";
import { felxCenter, flexCenterColumn } from "../../global/common";

const S = {};

S.Wrapper = styled.div`
    width: 100%;
    height: 100%;
    ${flexCenterColumn}

    @media screen and (max-width: 300px){
        .tag {
            color:red;
        }
    }

`;

S.ImageWrapper = styled.div`
    flex : 0.7;
    ${felxCenter}

`;

S.button = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 0 100px 0;

`;


export default S;