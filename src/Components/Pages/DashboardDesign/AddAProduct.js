import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import useAdmin from '../../../Hooks/useAdmin';
const AddAProduct = () => {
    const [admin] = useAdmin()
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        const url = ' http://localhost:5000/tools';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Successfully added a Tools')
                event.target.reset();
            })
    };
    return (
        <section className=' addTools'>
            <div className='container mx-auto bg-slate-100 items-center flex justify-center'>
                <form className='p-10 mt-5 rounded-lg bg-slate-50' onSubmit={handleSubmit(onSubmit)} >
                    <h3 className='text-xl font-paragraph font-bold text-orange-400 flex items-center'>Add Product&nbsp;<FaArrowRight /></h3>
                    <label className="label">
                        <span className="label-text">Product img Url</span>
                    </label>
                    <input type='text' placeholder='Url' className="w-96 input input-bordered"  {...register("img")} required />
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type='text' placeholder='Product Name' className="w-96 input input-bordered"  {...register("name")} required />
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type='text' placeholder='Product-Info' className="w-96 input input-bordered"  {...register("description")} required />
                    <label className="label">
                        <span className="label-text">Min : O/Q</span>
                    </label>
                    <input type='number' placeholder='Min : O/Q' className="w-96 input input-bordered"  {...register("minimumOrderQuantity")} required />
                    <label className="label">
                        <span className="label-text">In-Stock Qty : </span>
                    </label>
                    <input type='number' placeholder='In-Stock Qty' className="w-96 input input-bordered"  {...register("availableQuantity")} required />

                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type='text' placeholder='Price' className="w-96 input input-bordered"  {...register("price")} required />
                    <br />
                    <input type="submit" value='Add Product' className="border-0 btn w-96 text-black hover:text-white bg-green-300 capitalize text-xl mt-1" />
                </form>
            </div>
        </section>
    );
};

export default AddAProduct;