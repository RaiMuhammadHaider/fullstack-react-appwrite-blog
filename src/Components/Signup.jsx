import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../Store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
const Signup = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const creat = async (data) => {
        setError('')
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData))
                navigate('/')


            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className='flex items-center justify-center '>
            <div className={`mx-auto w-full max-w-lg bg-gray-200 rounded-xl p-10 border border-black`}>
                <div className='mb-2 flex justify-center '>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100%' />

                    </span>

                </div>
                <h1 className='text-2xl text-center leading-tight font-bol'> Sign up to create your account

                </h1>
                <p className=' mt-2 text-center text-base text-black  '>
                    Already have an account?&nbsp;
                    <Link to='/login'
                        className=' font-medium text-primary transition-all duration-200 hover:underline'
                    >
                        sign In
                    </Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
                <form onClick={handleSubmit(creat)}>
                    <Input
                        label='Full name'
                        placeholder='Enter your full name '
                        {...register('name', {
                            required: true,
                        })}
                    />
                    <Input
                        label='Email: '
                        placeholder='Enter Your Name'
                        type='email'
                        {...register('email', {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || 'Email address must be valid address'
                            }
                        })}
                    />
                    <Input
                        label='Password'
                        type='password'
                        placeholder='Enter your name'
                        {...register('password', {
                            required: true
                        })}
                    />
                    {/* <button
                        className='w-full'
                        type='submit'>Sign up</button> */}
                        <Button
                        type='submit'
                        className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200'
                    >
                        Sign up
                    </Button>
                </form>

            </div>
        </div>
    )
}

export default Signup