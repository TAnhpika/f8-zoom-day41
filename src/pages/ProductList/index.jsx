import Loading from "@/components/Loading";
import styles from "./ProductList.module.scss";

import ProductCard from "@/components/ProductCard";
import { actions as productActions } from "@/store/product";
import { useProducts } from "@/store/product/hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function ProductList() {
    const dispatch = useDispatch();
    const products = useProducts();

    useEffect(() => {
        dispatch(productActions.getList());
    }, [dispatch]);

    return (
        <div className={styles.wrapper}>
            <h2>Product list: </h2>
            <ul className={styles.list}>
                {products.map((product) => (
                    <li key={product.id} className={styles.item}>
                        <ProductCard
                            title={product.title}
                            desc={product.description}
                            link={product.slug}
                        />
                    </li>
                ))}
            </ul>

            <Loading />
        </div>
    );
}
