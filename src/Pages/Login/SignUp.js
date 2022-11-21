import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../Hook/useTitle';

const SignUp = () => {
    useTitle("Sign Up")
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    // console.log(imageHostKey)
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    console.log(imageData.data.url)
                    const name = data?.name;
                    const email = data?.email;
                    const password = data?.password;
                    const imageURL = imageData.data.url;
                    createUser(email, password)
                        .then(result => {
                            const displayName = data.name;
                            const photoURL = imageURL;
                            const userInfo = {
                                displayName,
                                photoURL
                            }
                            updateUser(userInfo)
                                .then(() => { })
                                .catch(err => console.error(err))
                            const user = result.user;
                            console.log(user)
                            toast.success("Account created successfully!")
                            reset()
                            navigate('/')
                        })
                        .catch(err => console.error(err))
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='w-96 mx-auto flex flex-col justify-center'>
                <h2 className='font-bold text-2xl text-center'>Sign Up</h2>
                <form
                    onSubmit={handleSubmit(handleSignUp)}
                    className="my-8 flex flex-col gap-3">
                    <div className='form-control my-1'>
                        <label className="label">
                            <span className="label-text font-semibold text-sm">Full Name</span>
                        </label>
                        <input type="text" {...register("name", { required: "Your Full Name is Required" })} placeholder="Your Full Name"
                            className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-500 my-2'>{errors.name.message}</p>}
                    </div>
                    <div className='form-control my-1'>
                        <label className="label">
                            <span className="label-text font-semibold text-sm">Upload Photo</span>
                        </label>
                        <input type="file" {...register("image", { required: "Your Photo is Required" })} className="file-input file-input-bordered file-input-accent w-full" />
                        {errors.image && <p className='text-red-500 my-2'>{errors.image.message}</p>}
                    </div>
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
                        <input type="password" placeholder="********"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 characters long" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                            })}
                            className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-500 my-2'>{errors.password.message}</p>}
                    </div>
                    <input type="submit" value="Sign Up" className='btn btn-accent hover:bg-slate-600 border-0 text-white' />
                </form>
                <p className='text-sm text-center'>Already Registered? <Link to={'/login'} className='text-secondary'>Login Here</Link></p>
            </div>
        </div>
    );
};

export default SignUp;