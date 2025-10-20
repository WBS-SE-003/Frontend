import { createContext } from 'react';

export const UserContext = createContext();

export default function UserState({ children }) {
    const name = 'Karl';
    return <UserContext value={name}>{children}</UserContext>;
}
