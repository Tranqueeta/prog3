import {  Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons';

const {  Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
    
  };
}

const items = [
 getItem('Productos', '/productoss', <DesktopOutlined />),
  getItem('ventas', '/ventas', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const Leftmenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate=useNavigate()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider //collapsible
      collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{minWidth:'20%'}} >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={({key}=items)=>{ navigate(key)

        }} ></Menu>
      </Sider>
    </Layout>
  );
};

export default Leftmenu;

