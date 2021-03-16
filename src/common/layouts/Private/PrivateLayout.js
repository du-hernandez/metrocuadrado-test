import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { authActions } from '../../../services/Auth/AuthSlice'

const PrivateLayout = ({ children }) => {

    const dispatch = useDispatch()

    return (
        <div>
            <h1>
                PrivateLayout
            </h1>
            <Button
                type="primary"
                onClick={() => dispatch(authActions.signOut())}
            >Sign Out
            </Button>
            {children}
        </div>
    )
}

export default PrivateLayout