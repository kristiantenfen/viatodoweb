import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Input, Title, DeleteButton } from './styles';

import Resource from '../../api/Resource';
import { TasksContext } from '../../hooks/Tasks';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TaskResource = new Resource('tasks');

interface ITask {
    id: string,
    title: string,
    description: string,
    status: boolean
}


const TaskListItem: React.FC<{ task: ITask }> = ({ task }) => {
    const [status, setStatus] = useState(task.status);
    const {getList} = useContext(TasksContext);
   
    const handleChangeStatus = () => {
        setStatus(!status);
        updateTask({ ...task, status:!status});
    }

    const updateTask = async (task: ITask) => {
        try {
            await TaskResource.update(task.id, task);
            toast.success("Task atualizada com sucesso!");
            getList();
        } catch (err) {
            toast.error(err.response.message);
        }
    }
    const handleDelete = async () => {
        try {
            await TaskResource.destroy(task.id);
            toast.success("Task exclída com sucesso!");
            getList();
        } catch (err) {
            toast.error("Task não pode ser excluída!")
            
        }
    }

    return (
        <Container>
            <Input type="checkbox" checked={status} value={status ? 1 : 0} onChange={() => handleChangeStatus()}/>
            <Title>{task.title}</Title>
            <DeleteButton onClick={handleDelete} ><FontAwesomeIcon icon={faTrash} color="#6247AA"/></DeleteButton>
        </Container>
    );
}

export default TaskListItem;