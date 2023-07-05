import React from 'react';
import { Card, Button } from 'antd';

const { Meta } = Card;

const Cartita = (props) => (
  <Card
    hoverable
    style={{
      width: '350px',
    }}
    cover={<img alt={props.alt} src={props.imagen} />}
  >
    <Meta
      title={props.nombreProd}
      description={
        <div>
          <p>{props.descripcion}</p>
          <p>talle={props.talle} precio={props.precio}</p>
        </div>
      }
    />

    <Button danger onClick={()=>{}}>editar</Button>

    <Button type="primary" danger onClick={()=>{}}>
      borrar
    </Button>
  </Card>
);

export default Cartita;