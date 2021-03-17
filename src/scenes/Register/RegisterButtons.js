import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'antd'


const RegisterButtons = () => {

  const history = useHistory()
  
  return (
    <React.Fragment>
      <Form.Item className='form-item-custome'>
        <Button type="primary" htmlType="submit" className="submit-button">
          Enviar
        	</Button>
      </Form.Item>
      <Form.Item className='form-item-custome'>
        <Button
          type="link"
          className='create-account-link'
          onClick={() => history.push('/')}
        >
          Iniciar sesión
        	</Button>
      </Form.Item>
    </React.Fragment>
  )
}

export default RegisterButtons