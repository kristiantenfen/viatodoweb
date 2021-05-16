import React, { useContext} from 'react';
import { TasksContext } from '../../hooks/Tasks';
import TaskListItem from '../TaskListItem';

import { Container } from './styles';


const TasksList: React.FC = () => {
    const {tasks} = useContext(TasksContext);

    return (
        <Container>
            {tasks.length ? 
                tasks.map(task => (<TaskListItem key={task.id} task={task} />))
                : "Lista vazia"
        }
        </Container>
    );
}

export default TasksList;