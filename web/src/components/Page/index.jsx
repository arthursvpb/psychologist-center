import './styles.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Breadcrumb, Layout, Menu, Typography, Space } from 'antd';
import { UserOutlined, CalendarOutlined, HomeOutlined, LogoutOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;
const { Title } = Typography;

import { Sidebar } from '../Sidebar';

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

export function Page({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sidebar />
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
