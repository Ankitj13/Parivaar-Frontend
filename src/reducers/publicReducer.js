import * as types from "../actions/types";

const initialState = {
    employees: [],
    employee: {},

    districts: [],
    district: {},
    loading: true,
};

const usersReducers = (state = initialState, action) => {
    switch (action.type){
        case types.GET_MEMBERS:
        case types.GET_CHILD_ALL:
        case types.GET_MOTHER_ALL:
            return{
                ...state,
                employees: action.payload,
                loading: false,
            };
        case types.GET_DISTRICT:
            return{
                ...state,
                districts: action.payload,
                loading: false,
            }
            default: 
            return state;
    }
};
export default usersReducers;