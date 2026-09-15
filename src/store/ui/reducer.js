import { HIDE_LOADING, SHOW_LOADING } from "./constants";

const initState = {
    Loading: false,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case HIDE_LOADING:
            return {
                ...state,
                isLoading: false,
            };

        default:
            return state;
    }
};

export default reducer;
