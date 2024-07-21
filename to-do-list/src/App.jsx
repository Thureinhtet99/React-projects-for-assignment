import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import AddButton from "./components/AddButton";
import uuid from "react-uuid";
import { baseApi } from "./api/BaseApi";

const App = () => {
  // useState
  const [openModal, setOpenModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [taskIdDelete, setTaskIdDelete] = useState(null);

  // Fetch todo-list from json-server
  async function fetchTodoList() {
    try {
      const response = await baseApi.get("/todo-list");
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // Submit task
  async function submitTask(newTask) {
    try {
      await baseApi.post("/todo-list", {
        id: uuid(),
        taskName: newTask,
        done: false,
      });
      setOpenModal(false);
      setNewTask("");
    } catch (error) {
      console.error(error);
    }
  }

  // Delete task
  async function deleteTask(taskId) {
    try {
      await baseApi.delete(`/todo-list/${taskId}`);
      setTaskIdDelete(null);
    } catch (error) {
      console.error(error);
    }
  }

  // Update task
  async function checkedTask(taskId, taskStatus) {
    try {
      await baseApi.patch(`todo-list/${taskId}`, {
        done: !taskStatus,
      });
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect
  useEffect(() => {
    fetchTodoList();
    // return () => {};
  }, [tasks]);

  return (
    <>
      <div className="container">
        <header>
          <h1 className="text-center text-4xl font-semibold my-3">Todo List</h1>
        </header>

        <main className="px-8 bg-gray-100">
          <Form />
          <List
            tasks={tasks}
            taskIdDelete={taskIdDelete}
            setTaskIdDelete={setTaskIdDelete}
            checkedTask={checkedTask}
            deleteTask={deleteTask}
          />

          {/* Add Button */}
          <div className="flex justify-end">
            <AddButton
              openModal={openModal}
              setOpenModal={setOpenModal}
              newTask={newTask}
              setNewTask={setNewTask}
              submitTask={submitTask}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
