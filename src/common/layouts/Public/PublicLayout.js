import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { authActions } from '../../../services/Auth/AuthSlice'

const PublicLayout = ({ children }) => {

    const dispatch = useDispatch()

    return (
        <div>
            <h1>
                PublicLayout
            </h1>
            <Button
                type="primary"
                onClick={() => dispatch(authActions.signIn())}
            >Sign In
            </Button>
            {children}
        </div>
    )
}

export default PublicLayout