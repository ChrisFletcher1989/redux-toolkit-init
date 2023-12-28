//import the store and actions
const store = require("./app/store");
const cakeActions = require("./app/features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./app/features/icecream/iceCreamSlice").iceCreamActions;
const fetchUsers = require("./app/features/user/userSlice").fetchUsers;

//subscribe to listen for changes
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});
//dispatch actions
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restocked(2));
store.dispatch(fetchUsers());
//finally unsubscribe
// unsubscribe();
