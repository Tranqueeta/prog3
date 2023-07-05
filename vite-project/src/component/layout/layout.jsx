import Cabecera from '../header/header';
import Leftmenu from '../menu/menu';
import Futer from '../footer/footer';
import './layout.css'

const Diseno = () => {
    return (
        <div className='Contlay'>
        <div className='laymenu'>
            <div><Leftmenu /></div>
        </div>
        <div className='laycuerpo'style={{flexGrow:'10', maxHeight:'20vh'}}>
            <div><Cabecera
                contenido={'ENTIDAD'} ></Cabecera></div>

            <div><Futer contenido={'Octavios,Rodrigos,Fers disaing'}></Futer></div>
        </div>
        </div>
    )
}
export default Diseno
