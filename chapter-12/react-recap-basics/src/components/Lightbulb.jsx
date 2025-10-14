import { useState } from 'react';
export function LightBulb() {
    const [isOn, setIsOn] = useState(false);
    console.log('lightbulb');

    return (
        <div>
            <p>{isOn ? 'on' : 'off'}</p>
            <button
                onClick={() => setIsOn(!isOn)}
                className='p-4 bg-pink-400 border-2 rounded'
            >
                Switch {isOn ? 'off' : 'on'}
            </button>
        </div>
    );
}
