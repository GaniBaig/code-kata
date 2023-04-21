import React from 'react'
import styled from "styled-components"

const HeaderContainer = styled.div`
  margin:0;
  padding:0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #EEE;
  height: 60px;
  box-shadow: 1px 5px 10px #CCC;
  margin-bottom: 20px;
  padding-left: 20px;   
`;

const LogoContainer = styled.div`
    font-size: 20px;
    border: 1px solid #333;
    width: 30px;
    height: 30px;
    border-radius: 25px;
    text-align: center;
`

const BrandContainer = styled.div`
    font-size: 1.5rem;
`

const HeaderAccount = styled.div`
    padding-right: 20px;
`

const Header = () => {
  return (
    <HeaderContainer>
        <LogoContainer>L</LogoContainer>
        <BrandContainer>
            Loan System
        </BrandContainer>
        <HeaderAccount>
            <span className="material-symbols-outlined">
                account_circle
            </span>
        </HeaderAccount>
        
    </HeaderContainer>
  )
}

export default Header