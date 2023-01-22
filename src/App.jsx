import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />}/>
                <Route path='/cadastro' element={<RegisterPage/>}/>
                <Route path='/home' element={<HomePage />}/>
                <Route path='/nova-entrada' element={<InputPage />}/>
                <Route path='/nova-saida' element={<OutputPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;