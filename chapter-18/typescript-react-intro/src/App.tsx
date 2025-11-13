import {
    useReducer,
    useState,
    type ChangeEventHandler,
    type FormEvent,
    type MouseEventHandler,
} from 'react';
import Container from './Container';
import { type MouseEvent } from 'react';
import { Counter } from './Counter';
function App() {
    return (
        <>
            <Container>
                <Counter count={0} />
            </Container>
            <NameForm />
        </>
    );
}

export default App;

function NameForm() {
    const [name, setName] = useState('');

    // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    //     setName(event.target.name);
    // }
    //

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>
        setName(event.target.name);

    return (
        <>
            <form>
                <label htmlFor='name'>Name: </label>
                <input
                    onChange={handleChange}
                    type='text'
                    name='name'
                    id='name'
                />
            </form>
            {name && <p>{name}</p>}
        </>
    );
}

function ClickLogger() {
    function handleClick(event: MouseEvent<HTMLButtonElement>) {
        console.log('button clicked', event);
    }

    return (
        <>
            {/* <button onClick={handleClick}>Click Me</button>; */}
            <button
                onClick={
                    ((event) =>
                        console.log(
                            'Button clicked',
                            event
                        )) as MouseEventHandler<HTMLButtonElement>
                }
            >
                Click me
            </button>
        </>
    );
}

function FormHandler() {
    const [error, setError] = useState<string | null>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        if (!email) {
            setError('Email is required');
        }
        console.log('Form submitted', email);
    }

    if (error) {
        return (
            <>
                <div>{error}</div>
                <button onClick={() => setError(null)}>Try again</button>
            </>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='email' name='email' />
            <button type='submit'>Submit</button>
        </form>
    );
}

function FormHandlerTwo() {
    function submitAction(formData: FormData) {
        const email = formData.get('email');
        if (!email) throw new Error('Email is required');
        console.log('Form submitted');
    }
    return (
        <form action={submitAction}>
            <input type='email' name='email' id='email' />
            <button type='submit'></button>
        </form>
    );
}

type User = {
    id: number;
    name: string;
};

type State = {
    count: number;
};

type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
    }
}

function HooksDemo() {
    const [count, setCount] = useState(0);

    const [status, setStatus] = useState<'loading' | 'error' | 'success'>(
        'loading'
    );

    const [name, setName] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);

    const [state, dispatch] = useReducer(reducer, { count: 0 });
    

    //useMemo // useCallback
}
