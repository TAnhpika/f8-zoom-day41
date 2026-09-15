import http from "@/utils/http";
import { GET_DETAIL, GET_LIST, SET_DETAIL, SET_LIST } from "./constants";
import { hideLoading, showLoading } from "../ui/actions";

export const getList = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_LIST,
        });

        dispatch(showLoading());

        try {
            const response = await http.get("/products");
            dispatch(setList(response.data.items));
        } catch (error) {
            console.error(error.message);
        } finally {
            dispatch(hideLoading());
        }
    };
};

export const setList = (payload) => {
    return {
        type: SET_LIST,
        payload,
    };
};

export const getDetail = (slug) => {
    return async (dispatch) => {
        dispatch({
            type: GET_DETAIL,
        });

        dispatch(showLoading());

        try {
            const response = await http.get(`/products/${slug}`);
            dispatch(setDetail(response.data));
        } catch (error) {
            console.error(error.message);
        } finally {
            dispatch(hideLoading());
        }
    };
};

export const setDetail = (payload) => {
    return {
        type: SET_DETAIL,
        payload,
    };
};
