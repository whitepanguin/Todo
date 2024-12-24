import styled from "styled-components";
import { felxCenter, flexCenterColumn } from "../../global/common";
import { Link } from "react-router-dom";

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

S.IconButton = styled.button`
    width: 48px;
    height: 48px;
    margin: 0 4px;
    background: none;

    & img {
        width: 100%;
    }
`;

export default S;