export default {
    token(state) {
        return state.token
    },
    isLoggedIn(state) {
        return !!state.token;
    }
};