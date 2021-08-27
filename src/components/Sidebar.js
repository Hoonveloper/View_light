import React from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
function Sidebar() {
    return (
        <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<LaptopOutlined />} title="View">
            <Menu.Item key="1">/Company</Menu.Item>
            <Menu.Item key="2">/Process</Menu.Item>
            <Menu.Item key="3">/Project</Menu.Item>
            <Menu.Item key="4">/Agent</Menu.Item>
            <Menu.Item key="5">/Contact</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Products">
            <Menu.Item key="6">Led Bar</Menu.Item>
            <Menu.Item key="7">Flood</Menu.Item>
            <Menu.Item key="8">Inground</Menu.Item>
            <Menu.Item key="9">Wall</Menu.Item>
            <Menu.Item key="10">Bracket</Menu.Item>
            <Menu.Item key="11">Bollard</Menu.Item>
            <Menu.Item key="12">Steet</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
}

export default Sidebar
