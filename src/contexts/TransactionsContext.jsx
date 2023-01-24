import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TransactionsContext = createContext({});

export const TransactionsProvider = ({ children }) => {
    const navigate = useNavigate()
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)    
    const [transactions, setTransactions] = useState({})
    const { token } = useContext(UserContext)

    // useEffect(()=> {
    //     const getTransactions = async () => {
    //         try {
    //             const response = await api.get("/transactions", {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`
    //                 } 
    //             });
    //             console.log(response)
    //             if(!response) {
    //                 return null;
    //             } else if (response && response.status === 200) {
    //                 setTransactions(response.data)
    //             }
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    //     getTransactions()
    // }, [])

    return (
        <TransactionsContext.Provider value={{ transactions, setTransactions, disabled, setDisabled, loading}}>
            {children}
        </TransactionsContext.Provider>
    )
}