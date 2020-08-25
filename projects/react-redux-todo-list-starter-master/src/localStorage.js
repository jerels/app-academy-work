const STATE_KEY = 'tasks';

export const loadState = () => {
  try {
    const storedState = localStorage.getItem(STATE_KEY);

    if (!storedState) {
      return undefined;
    }
    return JSON.parse(storedState);
  } catch (error) {
    console.warn(error);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const newState = JSON.stringify(state);

    localStorage.setItem(STATE_KEY, newState);
  } catch (error) {
    console.warn(error);
  }
};