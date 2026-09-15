import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";
import ProductList from "@/pages/ProductList";
import { HashRouter, Route, Routes } from "react-router";

export default function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/:slug" element={<ProductDetail />} />
            </Routes>
        </HashRouter>
    );
}
