import styled from "styled-components";
import colors from '../../themes/colors';

export const CartContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&family=Source+Sans+Pro&display=swap');
    height: 100vh;
    background-color: ${colors.lightBlue};
    display: flex;
    align-items: center;
    justify-content: center;

    #cartContents {
        height: 90%;
        width: 90%;
    }

    #header {
        height: 20%;
        width: 75%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start
    }

    #back {
        height: 50%;
        width: 10%;
        display: flex;
        align-items: center;
    }

    .title {
        color: #FFF;
        font-family: Source Sans Pro;
        font-size: 55px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .arrow {
        color: #ffff;
        font-size: 25px;
    }

    .arrow:hover {
        color: ${colors.lightBlack};
    };

    #components {
        width: 100%;
        height: 65vh;
        display: flex;
        justify-content: space-between;
    }

    #cards {
        height: 100%;
        width: 45%;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    #card {
        width: 100%;
    }

    .card {
        height: 126px;
        border-radius: 20px;
        background-color: white;
        padding-left: 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 10px;
        box-shadow: 0px 0px 10px 8px rgba(0, 0, 0, 0.25);
    }

    #container {
        display: flex;
        height: 90%;
        width: 100%;
        align-items: center
    }

    #cardImg {
        height: 90%;
        width: 25%;
        display: flex;
    }

    #cardImg img {
        border-radius: 20px;
        height: 100%;
    }

    #cardItens {
        height: 90%;
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .cardTitle {
        font-family: Source Sans Pro;
        font-size: 30px;
        text-transform: uppercase;
    }

    #cardFunctions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: Rubik;
    }


    .price {
        font-size: 20px;
    }

    #cardCounter {
        display: flex;
        align-items: center;
        border: 1px solid black;
        border-radius: 15px;
    }

    .add, .remove {
        height: 25px;
        width: 40px;
        font-family: Rubik;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        cursor: pointer;
        background-color: transparent;
        border: none;
    }

    .amount p{
        height: 25px;
        width: 40px;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pagination {
        width: 45%;
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .pagination button {
        width: 25px;
        height: 25px;
        border-radius: 50px;
        font-family: Source Sans Pro;
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
        border: none;
       
}

    .pagination button.active {
        background-color: #032B43;
        color: white;
    }

    #buyCard {
        width: 35%;
    }

    .buyCard {
        height: 100%;
        width: 100%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        box-shadow: 0px 0px 10px 8px rgba(0, 0, 0, 0.25);
    }

    #bcContainer {
        height: 90%;
        width: 90%;
    }

    #bcText {
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-between
    }

    #lineOne, #lineTwo{
        display: flex;
        justify-content: space-between;
    }

    #lineThree {
        text-align: end;
    }

    .bcTotal {
        font-family: Source Sans Pro;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
    }

    #bcPrice {
        display: flex;
        align-items: center;
    }

    .bcPrice {
        font-family: Source Sans Pro;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
    }
    
    .bcLength{
        font-family: Rubik;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
    }

    .bcFreight{
        font-family: Rubik;
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
    }

    .bcDiscount{
        color: #18962C;;
        font-family: Rubik;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
    }

    #bcDownItens {
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }


    #bcCep, #bcCupom {
        width: 100%;
        display: flex;
        flex-direction: column
    }
    

    .bcCep, .bcCupom {
        background-color: #A3A3A3;
        height: 48px;
        border-radius: 10px;
        border: 2px solid transparent;
        color: white;
        font-size: 13px;
        font-family: Rubik;
        padding-left: 10px;
    }

    .bcCep::selection {
        border: 2px solid ${colors.lightBlack};
    }
    .bcCep::placeholder {
        color: white
    }
    .bcCupom::placeholder {
        color: white
    }

    .bcBuy {
        height: 6vh;
        width: 15vw;
        border-radius: 50px;
        border: transparent;
        font-size: 20px;
        background-color: ${colors.yellow};
        border: 2px solid transparent;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-family: Rubik;
        color: black;
    }

    span {
        color: ${colors.red};
        font-family: Rubik;
        font-size: 13px;
        font-style: italic;
        font-weight: 400;
        letter-spacing: 1.69px;
    }

    .bcBuy:hover {
        border: 2px solid ${colors.darkBlue};
    }
`