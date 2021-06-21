import React from 'react';
import Sidebar from "./Components/Sidebar";

function App() {
    const today = new Date()
    const thisYear = today.getFullYear()
    const items = [
        { name: 'days until', label: 'Days Until',
            items: [
                { name: 'dates to look forward to', label: 'Dates to look forward to',
                    items: [
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
                    ]},
                { name: 'UK 2022 bank holidays', label: 'UK 2022 bank holidays',
                    dates: [
                        {
                            name: "New Year's Day",
                            numericDate: new Date(2022, 0, 3),
                            daysUntil: 0
                        }

                    ]}
            ]},
    ]
    return (
        <div className="days-until">
            <Sidebar items={items} />
        </div>
    );
}

export default App;
