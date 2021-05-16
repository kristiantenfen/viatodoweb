import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
`;

export const Title = styled.span`
    color: #666;
    font-size:20px;
`;
export const Button = styled.button`
    font-size:16px;
    padding:10px;
    background-color: #A06CD5;
    color: #fff;
    border-radius:6px;
    border: none;
    margin-right:10px;
    cursor:pointer;
    &&:hover{
        background-color: #6247AA;
    }
`;
export const Form = styled.form`
margin: 10px 0;
`;

export const Input = styled.input`
    flex:1;
    height:30px;
    border: 1px solid #999;
    border-radius:6px;
    width:100%;
    padding:5px;
    border: 1px solid #f3f3f3;
    background-color: #fafafa;
`;
export const TextArea = styled.textarea`
    flex:1;
    height:100px;
    border: 1px solid #999;
    border-radius:6px;
    width:100%;
    padding:5px;
    margin-top:10px;
    border: 1px solid #f3f3f3;
    background-color: #fafafa;
`;