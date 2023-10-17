import styled from "styled-components";

export const ProductsCont = styled.div`
    align-items: center;
    margin: 0 5px 10px;
`;


export const ProductContainer = styled.div`
    position: relative;
    display: flex;
    text-align: center;
    box-sizing: border-box;
    width: 350px;
    height: 200px;
    padding: 20px;
    background-color: #f3f3f3;
    border: 1px solid #fff;
    margin-bottom: 20px;
    text-align: left;
    font-size: smaller;
    border-radius: 25px;
`;

export const ProductImage = styled.img`
    padding: 5px;
    width: 100%;
    max-width: 90px;
    height: 100%;
    max-height: 90px;
    `;
export const Bottomcont = styled.div`

`

export const CardButton = styled.button`
    position: absolute;
    bottom: 0;
    left: 10px;
    background-color: #3490dc;
    color: white;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    margin: 10px;

    &:hover{
        background-color: #f3f;
    }


`    

