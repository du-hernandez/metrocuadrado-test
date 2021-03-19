import { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { ProductCard } from '../../components'
import { homeActions } from '../../services/Home/HomeSlice'
import { clothesSelector } from './HomeSelector'

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(homeActions.getClotheRequest({ q: 'Jacket' }))
        return () => {
        }
    }, [dispatch])

    const loading = useSelector(state => state.loading)

	console.log('En HOME, loading: ', loading)

    const clothe = useSelector(clothesSelector(), shallowEqual)
    // console.log(clothe)

    return (
        <div className='home-container'>
            {
                clothe && (
                    clothe.map(item => <ProductCard key={item.id} product={item} />)
                )
            }
        </div>
    )
}

export default Home