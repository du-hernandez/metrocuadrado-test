import { Form } from 'antd'
import { useDispatch } from 'react-redux'
import { authActions } from '../../services/Auth/AuthSlice'
import { messages } from './LoginValidations'
import LoginFields from './LoginFields'
import LoginButtons from './LoginButtons'

const Login = () => {

	const dispatch = useDispatch()

	const onFinish = values => dispatch(authActions.login(values));

	return (
		<Form
			name="normal_login"
			className="login-form"
			validateMessages={messages}
			onFinish={onFinish}
			layout='vertical'
		// onFinishFailed={onFinishFailed}
		>
			<div className='slogan-auth'>
				<p>ET Fashion</p>
			</div>
			<LoginFields />
			<LoginButtons />
		</Form>
	)
}

export default Login
