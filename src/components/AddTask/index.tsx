import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import Modal from 'react-modal';

import { Container, Button, Input, Form, TextArea, Title } from './styles';

import Resource from '../../api/Resource';
import { TasksContext } from '../../hooks/Tasks';

const TaskResource = new Resource('tasks');
Modal.setAppElement('#root')
const AddTask: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const {getList} = useContext(TasksContext);

    const handleAddTask = async () => {
        if (title.length) {
            try {
                await TaskResource.store({ title, description });
                toast.success("Task atualizada com sucesso!");
                getList();
            } catch (err) {
                toast.error(err.response.message);
            }
            handleModal();
        } else {
            toast.error("Título é obrigatório!");
        }
    }

    const handleModal = () => {
        setModalIsOpen(!modalIsOpen);
    }
    return (
        <Container>
            <Button onClick={handleModal}>Adicionar</Button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleModal}
          contentLabel="Example Modal"
        >

          <Title>Adicionar Task</Title>
          <Form>
                <Input placeholder="Titulo" name="title" onChange={event => setTitle(event.target.value)}/>
                <TextArea placeholder="Descrição" name="description" onChange={event => setDescription(event.target.value)}/>
          </Form>
            <Button onClick={handleModal}>Cancelar</Button>
            <Button onClick={() => handleAddTask()}>Cadastrar</Button>
        </Modal>
        </Container>
    );
}
export default AddTask;