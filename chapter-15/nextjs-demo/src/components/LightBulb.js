'use client';
import { useState } from 'react';
export default function LightBulb() {
    const [isOn, setIsOn] = useState(false);
    return (
        <>
            {isOn ? 'ON' : 'OFF'}
            <button onClick={() => setIsOn(!isOn)}>Switch</button>
        </>
    );
}
