import Cookies from 'js-cookie';

const SET_USER = 'pokedex/authentication/SET_USER';
const REMOVE_USER = 'pokedex/authentication/REMOVE_USER';

export const setUser = user => {
    return {
        type: SET_USER,
        user
    };
};
export const removeUser = () => {
    return { type: REMOVE_USER };
};


export const login = (email, password) => async dispatch => {
    const res = fetch(`/api/session`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (res.ok) {
        const { player } = await res.json();
        dispatch(setUser(player));
    };
};

export const logout = () => async dispatch => {
    const res = await fetch('/api/session', {
        method: 'delete'
    });

    if (res.ok) {
        dispatch(removeUser());
    }
};

const loadUser = () => {
    const authToken = Cookies.get('token');
    if (authToken) {
        try {
            const payload = authToken.split('.')[1];
            const decodedPayload = atob(payload);
            const payloadObj = JSON.parse(decodedPayload);
            const { data } = payloadObj;
            return data;
        } catch (e) {
            Cookies.remove('token');
        }
    }
    return {};
}

const reducer = (state = loadUser(), action) => {
    switch (action.type) {
        case SET_USER:
            return action.user;
        case REMOVE_USER:
            return {};
        default:
            return state;
    }
}

export default reducer;