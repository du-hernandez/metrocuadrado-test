import React, { useEffect } from 'react'
import { Form, Spin } from 'antd'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../services/Auth/AuthSlice'
import { loadingSelector } from '../../services/LoadingSelector'
import { messages } from './LoginValidations'
import LoginFields from './LoginFields'
import LoginButtons from './LoginButtons'

const Login = () => {

	const dispatch = useDispatch()

	const { loginRequest } = authActions

	const loading = useSelector(loadingSelector(authActions.loginRequest.toString()), shallowEqual)

	const onFinish = values => dispatch(loginRequest(values));

	return (
		<React.Fragment>
			<Form
				name="normal_login"
				className="login-form"
				validateMessages={messages}
				onFinish={onFinish}
				layout='vertical'
				style={loading ? { filter: `blur(5px)` } : {}}
			// onFinishFailed={onFinishFailed}
			>
				<div className='slogan-auth'>
					<p>ET Fashion</p>
				</div>
				<LoginFields />
				<LoginButtons />
			</Form>
			{loading && (
				<Spin
					tip="Loading..."
					size="large"
					className='spin-login'
				/>
			)}
		</React.Fragment>
	)
}

export default Login
