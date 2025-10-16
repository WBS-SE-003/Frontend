import { sleep, validate } from './utils';
import { ErrorBoundary } from 'react-error-boundary';

import { useState, useActionState } from 'react';
import { useFormStatus } from 'react-dom';

function App() {
    return (
        <>
            <h1>Forms</h1>
            {/* <BasicForm /> */}
            {/* <FormWithAction /> */}
            {/* <FormWithUseFormStatus /> */}
            {/* <FormWithErrorHandling /> */}
            <FormWithUseActionState />
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

function FormWithUseFormStatus() {
    async function submitAction(formData) {
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

            <SubmitButton />
        </form>
    );
}

function SubmitButton() {
    const { pending, data, action, method } = useFormStatus();
    console.log({ pending });
    return (
        <>
            <button type='submit' disabled={pending}>
                {pending ? 'Submitting' : 'Submit'}
            </button>
        </>
    );
}

function FormWithErrorHandling() {
    async function submitAction(formData) {
        throw new Error('This error was thrown from the action');
    }
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <form action={submitAction}>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' />

                <label htmlFor='email'>Email</label>
                <input type='text' name='email' id='email' />
                <label htmlFor='message'>Message</label>
                <textarea rows={4} name='message'></textarea>

                <SubmitButton />
            </form>
        </ErrorBoundary>
    );
}

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <>
            <p>Error</p>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Retry</button>
        </>
    );
}

function FormWithUseActionState() {
    async function submitAction(prevState, formData) {
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const validationErrors = validate({ name, email, message });

        if (Object.keys(validationErrors).length === 0) {
            await sleep(2000);

            return {
                error: null,
                success: true,
            };
        } else {
            return {
                error: validationErrors,
                success: false,
                rawData: { name, email, message },
            };
        }
    }

    const [state, formAction, isPending] = useActionState(submitAction, {});

    console.log(state);
    return (
        <>
            {isPending && <p>Pending...</p>}
            <form action={formAction}>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    defaultValue={state.rawData?.name}
                />
                {state.error?.name && <p>{state.error.name}</p>}

                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    name='email'
                    id='email'
                    defaultValue={state.rawData?.email}
                />

                {state.error?.email && <p>{state.error.email}</p>}
                <label htmlFor='message'>Message</label>
                <textarea
                    rows={4}
                    name='message'
                    defaultValue={state.rawData?.message}
                ></textarea>
                {state.error?.message && <p>{state.error.message}</p>}
                <SubmitButton />
            </form>
            {state.success && <p> Form submitted</p>}
        </>
    );
}
