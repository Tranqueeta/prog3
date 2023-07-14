import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
import { useState } from 'react';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}
      >
      
        <Form.Item label="indicar">
          <Radio.Group>
            <Radio value="Hombre"> Hombre </Radio>
            <Radio value="Mujer"> Mujer </Radio>
            <Radio value="Noresp"> No Responde </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Nombre">
          <Input />
        </Form.Item>
        <Form.Item label="Apellido">
          <Input/>
        </Form.Item>
       
        <Form.Item label="Pais">
          <Cascader
            options={[
              {
                value: 'Argentina',
                label: 'Tucuman',
                children: [
                  {
                    value: 'San MIguel de Tucuman',
                    label: 'Capital',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Fecha de Nac">
          <DatePicker />
        </Form.Item>
        <Form.Item label="">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: "20px",
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;