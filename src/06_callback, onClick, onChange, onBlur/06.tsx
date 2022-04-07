import React, {ChangeEvent} from 'react';

export const Component_06 = () => {

    const onClickDelete = () => {
        alert('delete user')
    }
    const onClickSave = () => {
        alert('save user')
    }
    const onChangeTextareaHandler = () => {
        console.log('there have been changes in textarea')
    }
    const onBlurHandler = () => {
        console.log('focus off')
    }
    const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
    }
    return (
        <div>
            <textarea onChange={onChangeTextareaHandler} onBlur={onBlurHandler}>Maks</textarea>
            <input onChange={onChangeInputHandler}/>
            <button onClick={onClickDelete}>delete</button>
            <button onClick={onClickSave}>save</button>
        </div>
    );
};
