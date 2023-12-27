//import the store and actions
const store = require("./app/store");
const cakeActions = require("./app/features/cake/cakeSlice").cakeActions;

//subscribe to listen for changes
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});
//dispatch actionbs
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));
//finally unsubscribe
unsubscribe();
