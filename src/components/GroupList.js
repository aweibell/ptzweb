import React, {useState} from 'react'
import Group from './Group'


const GroupList = ({groups, sendPosition}) => {
    const [selectedPreset, setSelectedPreset] = useState(65);
    const selectPresetHandler = (preset) => {
        sendPosition(preset)
            .then(response => {
                setSelectedPreset(preset)
            })
            .catch(e => {
                console.warn('uff da...', e);
            })
    }

    return (
        <div className="groupscontainer">
            {groups.map((group, idx) => {
                return (
                    <Group
                        key={group.title+idx}
                        title={group.title}
                        positions={group.positions}
                        selectedPreset={selectedPreset}
                        selectPreset={selectPresetHandler}
                    />
                )
            })}
        </div>
    )
}

export default GroupList
