import React from 'react';
import './App.css';
import TasksList from './components/TasksList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import AddTask from './components/AddTask';
import { TasksProvider } from './hooks/Tasks';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <section>
        <TasksProvider>
          
        <AddTask />
        <TasksList />
        </TasksProvider>
      </section>
    </div>
  );
}

export default App;
