import { Card } from '../components/Card';
import { useOutletContext } from 'react-router';
export function Dashboard() {
    const { user } = useOutletContext();
    return (
        <>
            <h1>Dashboard</h1>
            <p>{user.firstName}</p>
            <Card />
        </>
    );
}
