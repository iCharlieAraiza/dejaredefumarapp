import {useState} from 'react'

export const useInput = (initialValue: string | number | undefined, type: string) => {
  const [value, setValue] = useState(initialValue ? initialValue : "");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return { type, value, onChange };
};