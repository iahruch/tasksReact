import {ADD_TASK, REMOVE_TASK, COMPLETE_TASK, CHANGE_FILTER} from './../constants'

export const AddTask = (id, text, isCompleted) => ({
  type: ADD_TASK,
  id, text, isCompleted
});

export const RemoveTask = (id) => ({
    type: REMOVE_TASK,
    id
});

export const CompleteTask = (id) => ({
    type: COMPLETE_TASK,
    id
})

export const ChangeFilter = (filter) => ({
    type: CHANGE_FILTER,
    filter
})
