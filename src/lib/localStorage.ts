function setLocalStorageValue<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorageValue<T>(key: string): T | null {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) as T : null;
}

function removeLocalStorageValue(key: string): void {
    localStorage.removeItem(key);
}

export { setLocalStorageValue, getLocalStorageValue, removeLocalStorageValue }