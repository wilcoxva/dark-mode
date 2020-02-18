import React, { useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);

        const setValue = value => {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.sstringify(value));
        };

        return item ? JSON.parse(item) : initialValue;
    });

    return [storedValue];
};

export default useLocalStorage;