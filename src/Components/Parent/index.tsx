import React from 'react'
import ButtonElement from "./ButtonElement";
import TextElement from "./TextElement";

const Parent = () => {

    const handleClick = () => {
        console.log('hello')
    }

    return (
        <div>
            <TextElement />
            Days until

        </div>
    )
}

export default Parent