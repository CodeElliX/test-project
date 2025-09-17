import { useDispatch, useSelector } from 'react-redux'
import { selectCart, removeAllItems } from '../../../redux/slices/cartSlice'
import type { RootState } from '../../../redux/store'
import styles from './cart.module.css';
import CartItem from '../cart-item/CartItem';

export const Cart = () => {
    const { items } = useSelector((state: RootState) => selectCart(state))
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
    const dispatch = useDispatch();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const order = {
            customer: {
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                address: formData.get("address"),
            },
            items,
            totalPrice,
        };

        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://test-project-production-6234.up.railway.app";
            const res = await fetch(`${API_URL}/api/orders`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(order),
            });

            if (!res.ok) throw new Error("Помилка при відправці замовлення");

            const data = await res.json();
            console.log("Замовлення успішно збережено:", data);

            dispatch(removeAllItems());
            form.reset();

        } catch (err) {
            console.error("Помилка при відправці замовлення:", err);
        }
    };


    return (
        <div className={styles.wrap}>
            <form className={styles.container} onSubmit={handleSubmit}>
                <aside className={styles.aside}>
                    <div className={styles.aside_input}>
                        <label htmlFor="name">Ім’я</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className={styles.aside_input}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className={styles.aside_input}>
                        <label htmlFor="phone">Телефон</label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>
                    <div className={styles.aside_input}>
                        <label htmlFor="address">Адреса</label>
                        <input type="text" id="address" name="address" required />
                    </div>
                </aside>
                <main className={styles.main}>
                    <div className={styles.main_container}>
                        <div className={styles.mainContent}>
                            {items.length === 0 ? (
                                <p>Кошик порожній</p>
                            ) : (
                                items.map((item) => (
                                    <div key={item._id} className={styles.card}>
                                        <CartItem {...item} />
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <p>Загальна сума: {totalPrice} грн</p>
                        <button type="submit">Надіслати</button>
                    </div>
                </main>
            </form>
        </div>
    )

}
