import React from 'react'
import { useInput } from '@src/hooks/useInput';
import { Button, Heading } from '@src/components/ui';

import './LoginForm.less';

export const LoginForm: React.FC = () => {

    const username = useInput('', true);
    const password = useInput('', true);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        alert(JSON.stringify({ username, password }, null, 2))
    }
    return (
        <>
            <Heading tag='h2'>useInput example</Heading>
            <form className='login__form' onSubmit={handleSubmit}>
                <div className="form__inputs">
                    <label className='login__label' htmlFor='usernameInput'>
                        <span>Username   {username.error && <span className='login__label--error'>{username.error}</span>}</span>
                        <input {...username}
                            type='text'
                            id='usernameInput'
                            className='login__input'
                            placeholder='username' />
                    </label>
                    <label className="login__label" htmlFor='passwordInput'>
                        <span>Password   {password.error && <span className='login__label--error'>{password.error}</span>}</span>
                        <input {...password}
                            type='password'
                            id='passwordInput'
                            className='login__input'
                            placeholder='password' />
                    </label>
                </div>
                <Button className='login__btn' type='submit'>Log in</Button>
            </form>
        </>
    )
}

