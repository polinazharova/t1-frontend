import {TaskList} from "@widgets/task-list";
import {TaskFilter} from "@features/task-filter";
import {TypographyMainTitle} from "@shared/typography-main-title";
import {TaskSearch} from "@features/task-search";
import {Header} from "@widgets/header";
import {observer} from "mobx-react-lite";

export const MainPage = observer(() => {
    return (
        <>
            <Header/>
            <main>
                <TaskSearch/>
                <TaskFilter/>
                <TypographyMainTitle>TASKS</TypographyMainTitle>
                <TaskList />
            </main>
        </>
    )
})