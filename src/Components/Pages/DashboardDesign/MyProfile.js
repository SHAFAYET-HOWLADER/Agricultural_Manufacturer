import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import OwnerInfo from './OwnerInfo';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const [profile, setProfile] = useState([]);
    //get profile info
    const url = 'http://localhost:5000/profile';
    fetch(url, {
        method: 'GET',
    })
        .then(res => res.json())
        .then(data => {
            setProfile(data)
        })
    const onSubmit = (data, event) => {
        const url = ' http://localhost:5000/profile';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Successfully added a review')
                console.log(result)
                event.target.reset();
            })

    };

    return (
        <section className=' myProfile'>
            <div className='container mx-auto bg-slate-100 items-center grid grid-flow-col-1 lg:grid-cols-2'>
                <div className='user_info text-center'>
                    <div className='' >
                        <h3 className='text-1xl font-bold font-paragraph'>
                            Name : {user.displayName}
                        </h3>
                        <h3 className='text-1xl font-bold font-paragraph'>
                            Email : {user.email}
                        </h3>
                    </div>
                    {
                        profile.map(owner => <OwnerInfo
                            key={owner._id}
                            owner={owner}
                        ></OwnerInfo>)
                    }
                    <Link to='/dashboard/upDateProfile' className='border-0 font-bold py-1 font-paragraph rounded-lg btn-sm bg-orange-400 text-black capitalize text-xl mt-8'>Update</Link>
                </div>
                <form className='bg-slate-50 p-10 rounded-lg' onSubmit={handleSubmit(onSubmit)} >
                    <h3 className='text-xl font-paragraph font-bold text-orange-400 flex items-center'>Add Your Own Profile&nbsp;<FaArrowRight /></h3>
                    <label className="label">
                        <span className="label-text">Image Url</span>
                    </label>
                    <input type='text' placeholder='Url' className="w-96 input input-bordered"  {...register("img")} required />
                    <label className="label">
                        <span className="label-text">Country/District</span>
                    </label>
                    <input type='text'  placeholder='Country/District' className="w-96 input input-bordered"  {...register("country")} required />
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type='email'  placeholder='Email'  className="w-96 input input-bordered"  {...register("email")} required/>
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input type='number'  placeholder='Phone Number' className="w-96 input input-bordered"  {...register("number")} required />
                    <label className="label">
                        <span className="label-text">Linkedin Profile Link</span>
                    </label>
                    <input type='text'  placeholder='Linkedin Profile Link' className="w-96 input input-bordered"  {...register("linkedinProfile")} required />
                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <textarea type='text'  placeholder='Education' className="w-96 input input-bordered"  {...register("education")} required />
                    <br />
                    <input type="submit" value='Add' className="border-0 btn w-96 text-black hover:text-white bg-green-300 capitalize text-xl mt-1" />
                </form>
            </div>
        </section>
    );
};
export default MyProfile;