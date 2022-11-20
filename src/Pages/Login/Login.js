import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../Hook/useTitle';

const Login = () => {
    useTitle("Login");
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [data, setData] = useState("");
    const { user, signIn, passwordReset } = useContext(AuthContext);

    const [loginError, setLoginError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    const handleLogin = data => {
        signIn(data.email, data.password)
            .then(result => {
                setLoginError('')
                toast.success("Logged in Successfully!");
                reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(`${error.message}`)
                console.error(error.message);
                setLoginError(error.message);
            })
    }
    const handlePassChange = event => {
        console.log(event)
        // if(!data.email){
        //     toast.error("Please input the Email first!")
        // }
        // passwordReset(data.email)
        // console.log("Forgot Password Working")
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
                        <input type="text" {...register("email", { required: "Your Email is Required" })} placeholder="email@email.com"
                            className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-500 my-2'>{errors.email.message}</p>}
                    </div>
                    <div className='form-control my-1'>
                        <label className="label">
                            <span className="label-text font-semibold text-sm">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: "Your Password is Required" })} placeholder="********"
                            className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-500 my-2'>{errors.password.message}</p>}
                        <label className="label">
                            <Link
                                onClick={handlePassChange}
                                className="label-text font-semibold text-xs hover:underline underline-offset-1">Forget Password</Link>
                        </label>
                    </div>
                    <input type="submit" value="LOGIN" className='btn btn-accent hover:bg-slate-600 border-0 text-white' />
                </form>
                <div>
                    {loginError ? <p className='text-red-600 my-2 font-semibold text-center'>{loginError}</p> : <></>}
                </div>
                <p className='text-sm text-center'>New to Doctors Portal? <Link to={'/sign-up'} className='text-secondary' >Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;