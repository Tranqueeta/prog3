import { Carousel } from 'antd';
const contentStyle = {
  minHeight: '100vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',

};

const imageStyle = {
  
 
    maxWidth: '100%',
      
     
    maxHeight: '100%',
    };
const Home = () => (
  <Carousel autoplay>
   
    <div>
      <h3 style={contentStyle}><img src="img/Nike.jpg" alt="Nike" style={imageStyle}/></h3>
    </div>
   
  </Carousel>
);
export default Home;