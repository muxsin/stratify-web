export function setLocalStorage(key: string, value: string) {
  return localStorage.setItem(key, value);
}

export function getLocalStorage(key: string) {
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : null;
}
