import PrivateLayout from './Private/PrivateLayout'
import PublicLayout from './Public/PublicLayout'
import { useSelector, shallowEqual } from 'react-redux'
import { loginSelector } from './layoutSelector'

const Referee = ({ children }) => {

    const isLogin = useSelector(loginSelector(), shallowEqual)

    if (isLogin) return <PrivateLayout>{children}</PrivateLayout>

    return <PublicLayout>{children}</PublicLayout>
}

export default Referee