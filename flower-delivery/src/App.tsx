import styles from './App.module.css';
import Shops from './components/shops/Shops';
import { Cart } from './components/cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../redux/store';
import { setActiveTab, selectActiveTab } from '../redux/slices/menuSlice';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../redux/slices/productSlice';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const activeTab = useSelector((state: RootState) => selectActiveTab(state));
  const [sortType, setSortType] = useState<'price' | 'date' | null>(null);
  const selectedShop = useSelector((state: RootState) => state.shops.selectedShop);

  useEffect(() => {
    if (selectedShop) {
      const query = sortType ? `?sort=${sortType}` : '';
      dispatch(fetchProducts({ shopId: selectedShop, query }));
    }
  }, [dispatch, selectedShop, sortType]);

  return (
    <div className={styles.wrap}>
      <div className={styles.top}>
        <div className={styles.menu}>
          <span
            onClick={() => dispatch(setActiveTab('shops'))}
            className={`${activeTab === 'shops' ? styles.active_menu : ''}`}
          >
            МАГАЗИНИ
          </span>
          <span
            onClick={() => dispatch(setActiveTab('cart'))}
            className={`${activeTab === 'cart' ? styles.active_menu : ''}`}
          >
            КОШИК
          </span>
        </div>
        <div className={styles.sort_menu}>
          <span onClick={() => setSortType('price')}>Сортувати за ціною</span>
          <span onClick={() => setSortType('date')}>Сортувати за датою</span>
        </div>

      </div>
      {activeTab === 'shops' && <Shops />}
      {activeTab === 'cart' && <Cart />}
    </div>
  )
}

export default App;
