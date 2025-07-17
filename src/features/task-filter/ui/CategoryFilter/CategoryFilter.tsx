import styles from './CategoryFilter.module.css'
import {categoryList} from "../../../../widgets/task-list/model/const/category";
import {StyledFormControl} from "../../../../shared/styled-form-control";
import {StyledInputLabel} from "../../../../shared/styled-input-label";
import {StyledSelect} from "../../../../shared/styled-select";
import {StyledMenuItem} from "../../../../shared/styled-menu-item";


interface Props {
    category: string;
    setCategory: (status: string) => void;
}

export const CategoryFilter = ({category, setCategory} : Props) => {
    return (
        <StyledFormControl className={styles['category-filter']}>
            <StyledInputLabel>Category</StyledInputLabel>
            <StyledSelect
                value={category}
                onChange={(e) => setCategory(e.target.value as string)}
                label="Category"
            >
                <StyledMenuItem value="">Все категории</StyledMenuItem>
                {
                    categoryList.map((item) => (
                        <StyledMenuItem key={item} value={item}>{item}</StyledMenuItem>
                    ))
                }
            </StyledSelect>
        </StyledFormControl>
    )
}