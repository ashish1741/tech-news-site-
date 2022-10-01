import React from "react"
import { useContext, useReducer,useEffect } from "react";
import reducer from "./Reducer";


const initialState = {
    isLoading:true,
    query: "nepal",
    page: 0,
    nbPages: 0,
    hits:[],
    
}

//creating context api
const appContext = React.createContext();

//creating provider
const AppProvider = ({ children }) => {
    
    //creating useReducer Hook & State Management
    const [state, dispatch] = useReducer(reducer, initialState);


    //calling API

    let API = "https://hn.algolia.com/api/v1/search?";

    const fetchData = async (Response) => {
        dispatch({
            type:"Set_Loading"
        })

       
       

        
        try {
            const responseData = await fetch(Response);
            const data = await responseData.json();
            console.log(data);
            dispatch({
                type: "GET_DATA",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                }
            });
    
            
            
        } catch (error) {
            console.log(error);
            
        }
    }

     //removing data
         
        const removePost = (ID) => {
            dispatch({
                type: "SET_REMOVE",
                payload:ID,
            })
            
    }
    
    //search post 
    const searchPost = (searchQuery) => {
        dispatch({
            type: "Search_Post",
            payload:searchQuery
        })
    }

    // previous button

    const previous = () => {
        dispatch({
            type: "GET_PREVIOUS",
            
        })
        
        
    }

    //next button

    const next = () => {
         dispatch({
            type: "GET_NEXT",
            
        })
        
    }

    // using useEffect hooks

    useEffect(() => {
        fetchData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query,state.page])
    return (
        <appContext.Provider value={{...state , removePost, searchPost,previous,next}}>
            {children}
        </appContext.Provider>
    )
}

//customHook creation

const useGlobalContext = () => {
    return (
        useContext(appContext)
        
    )
}





export { appContext, AppProvider ,useGlobalContext};
    

