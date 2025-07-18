import './App.css'
import {MainPage} from "@/pages/main";
import {TaskPage} from "@/pages/task";
import {BrowserRouter, Route, Routes, useLocation, useParams} from 'react-router-dom';
import {ModalTaskForm} from "@features/create-task-form";

const App = () => {
    const location = useLocation();
    const state = location.state as { background?: Location };
    const background = state?.background;

    return (
        <>
            <Routes location={background || location}>
                <Route path='/' element={<MainPage/>}/>
                <Route path="/update/:id" element={<MainPage />} />
                <Route path="/new" element={<MainPage />} />
                <Route path='/task/:id' element={<TaskPage/>}/>
            </Routes>

            {background && (
                <Routes>
                    <Route path="/update/:id" element={<ModalTaskForm open={true} onClose={() => window.history.back()} />} />
                    <Route path="/new" element={<ModalTaskForm open={true} onClose={() => window.history.back()} />} />
                </Routes>
            )}
        </>
    )
}

export default App;
