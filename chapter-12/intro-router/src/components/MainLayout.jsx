import { Navbar } from './Navbar';
import { Outlet } from 'react-router';
export function MainLayout() {
    const user = { id: 1, firstName: 'Karl', location: 'berlin' };
    const products = [
        { id: 1, title: 'bag' },
        { id: 2, title: 'apple' },
        { id: 3, title: 'cherries' },
    ];
    return (
        <>
            <Navbar />
            <Outlet context={{ user, products }} />
        </>
    );
}
