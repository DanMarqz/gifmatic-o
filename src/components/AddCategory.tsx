import { Dispatch, SetStateAction, useState } from 'react';

interface AddCategoryProps{
    onNewCategory: Dispatch<SetStateAction<string[]>>
}

export const AddCategory: React.FC<AddCategoryProps> = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue( target.value )
    }
    
    const onSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
        const userValue = inputValue.trim();
        
        e.preventDefault();        
        if( userValue.length <= 1 ) return;

        // setCategory( categories => [ userValue, ...categories ]);
        onNewCategory( [ userValue ] );
        setInputValue('');
    }

    return (
        <form onSubmit={ ( e: React.FormEvent<HTMLFormElement> ) => onSubmit(e) }>
            <input 
                type="text"
                placeholder="Search GIF"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
  )
}

