import React, {useEffect} from 'react'

interface Date {
    name: string,
    daysUntil: number
}

interface Props {
    dates: Array<Date>,
    showInfo: boolean
}


const DisplayElement: React.FC<Props> = (props) => {


    return (
        <div style={{display: props.showInfo? "block" : "none"}}>
            <ul>
                 {props.dates.map(date => (
                    <li key={date.name}>
                        {date.daysUntil} days until {date.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DisplayElement