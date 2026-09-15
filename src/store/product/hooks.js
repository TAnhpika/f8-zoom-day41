import { useSelector } from "react-redux";
import { getList } from "./selectors";

export const useProducts = () => {
    const list = useSelector(getList);
    return list;
};
