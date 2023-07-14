
import { Card, Button } from 'antd';
import {React,  useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Vista from '../vista/vista';
import './tarjeta.css'


const { Meta } = Card;


const Cartita = (props) => {
 const navigate = useNavigate()
  return( <Card
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

     <div className='botones'>
      <Vista
      img={props.imagen}
      talle={props.talle}
      precio={props.precio}
      descripcion={props.descripcion}
      alt={props.alt}/>

      
    
    <Button danger onClick={()=>{}}>editar</Button>
      
    <Button type="primary" danger onClick={async()=>{await axios.delete(props.url+props.id)}}>
      borrar
    </Button>
    </div>
  </Card>)


 
};

export default Cartita;