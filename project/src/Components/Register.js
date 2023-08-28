import React, { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";
import { Link } from "react-router-dom";

const Register = () => {
  init("user_xxxxxxxxxxxxxxxxxxx");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_axq74lt", "template_emg1laa", form.current, "wlOB4tpZrx0s21sRd").then(
      (result) => {
        alert("Message Sent Successfully");
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };
  return (
    <div className="bg-[#C3DDFD] bg-cover flex justify-center items-center h-screen">
      <div className="bg-neutral-100 h-[500px] w-96 text-center">
      <form onSubmit={handleSubmit} ref={form} className="m-2">
        <div className="bg-neutral-200 py-6">
          <h1 className=" font-serif text-3xl text-[#1A56DB]">Blue Fantasy Inns</h1>
          <sub className="">Pet Resort & Camp</sub>
        </div>
        <h1 className="text-center py-8 text-xl font-semibold">Customer Login</h1>
        <div className="flex flex-col justify-center gap-3">
          <input type="text" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
          dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="firstname" placeholder="First Name" />
          
          <input type="text" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
          dark:focus:ring-blue-500 dark:focus:border-blue-500"
           name="lastname" placeholder="Last Name" />
          
          <input type="text"  
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
          dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="Email" placeholder="Email Address"/>
          
        </div>

        <div class="flex items-center mb-4">
        <input id="checkbox-1" type="checkbox" value="" 
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500
        dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2
        dark:bg-gray-700 dark:border-gray-600" />
        <label for="checkbox-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          I agree to the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.
        </label>
        </div>

        <Link to="/Home"><button type="submit" 
        className="px-5 py-2 my-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg
         hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600
       dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Register & Login
        </button></Link>
      </form></div>
    </div>
  );
}

export default Register