import React, {useState, useEffect} from 'react'

interface Props {
    handleClick: () => void
}

const ButtonElement: React.FC = (props) => {
    return (
        <div>
            <button>Show days until</button>
        </div>
    )
}

export default ButtonElement