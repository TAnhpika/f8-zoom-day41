import styles from "./ProductList.module.scss";

import ProductCard from "@/components/ProductCard";
import { actions as productActions } from "@/store/product";
import { useLoading, useProducts } from "@/store/product/hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function ProductList() {
    const dispatch = useDispatch();
    const products = useProducts();
    const isProductLoading = useLoading();

    useEffect(() => {
        dispatch(productActions.getList());
    }, [dispatch]);

    return (
        <div className={styles.wrapper}>
            <h2>Product list: </h2>
            {isProductLoading ? (
                <div>Loading...</div>
            ) : (
                <ul className={styles.list}>
                    {products.map((product) => (
                        <li key={product.id} className={styles.item}>
                            <ProductCard
                                title={product.title}
                                desc={product.description}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
