import { Link } from "react-router-dom";
import { HomePageStyle } from "./HomePageStyles";
import vector from "../../../assets/vector.svg"
import plus from "../../../assets/plus-circle-outlined.svg"
import minus from "../../../assets/minus-circle-outlined.svg"
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { TransactionsContext } from "../../../contexts/TransactionsContext";

const HomePage = () => {
    const { user } = useContext(UserContext);
    const { transactions } = useContext(TransactionsContext)
   
    if (transactions.length !== 0) {
        return (
            <HomePageStyle>
                <div className="first-div">
                    <p>Olá, { user }</p>
                    <img src={vector} alt="" />
                </div>
                <div className="another-div">
                    <div>
                        {/* {transactions.map((transaction)=> {
                            // console.log(transaction.transaction)
                        })} */}
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