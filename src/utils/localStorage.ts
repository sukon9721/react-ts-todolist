export const getStoreItem = (key: string): unknown => {
  return JSON.parse(localStorage.getItem(key)!) || [];
};

export const setStoreItem = (key: string, payload: any): void => {
  localStorage.setItem(key, JSON.stringify(payload));
};
