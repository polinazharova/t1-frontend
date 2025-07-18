import styles from './Header.module.css'
import {CreateTaskButton } from "@features/create-task-form";
import {useLocation, useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const openModal = () => {
        navigate('/new', { state: { background: location } });
    };

    return (
        <header className={styles.header}>
            <CreateTaskButton onClick={openModal} />
        </header>
    )
}