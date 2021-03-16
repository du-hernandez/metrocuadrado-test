import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../../services/Auth/AuthSlice'

const PublicLayout = ({ children }) => {

    const dispatch = useDispatch()
    // const state = useSelector(state => state)
    // console.log(state)

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