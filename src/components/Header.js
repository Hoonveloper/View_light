import React from 'react'
import { PageHeader } from 'antd';
function Header() {
    return (
        <div>
            <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="관리자 페이지"
                
            />
        </div>
    )
}

export default Header
