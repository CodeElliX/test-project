import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../../redux/store';
import { fetchProducts, selectProducts } from '../../../redux/slices/productSlice';
import { addItem, type Product } from '../../../redux/slices/cartSlice';
import { useEffect } from 'react';
import { selectSelectedShop } from '../../../redux/slices/shopSlice';
import styles from './product-list.module.css';
import flower from '../../../public/flower.png'

export const ProductList = () => {
    const products = useSelector(selectProducts)
    const selectedShop = useSelector((state: RootState) => selectSelectedShop(state))
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        if (selectedShop) {
            dispatch(fetchProducts(selectedShop))
        }
    }, [dispatch, selectedShop])

    return (
        <div className={styles.wrap}>
            {products.map((product: Product) => (
                <div key={product._id} className={styles.card}>
                    <img src={flower} alt="flower" />
                    <span className={styles.prod_name}>{product.name}</span>
                    <span className={styles.prod_price}>{product.price}грн</span>
                    <button onClick={() => dispatch(addItem(product))}>До кошика</button>
                </div>
            ))}
        </div>
    )
}
