import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useTitle from '../../Hook/useTitle';

const Login = () => {
    useTitle("Login")
    const { register, handleSubmit } = useForm()
    const [data, setData] = useState("");
    const handleLogin = data => {
        console.log(data)
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='w-96 mx-auto flex flex-col justify-center'>
                <h2 className='font-bold text-2xl text-center'>Login</h2>
                <form
                    onSubmit={handleSubmit(handleLogin)}
                    className="my-8 flex flex-col gap-3">
                    <div className='form-control my-1'>
                        <label className="label">
                            <span className="label-text font-semibold text-sm">Email</span>
                        </label>
                        <input type="text" {...register("email")} placeholder="email@email.com"
                            className="input input-bordered w-full" />
                    </div>
                    <div className='form-control my-1'>
                        <label className="label">
                            <span className="label-text font-semibold text-sm">Password</span>
                        </label>
                        <input type="password" {...register("password")} placeholder="********"
                            className="input input-bordered w-full" />
                        <label className="label">
                            <span className="label-text font-semibold text-xs">Forget Password</span>
                        </label>
                    </div>
                    <input type="submit" value="LOGIN" className='btn btn-accent hover:bg-slate-600 border-0 text-white' />
                </form>
                <p className='text-sm text-center'>New to Doctors Portal? <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;