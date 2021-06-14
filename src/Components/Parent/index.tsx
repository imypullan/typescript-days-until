import React, {useState} from 'react'
import ButtonElement from "./ButtonElement";
import TextElement from "./TextElement";
import DisplayElement from "./DisplayElement";

interface Props {
    dates: Array<object>,
    showInfo: boolean,
    prepareDates: (e: React.MouseEvent<HTMLButtonElement>) => void,
    today: Object,
    thisYear: Object
}

const Parent: React.FC = () => {
    const today = new Date()
    const thisYear = today.getFullYear()
    const dates = [
        {
            name: "Christmas",
            numericDate: new Date(thisYear, 11, 25),
            daysUntil: 0
        },
        {
            name: "New Year's Day",
            numericDate: new Date(thisYear, 12, 1),
            daysUntil: 0
        },
        {
            name: "Valentine's Day",
            numericDate: new Date(thisYear, 1, 14),
            daysUntil: 0
        }
    ]
    const [showInfo, setShowInfo] = useState<boolean>(false)

   const prepareDates = (): void => {
        checkDateIsFuture()
        calculateDaysUntil()
        setShowInfo(true)
   }

   const checkDateIsFuture = (): void => {
        dates.map(date => (
            date.numericDate < today? date.numericDate.setFullYear((thisYear + 1)) : date.numericDate
            )
        )
   }

   const calculateDaysUntil = (): void => {
        const msInDay = 1000 * 60 * 60 * 24
        dates.map(date => (
            date.daysUntil = Math.round((date.numericDate.getTime() - today.getTime()) /msInDay)
        ))
   }

    return (
        <div>
            <TextElement />
            <DisplayElement dates={dates} showInfo={showInfo} />
            {/*This isn't passing down for some reason*/}
            {/*<ButtonElement handeClick={prepareDates}/>*/}
        </div>
    )
}

export default Parent