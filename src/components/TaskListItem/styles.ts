import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    height:40px;
    box-shadow: 1px 1px 15px #cfcfcf;
    border-radius:5px;
    align-items:center;
    padding: 5px;
    width:100%;
    background-color:#fdfdfd;
    margin:10px 0;
    cursor: pointer;
`;
export const Input = styled.input`
margin-right:10px;
`;
export const Title = styled.span`
    font-size:18px;
    color: #062726;
`;

export const DeleteButton = styled.button`
    border:none;
    background-color: #fdfdfd;
   margin-left:auto;
   cursor:pointer;
`;