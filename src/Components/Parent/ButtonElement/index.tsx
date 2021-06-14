import React, {useState} from 'react'

interface Props {
    handleClick: () => void
}

const ButtonElement: React.FC = (props) => {
    return (
        <div>
            {/*This doesn't work*/}
            {/*<button onClick={props.handleClick}>Show days until</button>*/}
        </div>
    )
}

export default ButtonElement