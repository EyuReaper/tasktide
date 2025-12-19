import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Mock data for Kanban tasks
const mockTasks = {
  todo: [
    { id: '1', title: 'Task 1 - High Priority', status: 'todo' },
    { id: '2', title: 'Task 2 - Low Priority', status: 'todo' },
  ],
  inProgress: [
    { id: '3', title: 'Task 3 - Medium Priority', status: 'inProgress' },
  ],
  underReview: [
    { id: '4', title: 'Task 4 - Medium Priority', status: 'underReview' },
  ],
  done: [
    { id: '5', title: 'Task 5 - Low Priority', status: 'done' },
  ],
};

let currentTasks = JSON.parse(JSON.stringify(mockTasks)); // Deep copy for mutable state

export const kanbanApi = createApi({
  reducerPath: 'kanbanApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }), // Base URL is not used for mock, but required
  tagTypes: ['Tasks'],
  endpoints: (builder) => ({
    getTasks: builder.query({
      queryFn: () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({ data: currentTasks });
          }, 500); // Simulate network delay
        });
      },
      providesTags: ['Tasks'],
    }),
    updateTaskStatus: builder.mutation({
      queryFn: ({ taskId, newStatus, oldStatus }) => {
        return new Promise(resolve => {
          setTimeout(() => {
            const taskToMove = currentTasks[oldStatus].find(task => task.id === taskId);
            if (taskToMove) {
              // Remove from old status
              currentTasks[oldStatus] = currentTasks[oldStatus].filter(task => task.id !== taskId);
              // Add to new status
              currentTasks[newStatus].push({ ...taskToMove, status: newStatus });
              resolve({ data: currentTasks });
            } else {
              resolve({ error: 'Task not found' });
            }
          }, 300); // Simulate network delay
        });
      },
      invalidatesTags: ['Tasks'],
    }),
  }),
});

export const { useGetTasksQuery, useUpdateTaskStatusMutation } = kanbanApi;
