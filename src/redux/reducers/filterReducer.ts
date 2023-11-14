import { FilterState } from "../../types/types";

const initialFilterState: FilterState = {
    year: '',
    type: '',
  };
  
  const filterReducer = (state = initialFilterState, action:any) => {
    switch (action.type) {
      case 'SET_YEAR_FILTER':
        return {
          ...state,
          year: action.payload,
        };
      case 'SET_TYPE_FILTER':
        return {
          ...state,
          type: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default filterReducer;
  