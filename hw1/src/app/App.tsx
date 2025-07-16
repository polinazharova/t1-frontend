import './App.css'
import {MainPage} from "../pages/main";
import {TaskPage} from "../pages/task";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {TasksProvider} from "../entities/task";
import {TaskFilterProvider} from "../features/task-filter/model/context/TaskFilterContext.tsx";

const App = () => {

    return (
        <BrowserRouter>
            <TasksProvider>
                <TaskFilterProvider>
                    <Routes>
                        <Route path='/' element={<MainPage/>}/>
                        <Route path='/task/:id' element={<TaskPage/>}/>
                    </Routes>
                </TaskFilterProvider>
            </TasksProvider>
        </BrowserRouter>
    )
}

export default App;
