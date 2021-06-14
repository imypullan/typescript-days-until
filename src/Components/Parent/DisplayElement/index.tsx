import React from 'react'

interface Props {
    dates: Array<object>,
    showInfo: boolean
}

const DisplayElement: React.FC<Props> = (props) => {
    return (
        <div>
            <ul>
                {/*This doesn't work but I think it might be because these aren't strictly state? Altho if you look in the Components on devtools they are present*/}
                {/*{props.dates.map(date => (*/}
                {/*    <li key={date.name}>*/}
                {/*        {date.daysUntil} days until {date.name}*/}
                {/*    </li>*/}
                {/*))}*/}
            </ul>
        </div>
    )
}

export default DisplayElement