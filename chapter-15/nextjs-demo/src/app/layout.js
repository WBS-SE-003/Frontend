import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <nav>
                    <ul className='flex justify-center gap-2'>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/products'>Products </Link>
                        </li>
                        <li>
                            <Link href='/dashboard'>Dashboard</Link>
                        </li>
                    </ul>
                </nav>

                {children}
            </body>
        </html>
    );
}
