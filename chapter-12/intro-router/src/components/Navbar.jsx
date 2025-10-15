import { Link } from 'react-router';
export function Navbar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/products'>Products</Link>
        </nav>
    );
}
