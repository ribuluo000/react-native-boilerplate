export const INCREASE = 'INCREASE';

export const increase = (count) => ({
    type : INCREASE,
    count,
});

export const LOGIN = 'Login';
export const login = () => ({
    type : LOGIN,
});

export const LOGOUT = 'Logout';
export const logout = () => ({
    type : LOGOUT,
});