import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback, Instructions } from '../components';
import { registerNewsletter } from '../api/index.js';
import { useFormStatus } from 'react-dom';
async function submitAction(formData) {
    const email = formData.get('email');
    await registerNewsletter(email);
}

const Register = () => {
    return (
        <div className='flex flex-col items-center'>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <form action={submitAction}>
                    <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4'>
                        <legend className='fieldset-legend'>
                            Register to our newsletter
                        </legend>
                        <label className='label'>Email</label>
                        <input
                            className='input w-full'
                            name='email'
                            placeholder='Email'
                        />
                        <SubmitButton />
                    </fieldset>
                </form>
            </ErrorBoundary>
            <Instructions path='/register.md' />
        </div>
    );
};

export default Register;

function SubmitButton() {
    const { pending } = useFormStatus();
    console.log(pending);

    return (
        <button disabled={pending} className='btn btn-neutral mt-4'>
            {pending ? 'Submitting' : 'Register!'}
        </button>
    );
}
