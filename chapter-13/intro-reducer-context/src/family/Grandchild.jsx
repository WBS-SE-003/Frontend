import { useContext } from 'react';
import { UserContext } from '../context/UserState';
export function GrandChild() {
    const name = useContext(UserContext);
    return <p>{name}</p>;
}
