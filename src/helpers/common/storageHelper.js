// import Cookies from 'universal-cookie';

// const cookies = new Cookies();
const useLocalStorage = true;
const isBrowser = typeof window !== 'undefined';

export const getItem = (key) => {
  if (useLocalStorage && isBrowser) {
    return window.localStorage.getItem(key);
  }

  // return cookies.get(key);
};

export const setItem = (key, value) => {
  if (useLocalStorage && isBrowser) {
    window.localStorage.setItem(key, value);
  } else {
    // TODO
    // cookies.set(key, value);
  }
};
