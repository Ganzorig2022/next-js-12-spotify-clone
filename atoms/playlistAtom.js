import { atom } from 'recoil';

export const playlistState = atom({
  key: 'playlistState', // unique ID (with respect to other atoms/selectors)
  default: null,
});

export const playlistIdState = atom({
  key: 'playlistIdState', // unique ID (with respect to other atoms/selectors)
  default: '3vO6fAh6Q9PNXwCA37SqvB', // default value (aka initial value)
});
