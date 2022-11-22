import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import Sidemenu from '../../shared/sidebar/Sidemenu';

const Reviews = () => {
    const { register, handleSubmit, watch, formState: { errors } , reset} = useForm();
    const onSubmit = (data) => {
    fetch('http://localhost:5000/review',{
            method: "POST",
            headers:{
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(inserted =>{
            if(inserted.insertedId){
                toast.success('Review added succesfully')
                reset()
              }
              else{
                toast.error('Review not added')
              }
          })
        }
    return (
        <>
         <section className="bg-gray-50 min-h-screen flex items-center ">
            <Sidemenu />
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl pl-10 h-full items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">Client Review</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <input className="p-2 mt-2 rounded-xl border" type="review" name="review" placeholder="add review" {...register("review", { required: true })} />
              <input className="p-2 mt-2 rounded-xl border" type="name" name="name" placeholder="name" {...register("name", { required: true })} />
              <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Add review</button>
            </form>

          </div>
          <div className="md:block hidden w-1/2">
            <img className="rounded-2xl" src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
          </div>
        </div>
      </section>
      <ToastContainer />   
        </>
    );
};

export default Reviews;