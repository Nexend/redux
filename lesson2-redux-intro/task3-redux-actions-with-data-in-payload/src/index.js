import store from './store';
import { addUser, deleteUser } from './users.actions';

const addBtn = document.querySelector('[data-action="add"]');
const deleteBtn = document.querySelector('[data-action="delete"]');

const onCreate = () => {
  store.dispatch(addUser({ id: 2, name: 'Tom' }));
};

const onDelete = () => {
  store.dispatch(deleteUser(2));
};

addBtn.addEventListener('click', onCreate);
deleteBtn.addEventListener('click', onDelete);

store.subscribe(() => {
  console.log(store.getState());
});
