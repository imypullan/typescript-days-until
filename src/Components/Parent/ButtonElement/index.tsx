import React, {useState} from 'react'

interface Props {
    handleClick: () => void
}

const ButtonElement: React.FC<Props> = (props) => {
    return (
        <div>
            <button onClick={() => props.handleClick()}>Show days until</button>
        </div>
    )
}

export default ButtonElement