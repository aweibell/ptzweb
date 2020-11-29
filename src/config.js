export const positions = [
    {preset: 1, name: 'Altertavla'},
    {preset: 32, name: 'Glassfelt'},
    {preset: 2, name: 'Alterring'},
    {preset: 3, name: 'Alterring m lesepult'},
    {preset: 33, name: 'Scene nær'},
    {preset: 34, name: 'Scene vid'},
    {preset: 36, name: 'Korparti vidvinkel'},
    {preset: 4, name: 'Døypefont'},
    {preset: 5, name: 'Alter'},
    {preset: 35, name: 'Liturg'},
    {preset: 6, name: 'Lesepult'},
    {preset: 61, name: 'Lesepult ansikt'},
    {preset: 7, name: 'Tekst'},
    {preset: 10, name: 'Stallen'},
    {preset: 27, name: 'Stallen nær'},
    {preset: 31, name: 'Stall m tekst'},
    {preset: 8, name: 'Flygel'},
    {preset: 9, name: 'Orgel'},
    {preset: 40, name: 'Adventstake'},
    {preset: 41, name: 'Adventstake tenning'},
    {preset: 66, name: 'Bibelen'},
    {preset: 65, name: 'Mikrofon :)'},
]

const groupConfig = [
    {title: 'Venstre', presets: [4, 7]},
    {title: 'Scene', presets: [3, 33, 34, 36, 41]},
    {title: 'Alter', presets: [1, 2, 3, 5]},
    {title: 'Høyre', presets: [6, 61, 27, 10, 31, 8, 9]},
    {title: 'Detaljer', presets: [32, 40, 66, 65]},
]

const getPositionByPreset = (preset) => {
    return positions.find(pos => pos.preset === preset)
}

export const groups = groupConfig.map(group => {
    return {
        ...group,
        positions: group.presets.map(preset => {
            return getPositionByPreset(preset)
        })
    }
})
