import { createContext, useContext, useState } from 'react';

type TaskFilterContextType = {
    status: string;
    priority: string;
    category: string;
    setStatus: React.Dispatch<React.SetStateAction<string>>
    setPriority: React.Dispatch<React.SetStateAction<string>>;
    setCategory: React.Dispatch<React.SetStateAction<string>>
};

const FilterContext = createContext<TaskFilterContextType | null>(null);

export const TaskFilterProvider = ({ children }: { children: React.ReactNode }) => {
    const [status, setStatus] = useState<string>('');
    const [priority, setPriority] = useState<string>('');
    const [category, setCategory] = useState<string>('');

    return (
        <FilterContext.Provider value={{ status, priority, category, setStatus, setPriority, setCategory }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useTaskFilters = () => {
    const context = useContext(FilterContext);
    if (!context) throw new Error('useFilters must be used within a FilterProvider');
    return context;
};