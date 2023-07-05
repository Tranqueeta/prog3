import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Listado from './component/list/list';
import Cabecera from './component/header/header';
import Leftmenu from './component/menu/menu';
import Futer from './component/footer/footer';

const { Sider, Content } = Layout;

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Sider>
          <Leftmenu />
        </Sider>
        <Layout>
          
            <Cabecera contenido="STORE" />
          
          <Content>
            <Routes>
              <Route path="/productoss" element={<Listado/>} />
              <Route path="/ventas" element={<Listado/>} />
            </Routes>
          </Content>
          
            <Futer contenido="Octavios, Rodrigos, Fers disaing" />
          
        </Layout>
      </Layout>
    </div>
  );
};

export default App;