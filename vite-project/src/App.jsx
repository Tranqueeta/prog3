import { Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import Listado from './component/list/list'
import Cabecera from './component/header/header'
import Leftmenu from './component/menu/menu'
import Futer from './component/footer/footer'
import Home from './component/home/home'
import Registro from './component/registrar/registrar'

const { Sider, Content } = Layout

const App = () => 
  
    <div className="App">
     <Layout>
        <Sider>
          <Leftmenu />
        </Sider>
        <Layout>
            <Cabecera contenido="STORE" />
          <Content>
            <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/productoss' element={<Listado/>}/>
              <Route path='/ventas' element={<Listado/>} />
              <Route path='/registro' element={<Registro/>}/>
            </Routes>
          </Content>
            <Futer contenido="" />
        </Layout>
      </Layout>
    </div>
    
export default App