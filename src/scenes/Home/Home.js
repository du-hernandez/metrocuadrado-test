import { useEffect } from 'react'
import { useDispatch, /* useSelector, shallowEqual */ } from 'react-redux'
import { homeActions } from '../../services/Home/HomeSlice'
// import { clothesSelector } from './HomeSelector'

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(homeActions.getClothe({ q: 'people' }))
        return () => {
        }
    }, [dispatch])

    // const clothe = useSelector(clothesSelector(), shallowEqual)
    // console.log(clothe)

    return (
        <div>
            <p>Lista de Categorías de Prendas</p>
        </div>
    )
}

export default Home