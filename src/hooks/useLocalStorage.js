import { useEffect, useState } from 'react';
const PREFIX = 'codepen-clone-';
//to save the code even after we refresh 
const useLocalStorage=(key, initialValue)=> {
  const prefixedKey = PREFIX + key
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey)
    if (jsonValue != null) //if we have not had anything written previously
    return JSON.parse(jsonValue)

    if (typeof initialValue === 'function') {
      return initialValue()
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])

  return [value, setValue]
}
export default useLocalStorage;