import React, {useState} from 'react'
import ButtonElement from "./ButtonElement";
import TextElement from "./TextElement";
import DisplayElement from "./DisplayElement";

const Parent: React.FC = () => {
    const dates = [{}, {}]
    const today = new Date()
    const thisYear = today.getFullYear()
    const [showInfo, setShowInfo] = useState<boolean>(false)

    function prepareDates () {
        console.log('hello')
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