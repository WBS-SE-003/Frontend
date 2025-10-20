import { CounterContainer } from './counter/CounterContainer';
import { Parent } from './family/Parent';
import { Frame } from './Composition';
import UserState from './context/UserState';
function App() {
    return (
        <>
            <h1>useReducer + Context</h1>
            {/* <CounterContainer /> */}
            <UserState>
                <Parent />
            </UserState>
            {/* <Frame>
                <Card />
            </Frame>
            <Frame>
                <HeroImage />
            </Frame>
            <Card />
            <HeroImage /> */}
        </>
    );
}

export default App;

export function Card() {
    return (
        <div
            style={{
                height: '100px',
                width: '100px',
                backgroundColor: 'purple',
            }}
        >
            <p>Card</p>
        </div>
    );
}

export function HeroImage() {
    return (
        <img
            src='https://plus.unsplash.com/premium_photo-1673967859849-c8a37fa85aeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987'
            alt=''
            height={100}
        />
    );
}
