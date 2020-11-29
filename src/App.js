import React  from 'react'
import './App.css'
import GroupList from './components/GroupList'
import { groups } from './config'

const sendPosition = (position) => {
    try {
        return fetch(`http://10.230.44.200/cgi-bin/ptzctrl.cgi?ptzcmd&poscall&${position}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                return data;
            })
            .catch(e => {
                console.warn('cathed this:', e)
                throw new Error('unable to set new preset: ' + e);
            })
    } catch (e) {
        console.warn('got error', e)
    }
}


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Avonic CM60-IP</p>
            </header>
            <GroupList
                groups={groups}
                sendPosition={sendPosition}
            />
            <div className={'attribution'}>Icons made by&nbsp;
                <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from&nbsp;
                <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>
        </div>
    )
}

export default App
