import React from "react";
import "./List.css";
import { Button, Checkbox, Label, Modal } from "flowbite-react";

const List = ({
  tasks,
  taskIdDelete,
  setTaskIdDelete,
  checkedTask,
  deleteTask,
}) => {
  // Handle delete click
  function handleDeleteClick(taskId) {
    setTaskIdDelete(taskId);
  }

  return (
    <>
      <section
        className="my-3 px-5 flex flex-col justify-start items-center"
        style={{ height: "70vh", overflowY: "auto" }}
      >
        {tasks.map((task) => {
          return (
            <article
              className="taskBox flex justify-between items-center p-4 border-b-2 rounded"
              key={task.id}
              style={{ minWidth: "50vw" }}
            >
              <div className="flex items-center">
                <Checkbox
                  id={`doneTask${task.id}`}
                  checked={task.done}
                  onChange={() => checkedTask(task.id, task.done)}
                />
                <Label
                  htmlFor={`doneTask${task.id}`}
                  className={`doneTask mx-3 capitalize ${
                    task.done ? "line-through" : ""
                  }`}
                >
                  {task.taskName}
                </Label>
              </div>

              {/* Delete button */}
              <Button
                type="button"
                color="gray"
                className="text-black px-0"
                onClick={() => handleDeleteClick(task.id)}
              >
                <i className="fa-solid fa-trash-can"></i>
              </Button>
              <Modal
                id={`modal${task.id}`}
                show={taskIdDelete === task.id}
                size="md"
                onClose={() => setTaskIdDelete(null)}
                popup
              >
                <Modal.Header />
                <Modal.Body>
                  <div className="text-center">
                    <i className="fa-solid fa-circle-exclamation fa-2xl mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Are you sure to delete this{" "}
                      <span className="text-blue-500 capitalize">
                        {task.taskName}
                      </span>{" "}
                      task?
                    </h3>
                    <div className="flex justify-center gap-4">
                      <Button
                        type="button"
                        color="failure"
                        onClick={() => deleteTask(task.id)}
                      >
                        Yes, I'm sure
                      </Button>
                      <Button
                        type="button"
                        color="gray"
                        onClick={() => setTaskIdDelete(null)}
                      >
                        No, cancel
                      </Button>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default List;
