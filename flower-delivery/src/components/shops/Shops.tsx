import { useSelector } from 'react-redux';
import type { RootState } from '../../../redux/store';
import styles from './shops.module.css';
import { selectSelectedShop } from '../../../redux/slices/shopSlice';
import { ShopList } from '../shop-list/ShopList';
import { ProductList } from '../product-list/ProductList';

function Shops() {
    const selectedShop = useSelector((state: RootState) => selectSelectedShop(state));
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <aside className={styles.aside}>
                    <ShopList />
                </aside>
                <main className={styles.main}>
                    {selectedShop && <ProductList />}
                </main>
            </div>
        </div>
    )
}

export default Shops;
