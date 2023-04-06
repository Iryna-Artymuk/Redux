import { Button } from 'components/Button/Button';

import css from './TaskForm.module.css';
const handleSubmit = () => {};
export const TaskForm = () => {
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
