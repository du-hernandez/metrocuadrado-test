import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homeActions } from '../../services/Home/HomeSlice'
// import { clothesSelector } from './HomeSelector'

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(homeActions.getClotheRequest({ q: 'people' }))
        return () => {
        }
    }, [dispatch])


    const loading = useSelector(state => state.loading)

	console.log('En HOME, loading: ', loading)

    // const clothe = useSelector(clothesSelector(), shallowEqual)
    // console.log(clothe)

    return (
        <div style={{}}>
            <p>Lista de Categorías de Prendas</p>
        </div>
    )
}

export default Home