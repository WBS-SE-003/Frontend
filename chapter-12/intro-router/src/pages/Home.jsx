import { Card } from '../components/Card';
import { useOutletContext } from 'react-router';
export function Home() {
    const { user } = useOutletContext();
    return (
        <>
            <h1>Home</h1>
            <p>{user.location}</p>
            <Card />
        </>
    );
}
