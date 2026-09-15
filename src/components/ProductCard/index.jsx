// import styles from "./ProductCard.module.scss";

export default function ProductCard({ title = "", desc = "" }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    );
}
