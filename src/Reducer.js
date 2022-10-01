const reducer = (state, action) => {
  
    switch (action.type) {
              case "Set_Loading":
                return {
                    ...state,
                    isLoading: true,
                };
            
            case "GET_DATA":
                return {
                    ...state,
                    hits: action.payload.hits,
                    nbPages: action.payload.nbPages,
                    isLoading:false,

            };
        case "SET_REMOVE":
            return {
                ...state,
                hits: state.hits.filter((currPost) => {
                    return currPost.objectID !== action.payload;
                    
                })  
            };
        case "Search_Post":
            return {
                ...state,
                query:action.payload,
            }
        case "GET_PREVIOUS":
             let pageNum = state.page;
            if (pageNum <= 0) {
                pageNum = 0;
                
            }
            else 
            {
                pageNum = pageNum - 1
                }
            return {
                ...state,
                page: pageNum,
            };
        
        case "GET_NEXT":
            let incNbpage = state.page + 1;
            if (incNbpage >= state.nbPages) {
                incNbpage = 0;  
            }
            return {
                ...state,
                page: incNbpage,
            }
        
           
            
        }
        
        
}

export default reducer