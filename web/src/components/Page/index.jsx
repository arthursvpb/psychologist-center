import './styles.scss';

import { useState } from 'react';

import { Breadcrumb, Layout, Menu, Typography, Space } from 'antd';
import { UserOutlined, CalendarOutlined, HomeOutlined, LogoutOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;
const { Title } = Typography;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Dashboard', '1', <HomeOutlined />),
  getItem('Patients', '2', <UserOutlined />),
  getItem('Sessions', '3', <CalendarOutlined />),
];

export function Page({ children, sider = true }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      {sider && (
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={value => setCollapsed(value)}
          className="sider"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className="logo"
          >
            <Title
              style={{
                margin: '0',
              }}
              level={5}
            >
              {collapsed ? 'PC' : 'Psychologist Center'}
            </Title>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className="user"
          >
            {collapsed ? (
              <p>A</p>
            ) : (
              <>
                <p>Welcome,</p>
                <Space size="middle">
                  Arthur
                  <a className="logout">
                    <LogoutOutlined />
                  </a>
                </Space>
              </>
            )}
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
      )}
      <Layout className="site-layout">
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          />
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
