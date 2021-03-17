import React from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
import { Environment as env } from '../../common/config'
import { RefreshToken } from '../../common/utils'
import { authActions } from '../../services/Auth/AuthSlice'

const LoginButtons = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const googleLoginSuccess = res => {
    RefreshToken(res)
    dispatch(authActions.setGoogleAuth(JSON.parse(JSON.stringify(res))))
  }

  const googleLoginFail = res => console.error('[Login failed]: ', res)

  return (
    <React.Fragment>
      <Form.Item className='form-item-custome'>
        <Button type="primary" htmlType="submit" className="submit-button">
          Iniciar sesión
        	</Button>
      </Form.Item>
      <GoogleLogin
        clientId={env.get('GOOGLE_CLIENT_ID')}
        buttonText='Inicio con Google'
        onSuccess={googleLoginSuccess}
        onFailure={googleLoginFail}
        cookiePolicy='single_host_origin'
        isSignedIn={true}
        className='google-button'
      />
      <Form.Item className='form-item-custome'>
        <Button
          type="link"
          className='create-account-link'
          onClick={() => history.push('/register')}
        >
          Crear una cuenta
        	</Button>
      </Form.Item>
    </React.Fragment>
  )
}

export default LoginButtons
