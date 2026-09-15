import { Link } from "react-router";

export default function Home() {
    return (
        <>
            <div>Home page</div>
            <Link to={"/products"}>Go to products demo</Link>
        </>
    );
}
