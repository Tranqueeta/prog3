import { Button, Drawer } from 'antd';
import { useState } from 'react';
const Vista = (props) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <img src={props.imagen} alt={props.alt} />
        <p> su talle es :{props.talle}</p>
        <p>su producto tiene este repcio :{props.precio}</p>
      </Drawer>
    </>
  );
};
export default Vista;