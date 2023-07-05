import { Breadcrumb, Layout } from 'antd';
import './content.css'
const { Content } = Layout;

const Contenido = () => {

    return (
        <div className='cont'>
            <Content
                style={{
                    margin: '0 16px',
                    maxHeight:'75vh',
                    maxWidth:'60vw'
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Item>User</Item>
                    <Item>Bill</Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 360,

                    }}
                >
                   
                 
                </div>
            </Content>
        </div>
    )
}
export default Contenido
