// import styles from "./ProductDetail.module.scss";

import Loading from "@/components/Loading";
import { actions as productActions } from "@/store/product";
import { useProductDetail } from "@/store/product/hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";

export default function ProductDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const product = useProductDetail();

    useEffect(() => {
        dispatch(productActions.getDetail(slug));
    }, [dispatch, slug]);

    return (
        <>
            <h1>Detail: </h1>
            <h2>{product?.title || "Loading ..."}</h2>
            <p>{product?.description}</p>

            <button onClick={() => navigate(-1)}>Back to Products</button>

            <Loading />
        </>
    );
}
