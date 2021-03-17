import { Form } from 'antd'
import { messages } from './RegisterValidations'
import RegisterFields from './RegisterFields'
import RegisterButtons from './RegisterButtons'

const Register = () => {

	const onFinish = values => console.log('Values: ', values)

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
			<RegisterFields />
			<RegisterButtons />
		</Form>
	)
}

export default Register