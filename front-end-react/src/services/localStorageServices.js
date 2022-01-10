export const getValue = (key)=>{
    console.log('key', key)
    const value = window.localStorage.getItem(key);
    return value
}

export const setValue = (key, value)=>{
    window.localStorage.setItem(key, value)
}