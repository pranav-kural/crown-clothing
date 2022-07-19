export const selectCurrentUser = (state) => state.user.currentUser;
export const selectUserLoggedIn = (state) => !!state.user.currentUser;
export const selectReduxPersistKey = (state) => state.user.reduxPersistKey;
