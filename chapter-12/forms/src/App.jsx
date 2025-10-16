import { sleep, validate } from './utils';
import { useState } from 'react';

function App() {
    return (
        <>
            <h1>Forms</h1>
            {/* <BasicForm /> */}
            <FormWithAction />
        </>
    );
}

export default App;

function BasicForm() {
    const initialState = {
        name: '',
        email: '',
        message: '',
    };

    const [formState, setFormState] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({});

    function handleChange(e) {
        setError({});
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        const validationErrors = validate(formState);
        setError(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            await sleep(2000);
            console.log('Submitted', formState);
            alert('Form submitted successfully');
            setFormState(initialState);
        }
        setIsLoading(false);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={formState.name}
                    onChange={handleChange}
                />

                {error.name && <p>{error.name}</p>}
                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    name='email'
                    id='email'
                    value={formState.email}
                    onChange={handleChange}
                />
                {error.email && <p>{error.email}</p>}
                <label htmlFor='message'>Message</label>
                <textarea
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    name='message'
                ></textarea>

                {error.message && <p>{error.message}</p>}
                <button type='submit' disabled={isLoading}>
                    Submit
                </button>
            </form>
        </div>
    );
}

function FormWithAction() {
    async function submitAction(formData) {
        console.log(formData);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const validationErrors = validate({ name, email, message });

        if (Object.keys(validationErrors).length === 0) {
            await sleep(2000);

            console.log('Submitted', { name, email, message });
            alert('Form submitted successfully');
        } else {
            console.log(validationErrors);
        }
    }
    return (
        <form action={submitAction}>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' />

            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email' />
            <label htmlFor='message'>Message</label>
            <textarea rows={4} name='message'></textarea>

            <button type='submit'>Submit</button>
        </form>
    );
}
