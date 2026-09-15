import { useSelector } from "react-redux";
import { getDetail, getList } from "./selectors";

export const useProducts = () => {
    return useSelector(getList);
};

export const useProductDetail = () => {
    return useSelector(getDetail);
};
