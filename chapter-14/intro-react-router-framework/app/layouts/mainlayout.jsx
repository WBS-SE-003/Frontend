import { Link, Outlet } from 'react-router';

export default function MainLayout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}
