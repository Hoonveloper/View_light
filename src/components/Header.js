import React from 'react'
import { PageHeader } from 'antd';
import styled from 'styled-components/macro';
const HeaderContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:100%;
    margin:20px;
    h1{

        font-weight: 800;
    }

`;
function Header() {
    return (
        <HeaderContainer>
            <h1>관리자 페이지</h1>
            <div >로그인</div>
            
        </HeaderContainer>
    )
}

export default Header
