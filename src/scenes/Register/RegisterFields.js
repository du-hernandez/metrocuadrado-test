import React from 'react'
import { Form, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {schema} from './RegisterValidations'

const RegisterFields = () => {
  return (
    <React.Fragment>
      <Form.Item
				hasFeedback
				className='form-item-custome'
				name="correo"
				label='Correo'
				rules={schema.correo}
			>
				<Input
					prefix={<UserOutlined className="site-form-item-icon" />}
					placeholder="e.g@example.com"
				/>
			</Form.Item>
			<Form.Item
				hasFeedback
				className='form-item-custome'
				name="password"
				label='Contraseña'
				rules={schema.password}
			>
				<Input.Password
					prefix={<LockOutlined className="site-form-item-icon" />}
					placeholder="Contraseña"
				/>
			</Form.Item>

			<Form.Item
				hasFeedback
				className='form-item-custome'
				name="password_confirm"
				label='Confirmar ontraseña'
				dependencies={['password']}
				rules={schema.password_confirm}
			>
				<Input.Password
					prefix={<LockOutlined className="site-form-item-icon" />}
					placeholder="Contraseña"
				/>
			</Form.Item>
    </React.Fragment>
  )
}

export default RegisterFields