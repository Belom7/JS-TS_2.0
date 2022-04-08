import React, {FC} from 'react';

export type ManType = {
    name:string
    age:number
    lessons:{title:string}[]
    address:{street:{title:string}}
}

export const Destructing07:FC<ManType> = ({name,address:{street:{title}}}) => {
    //{name, ...restProps} = props
    return (
        <div>
            <h3>{name}</h3>
            {title}
        </div>
    );
};
