import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(addProduct({ id: 1, name: 'milk' }));
store.dispatch(addProduct({ id: 2, name: 'banana' }));

store.dispatch(removeProduct(1));

store.dispatch(setUser({ name: 'Bob Marley' }));
store.dispatch(setUser({ name: 'Tom' }));

store.dispatch(removeUser());
