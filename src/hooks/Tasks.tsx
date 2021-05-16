import { createContext, useState, ReactNode, useEffect } from 'react';

import Resource from '../api/Resource';

const TaskResource = new Resource('tasks');

interface ITask {
    id: string,
    title: string,
    description: string,
    status: boolean
}

interface TasksContextData {
    tasks: ITask[],
    getList: () => void
}

interface TasksProps {
    children: ReactNode
}


export const TasksContext = createContext<TasksContextData>({} as TasksContextData);

export const TasksProvider = ({children}: TasksProps) => {
    const [tasks, setTasks] = useState<ITask[]>([]);

    const getList = async () => {
        const { data } = await TaskResource.list({});
        setTasks(data);
    }

    useEffect(() => {
        getList();
    }, [])

    return (
        <TasksContext.Provider value={{tasks, getList}}>
            {children}
        </TasksContext.Provider>
    )
}
