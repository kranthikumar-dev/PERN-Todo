import React, { useState } from "react";

const EditTodo = ({ todo, refreshTodos }) => {
  const [description, setDescription] = useState(todo.description);

  // Update todo function
  const updateTodo = async (e) => {
    e.preventDefault();
    try {
      const body = { description };

      const response = await fetch(`http://localhost:5000/todos/${todo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        refreshTodos(); // ✅ Update frontend without refreshing the page
        document.getElementById(`closeModal${todo.id}`).click(); // ✅ Close modal after editing
      } else {
        console.error("Failed to update todo.");
      }
    } catch (err) {
      console.error("Error updating todo:", err.message);
    }
  };

  return (
    <>
      {/* Edit Button to Trigger Modal */}
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#editModal${todo.id}`} // Unique ID for modal
      >
        Edit
      </button>

      {/* Modal */}
      <div className="modal fade" id={`editModal${todo.id}`} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Todo</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                id={`closeModal${todo.id}`} // Unique close button
              ></button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-success" onClick={updateTodo}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo;
