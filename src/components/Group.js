import React from 'react';
import Position from './Position';


const Group = ({title, positions, selectedPreset, selectPreset}) => {
    return (
        <>
            <div className="group">
                <h1>{title}</h1>
                <div className="positions-container">
                    {positions.map(position => {
                        return (
                            <Position
                                key={position.preset}
                                position={position}
                                selectedPreset={selectedPreset}
                                selectPreset={selectPreset}
                            />
                        );
                    })
                    }
                </div>
            </div>
        </>
    );
}

export default Group;
