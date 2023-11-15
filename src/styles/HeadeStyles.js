import styled from "styled-components"

export const HeaderContainer = styled.header`
    align-items:center;
    display:flex;
    height: 100%;
    justify-content:space-between;
    margin: 0 auto;
    max-width: 1600px;
    position: relative;
    width: 100%;

    @media screen and (min-width: 1600px) {
        max-width:none;
    }

    @media screen and (min-width: 1000px) {
        margin: 0 auto;
        max-width: 1920px;
    }
`;

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    left: 0;
    position: fixed;
    background: #00162b;
    align-items: center;
    top: 0;
    height: 70px;
`;

export const MenuLeftSection = styled.div`
    margin: 0px 16px 0px 0px;
    padding: 0px 0px 0px 20px;
    svg{
        background-color: #000f1e33 ;
            border: 1px solid hsla(0,0%,100%,.2);
            border-radius: 50%;
            padding: 7px;
            fill: #f8f8f8;
            height: 20px;
            width: 20px;
            justify-content: center;

            &:hover{
                cursor: pointer;
                background-color: rgba(0,15,30,.4);
            }
    }
    img{
        height: 36px;
        margin-left: 1em;
        cursor:pointer;
    }
`;

export const NavPillWrapper = styled.div`
    @media screen and (min-width: 650px) {
        display:flex;
        margin-left:300px;
        /* width: calc(100% - 600px); */
    }
`;

export const NavPill = styled.div`
    display: flex;
    justify-content: center;
    height:38px;
    margin:0;
    padding:0;
    align-items: center;
    background-color:#ffffff0d;
    backdrop-filter: blur(20px);
    border: 1px solid hsla(0,0%,100%,.2);
    border-radius: 100px 100px 100px 100px;

    h4{
        color: #f8f8f8;
        justify-content: space-between;
        font-size: 14px;
        padding: 2px 32px;
        font-family: Arial, Helvetica, sans-serif;

        &:hover{
            cursor: pointer;
            border: 1px solid rgba(81, 81, 81, 0.2);
            border-radius: 100px 100px 100px 100px;
            backdrop-filter: blur(20px);
            padding-block: 10px;
            display: block;
        }
    }

    @media only screen and (max-width:1000px) {
        display:none
    }
`;

export const MenuRightSection = styled.div`
        justify-content: space-between;
        width:92px;
        display: flex;  
        padding: 0px 24px 0px 0px;

        &:hover{#search{
            background-color: #000f1e33 ;
            border: 1px solid hsla(0,0%,100%,.2);
            padding: 7px;
            border-radius: 50%;
        }
    }

    svg{
        height: 28px;
        fill: #f8f8f8;
        cursor: pointer;
    }
`;