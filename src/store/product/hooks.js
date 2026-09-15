import { useSelector } from "react-redux";
import { getList, getLoading } from "./selectors";

export const useProducts = () => {
    const list = useSelector(getList);
    return list;
};

export const useLoading = () => {
    const isLoading = useSelector(getLoading);
    return isLoading;
};
