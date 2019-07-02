let initialState = {
    images: []
};

const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHED_IMAGES":
            return Object.assign({}, state, {
                images: action.data
            });
        default:
            return state;
    }
};

export default asyncReducer;
