import { useState, ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

export default (initialVal: string): [
    string,
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
     HTMLInputElement>,
     Function
    ] => {
        
    const [value, setValue ] = useState(initialVal);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => setValue(event.target.value);

    const reset = (): void => setValue('');

    return [value, handleChange, reset];
}