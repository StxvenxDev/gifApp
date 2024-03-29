import {useState,useEffect} from 'react'


export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setinputValue] = useState('One Punch')

    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1)return;
        // setCategories(cat => [...cat, inputValue]);
        onNewCategory(inputValue.trim());
        setinputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
                type="text"
                placeholder='Buscar'
                value={inputValue}
                onChange={ (event) => onInputChange(event)}
            />
        </form>

    )
}
