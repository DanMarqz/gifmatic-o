import { useState } from 'react';

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Kitty')

    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const userValue = target.value;
        setInputValue( userValue )
    }

    const onSubmit= ( e: React.FormEvent<SubmitEvent> ) => {
        e.preventDefault();
        console.log(inputValue)
    }

    return (
        <form onSubmit={ (e) => onSubmit(e) }>
            <input 
                type="text"
                placeholder="Search GIF"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
  )
}

