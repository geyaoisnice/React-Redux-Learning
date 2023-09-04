import {
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Outlet,useNavigate } from 'react-router-dom';
import MainMenu from './MainMenu';
const { Header, Content, Footer, Sider } = Layout;
const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
            <MainMenu></MainMenu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: "0 0 0 16px" }} >
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content style={{ margin: '16px 16px 0' }} className="site-layout-background">
            <Outlet></Outlet>
        </Content>
        <Footer style={{ textAlign: 'center' }}>geyao</Footer>
      </Layout>
    </Layout>
  );
};

export default App;