import './styles.scss';

import { Breadcrumb, Layout } from 'antd';
const { Content } = Layout;

import { Sidebar } from '../Sidebar';

export function Page({ children }) {
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
