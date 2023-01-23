import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const TransactionsContext = createContext({});

export const TransactionsProvider = ({ children }) => {
    const navigate = useNavigate()
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)    
    const [transactions, setTransactions] = useState({})

    useEffect(()=> {
        const getTransactions = async () => {
            try {
                const response = await api.get("/transactions")
                if (response && response.status === 200) {
                    setTransactions(response.data)
                }
            } catch (error) {
                alert("Erro: " + error)
            }
        }
        getTransactions()
    }, [])

    return (
        <TransactionsContext.Provider value={{ transactions, setTransactions, disabled, setDisabled, loading}}>
            {children}
        </TransactionsContext.Provider>
    )
}