import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const navigate = useNavigate()
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)    
    const [user, setUser] = useState(undefined)
    const [token, setToken] = useState(undefined)

    const submitFormFunction = async (data) => {
        setLoading(true)
        setDisabled(true)
        
        try {
            const response = await api.post(`/signin`, data)
            
            if (response.status === 200) {
                setLoading(false)
                setDisabled(false)
                setToken(response.data.token)
                setUser(response.data.name)
                navigate("/home")
            }
        } catch (error) {
            console.error(error)
            setLoading(false)
            setDisabled(false)
        }
    }

    const logoutFunction = () => {
        setUser(undefined)
        setToken(undefined)
        navigate("/")
    }

    if(loading) {
        return null;
    }

    return (
        <UserContext.Provider value={{ submitFormFunction, user, setUser, disabled, setDisabled, loading, token, logoutFunction }}>
            {children}
        </UserContext.Provider>
    )
}