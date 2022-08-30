import './styles.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu, Typography, Space } from 'antd';
import { UserOutlined, CalendarOutlined, HomeOutlined, LogoutOutlined } from '@ant-design/icons';

const { Sider } = Layout;
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
  getItem(
    'Dashboard',
    '1',
    <Link to="/">
      <HomeOutlined />
    </Link>
  ),
  getItem(
    'Patients',
    '2',
    <Link to="/patients">
      <UserOutlined />
    </Link>
  ),
  getItem(
    'Sessions',
    '3',
    <Link to="/sessions">
      <CalendarOutlined />
    </Link>
  ),
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
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
  );
}
