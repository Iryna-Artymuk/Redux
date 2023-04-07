import { nanoid } from 'nanoid';
//Екшени - це об'єкти, які передають дані з компонентів у стор,
//тим самим сигналізуючи про те, яка подія сталася в інтерфейсі.
//Вони являються єдиним джерелом інформації для стору.

// const action = {
//   type: "Action type",
//   payload: "Payload value",
// };

export const addTask = text => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: nanoid(),
      text: text,
      completed: false,
    },
    //  в цьому випадку  payload це обєкт одного завдання з осією інформацією
  };
};
export const deleteTask = TaskId => {
  return {
    type: 'tasks/deleteTask',
    payload: TaskId,
  };
};
export const toggleCompleted = TaskId => {
  return {
    type: 'tasks/toggleCompleted',
    payload: TaskId,
  };
};

export const sortByName = () => {
  return {
    type: 'tasks/sortByName',
  };
};
export const setStatusFilter = filterValue => {
  return {
    type: 'filters/setStatusFilter',
    payload: filterValue,
  };
};
