import React from 'react';
import './App.css';
import OneSignal from 'react-onesignal';

function App() {
    const subscribeToNotifications = () => {
        OneSignal.Slidedown.promptPush();
    };

    return (
        <div className="App">
            <header className="App-header">
                <p>Click the button to subscribe to notifications.</p>
                <button onClick={subscribeToNotifications}>Subscribe</button>
            </header>
        </div>
    );
}

export default App;
