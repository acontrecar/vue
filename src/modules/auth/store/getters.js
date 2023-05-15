// export const myGetters = ({ state }) => {};
//Traer informacion de los state


export const currentState = (state) => {
    return state.status
};

export const username = (state) => {
    return state.user?.name || ''
};