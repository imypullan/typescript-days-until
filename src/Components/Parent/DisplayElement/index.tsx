import React from 'react'

interface Props {
    dates: Array<object>,
    showInfo: boolean
}

const DisplayElement: React.FC<Props> = () => {
    return (
        <div>
            <ul>
                <li>Some stuff will go here</li>
            </ul>
        </div>
    )
}

export default DisplayElement