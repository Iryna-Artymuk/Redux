import { Task } from 'components/Task/Task';

import css from './TaskList.module.css';

export const TaskList = () => {
  return (
    <ul className={css.list}>
      <li className={css.listItem}>
        <Task />
      </li>
    </ul>
  );
};
