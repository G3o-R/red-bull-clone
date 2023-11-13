import styled from "styled-components"

export const HeaderContainer = styled.div`
    width:100%;
    /* position:fixed; */
`;

export const StyledHeader = styled.div`
    left: 0;
    position: fixed;
    justify-content: space-between;
    background: #00162b;
    align-items: center;
    display: flex;
    flex-direction: row;
    top: 0;
    width: 100%;
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