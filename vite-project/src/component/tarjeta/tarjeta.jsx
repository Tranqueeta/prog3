import { Card } from 'antd';
import { Button, Space } from 'antd';
const { Meta } = Card;
const Cartita = (props) => (
  <Card
    hoverable
    style={{
      width: '200px',
      
    }}
    cover={<img alt={props.alt} src={props.imagen} />}
  >
    <Meta talle={props.talle} precio={props.precio} title={props.nombreProd} description={props.descripcion} />

    <Button danger>editar</Button>

    <Button type="primary" danger>
      borrar
    </Button>

  </Card>
);
export default Cartita;