import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../../redux/store';
import { selectShops, selectSelectedShop, setSelectedShop, fetchShops } from '../../../redux/slices/shopSlice';
import { useEffect } from 'react';
import styles from './shop-list.module.css'

export const ShopList = () => {
    const shops = useSelector((state: RootState) => selectShops(state))
    const selectedShop = useSelector((state: RootState) => selectSelectedShop(state))
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchShops())
    }, [dispatch])

    return (
        <div className={styles.wrap}>
            <h1>Оберіть магазин</h1>
            <div>
                {shops.map((shop) => (
                    <div key={shop._id} className={styles.shops}>
                        <button
                            onClick={() => dispatch(setSelectedShop(shop._id))}
                            className={`${styles.shop} ${shop._id === selectedShop ? styles.active : ''}`}
                        >
                            {shop.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
