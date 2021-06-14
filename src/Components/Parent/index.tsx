import React, {useState} from 'react'
import ButtonElement from "./ButtonElement";
import TextElement from "./TextElement";
import DisplayElement from "./DisplayElement";

interface Props {
    dates: Array<object>,
    showInfo: boolean,
    handleClick: () => void
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

   const checkDateIsFuture = () => {
        dates.map(date => (
            date.numericDate < today? date.numericDate.setFullYear((thisYear + 1)) : date.numericDate
            )
        )
   }

   const calculateDaysUntil = () => {
        const msInDay = 1000 * 60 * 60 * 24
        dates.map(date => (
            date.daysUntil = Math.round((date.numericDate.getTime() - today.getTime()) /msInDay)
        ))
   }


    return (
        <div>
            <TextElement />
            <DisplayElement dates={dates} showInfo={showInfo} />
            <ButtonElement />
            Days until

        </div>
    )
}

export default Parent