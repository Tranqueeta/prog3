import { Layout} from 'antd';

const { Header } = Layout;


  const Cabecera=(props)=>{
   return( <div className='cabecera'>
    <Header
    style={{
      padding: 0,
      textAlign:'center',
      color:'white',
      minWidth:'100%'
      }}
  > {props.contenido}</Header>
   </div>)
  }
  export default Cabecera