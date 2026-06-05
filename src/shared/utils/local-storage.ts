export function setLocalStorage(key: string, value: string) {
  return localStorage.setItem(key, value);
}

export function getLocalStorage(key: string) {
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : null;
}

export function getAllLocalStorageItems(startingKey: string) {
  return Object.keys(localStorage)
    .filter((key) => key.startsWith(startingKey))
    .map((key) => {
      const data = localStorage.getItem(key);
      return {
        key,
        value: data ? JSON.parse(data) : null,
      };
    });
}
