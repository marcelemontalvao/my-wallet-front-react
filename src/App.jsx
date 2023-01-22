import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./components/pages/LoginPage/LoginPage.jsx"
import RegisterPage from "./components/pages/RegisterPage/RegisterPage.jsx"
import HomePage from "./components/pages/HomePage/HomePage.jsx"
import InputPage from "./components/pages/InputPage/InputPage.jsx"
import OutputPage from "./components/pages/OutputPage/OutputPage.jsx"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/cadastro' element={<RegisterPage/>}/>
                <Route path='/home' element={<HomePage />}/>
                <Route path='/nova-entrada' element={<InputPage />}/>
                <Route path='/nova-saida' element={<OutputPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;