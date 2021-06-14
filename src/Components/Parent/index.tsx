import React from 'react'
import ButtonElement from "./ButtonElement";
import TextElement from "./TextElement";
import DisplayElement from "./DisplayElement";

const Parent: React.FC = () => {

    const dates = [{}, {}]
    const showInfo = false

    const handleClick = () => {
        console.log('hello')
    }

    return (
        <div>
            <TextElement />
            <DisplayElement dates={dates} showInfo={showInfo} />
            Days until

        </div>
    )
}

export default Parent