"use client";
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import React from 'react'

const Login = () => {

  const router = useRouter();

  const loginForm = useFormik({
    initialValues: {
     
      email: "",
      password: ""
      
    },

    onSubmit: async(values) => {
      console.log(values);

      const res = await fetch("http://localhost:5000/user/authenticate", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"

        }
      })
      console.log(res.status);
      if(res.status === 200){
        enqueueSnackbar("user login successfully",{variant:"success"})
        router.push("/login")

      }else{
        enqueueSnackbar("somthing went worng", {variant :"warning"})
      }
    }
  })

  return (
    <div>
      <form className="max-w-md mx-auto mt-20" onSubmit={loginForm.handleSubmit}>
        
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={loginForm.values.email}
            onChange={loginForm.handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required=""
          />
            {
            loginForm.touched.email &&
            <span className="text-red">{loginForm.errors.email}</span>
          }
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            value={loginForm.values.password}
            onChange={loginForm.handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required=""
          />
            {
            loginForm.touched.password &&
            <span className="text-red">{loginForm.errors.password}</span>
          }
        </div>
       
       
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              defaultValue=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required=""
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
              terms and conditions
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register new account
        </button>
      </form>

    </div>
  )
}

export default Login