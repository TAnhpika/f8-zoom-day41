import styles from "./ProductCard.module.scss";

import { useNavigate } from "react-router";

export default function ProductCard({ title = "", desc = "", link }) {
    const navigate = useNavigate();

    return (
        <div
            className={styles.wrapper}
            onClick={() => {
                navigate(link);
            }}
        >
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    );
}
