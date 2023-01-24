import { Link } from "react-router-dom";
import { HomePageStyle } from "./HomePageStyles";
import vector from "../../../assets/vector.svg"
import plus from "../../../assets/plus-circle-outlined.svg"
import minus from "../../../assets/minus-circle-outlined.svg"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { api } from "../../../services/api";

const HomePage = () => {
    const { user } = useContext(UserContext);
    const { token } = useContext(UserContext)
    const [transactions, setTransactions] = useState({})

    console.log(transactions)

    useEffect(()=> {
        const getTransactions = async () => {
            try {
                const response = await api.get("/transactions", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    } 
                });
                
                if(!response) {
                    return null;
                } else if (response && response.status === 200) {
                    setTransactions(response.data)
                }
            } catch (error) {
                console.error(error)
            }
        }
        getTransactions()
    }, [])

    if (transactions.length !== undefined) {
        return (
            <HomePageStyle>
                <div className="first-div">
                    <p>Olá, { user }</p>
                    <img src={vector} alt="" />
                </div>
                <div className="another-div">
                    <div>
                        {transactions.map((transaction)=> {
                           console.log(transaction.transaction.value)
                        })}
                    </div>
                </div>
                <div className="third-div">
                    <Link to="/nova-entrada">
                        <button>
                            <img src={plus} />
                            <span>Nova entrada</span>
                        </button>
                    </Link>
                    <Link to="/nova-saida">
                        <button>
                            <img src={minus} />
                            <span>Nova Saída</span>
                        </button>
                    </Link>
                </div>
            </HomePageStyle>
        )
    } else {
        return (
            <HomePageStyle>
                <div className="first-div">
                    <p>Olá, { user }</p>
                    <img src={vector} alt="" />
                </div>
                <div className="second-div">
                    <div>
                        <span>Não há registros de entrada ou saída</span>
                    </div>
                </div>
                <div className="third-div">
                    <Link to="/nova-entrada">
                        <button>
                            <img src={plus} />
                            <span>Nova entrada</span>
                        </button>
                    </Link>
                    <Link to="/nova-saida">
                        <button>
                            <img src={minus} />
                            <span>Nova Saída</span>
                        </button>
                    </Link>
                </div>
            </HomePageStyle>
        )
    }
}

export default HomePage;