import React from "react";
import { Button, Modal, TextInput } from "flowbite-react";

const AddButton = ({
  openModal,
  setOpenModal,
  newTask,
  setNewTask,
  submitTask,
}) => {
  // useState

  return (
    <>
      <Button
        className="text-black bg-blue-300 py-3"
        onClick={() => setOpenModal(true)}
      >
        <i className="fa-solid fa-plus fa-xl" />
      </Button>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-black text-center">
              NEW NOTE
            </h3>
            <div>
              <TextInput
                type="text"
                value={newTask}
                placeholder="Enter your note....."
                required
                onChange={(event) => setNewTask(event.target.value)}
                style={{ color: "black" }}
              />
            </div>
            <div className="w-full flex justify-center">
              <Button
                type="button"
                className="text-black bg-blue-200"
                onClick={() => submitTask(newTask)}
              >
                Submit
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddButton;
