import { useHistory } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import * as validations from './LoginValidations'

const Login = () => {

	const history = useHistory()

	const onFinish = values => console.log('Values: ', values)

	return (
		<Form
			name="normal_login"
			className="login-form"
			validateMessages={validations.messages}
			onFinish={onFinish}
			layout='vertical'
		// onFinishFailed={onFinishFailed}
		>
			<div className='slogan-auth'>
				<p>ET Fashion</p>
			</div>
			<Form.Item
				hasFeedback
				className='form-item-custome'
				name="correo"
				label='Correo'
				rules={validations.schema.correo}
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
				rules={validations.schema.password}
			>
				<Input.Password
					prefix={<LockOutlined className="site-form-item-icon" />}
					placeholder="Contraseña"
				/>
			</Form.Item>
			<Form.Item className='form-item-custome'>
				<Button type="primary" htmlType="submit" className="submit-button">
					Log in
        	</Button>
			</Form.Item>
			<Form.Item className='form-item-custome'>
				<Button
					type="link"
					className='create-account-link'
					onClick={() => history.push('/register')}
				>
					Crear una cuenta
        	</Button>
			</Form.Item>
		</Form>
	)
}

export default Login
