import React from 'react'
import LoanForm from './loanForm'
import styled from "styled-components"

const Body = () => {

    const LoanBody = styled.div`
        margin:0;
        padding:0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-left: 20px;
        padding-top: 50px;
    `

  return (
    <LoanBody>
        <div className="leftContainer"></div>
        <div className="formContainer">
            <LoanForm />
        </div>
        <div className="rightContainer"></div>
    </LoanBody>
  )
}

export default Body