import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage('isDarkModeEnabled');

    useEffect(() => {
        if someValue === true {
            document.getElementById("body").classList.add("dark-mode");
        } else if someValue === false {
            document.getElementById("body").classList.remove("dark-mode");
        } else {console.log("There was an error.")}
    }, [someValue]);

    return [someValue],[setSomeValue];
};

export default useDarkMode;