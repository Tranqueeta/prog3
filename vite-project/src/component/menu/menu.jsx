import {  Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  HomeTwoTone,
  DollarOutlined,
  DesktopOutlined,
  UserOutlined,
  AppstoreTwoTone,
  DingtalkOutlined,
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
  getItem('Home','/home', <HomeTwoTone />),
  getItem('Productos','/productoss', <AppstoreTwoTone />),
  getItem('ventas', '/ventas', <DollarOutlined/>),
  getItem('Registrar', '/registro', <DingtalkOutlined />),
]

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

