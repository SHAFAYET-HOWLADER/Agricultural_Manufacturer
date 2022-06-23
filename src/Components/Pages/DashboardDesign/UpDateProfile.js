
import { FaArrowRight } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
const UpDateProfile = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const email = user.email;
    console.log(email);
    console.log(user)
    const onSubmit = (data, event) => {
        const url = `http://localhost:5000/profile/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Successfully Updated Profile')
                event.target.reset();
            })

    };
    return (
        <section className='updateProfile py-4'>
            <div className='flex justify-center items-center'>
                <form className='bg-slate-100 p-10 rounded-lg' onSubmit={handleSubmit(onSubmit)} >
                    <h3 className='text-xl font-paragraph font-bold text-orange-400 flex items-center'>Update Your Profile&nbsp;<FaArrowRight /></h3>
                    <label className="label">
                        <span className="label-text">Image Url</span>
                    </label>
                    <input type='text' placeholder='Url' className="w-96 input input-bordered"  {...register("img")} required />
                    <label className="label">
                        <span className="label-text">Country/District</span>
                    </label>
                    <input type='text' placeholder='Country/District' className="w-96 input input-bordered"  {...register("country")} required />
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input type='number' placeholder='Phone Number' className="w-96 input input-bordered"  {...register("number")} required />
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type='email' placeholder='Email' className="w-96 input input-bordered"  {...register("email")} required />
                    <label className="label">
                        <span className="label-text">Linkedin Profile Link</span>
                    </label>
                    <input type='text' placeholder='Linkedin Profile Link' className="w-96 input input-bordered"  {...register("linkedinProfile")} required />
                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <textarea type='text' placeholder='Education' className="w-96 input input-bordered"  {...register("education")} required />
                    <br />
                    <input type="submit" value='Update' className="border-0 btn w-96 text-black hover:text-white bg-green-300 capitalize text-xl mt-1" />
                </form>
            </div>
        </section>
    );
};

export default UpDateProfile;