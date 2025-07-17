import './App.css'
import {MainPage} from "@/pages/main";
import {TaskPage} from "@/pages/task";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/task/:id' element={<TaskPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
