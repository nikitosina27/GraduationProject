const initialPaginationState = {
    currentPage: 1,
  };
  
  export interface PaginationState {
    currentPage: number; 
    totalPages: number; 
  }

  const paginationReducer = (state = initialPaginationState, action:any) => {
    switch (action.type) {
      case 'SET_CURRENT_PAGE':
        return {
          ...state,
          currentPage: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default paginationReducer;
  