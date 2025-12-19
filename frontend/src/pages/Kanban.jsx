import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useGetTasksQuery, useUpdateTaskStatusMutation } from "../services/kanbanApi";

const Kanban = () => {
  const { data: tasks, error, isLoading } = useGetTasksQuery();
  const [updateTaskStatus] = useUpdateTaskStatusMutation();

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startStatus = source.droppableId;
    const finishStatus = destination.droppableId;

    if (startStatus === finishStatus) {
      // Reordering within the same column (not implemented in mock API yet, but good to keep structure)
      // For now, we only handle status change
    } else {
      updateTaskStatus({
        taskId: draggableId,
        newStatus: finishStatus,
        oldStatus: startStatus,
      });
    }
  };

  if (isLoading) {
    return <div className="p-4 text-center">Loading tasks...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-error">Error loading tasks.</div>;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Kanban Board</h1>
        <div className="grid grid-cols-4 gap-4">
          {Object.entries(tasks).map(([category, taskList]) => (
            <Droppable droppableId={category} key={category}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="border rounded-lg p-4 bg-gray-100 min-h-[200px]"
                >
                  <h2 className="text-xl font-semibold mb-2 capitalize">
                    {category}
                  </h2>
                  <ul>
                    {taskList.map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="mb-2 p-2 bg-white rounded shadow cursor-grab"
                          >
                            {task.title}
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </div>
    </DragDropContext>
  );
};

export default Kanban;
