/* eslint-disable no-unused-vars */
import React from 'react'
import bsImage from '../assets/bootstrap-logo.svg'

const Form = () => {
  return (
    <section className='pt-10'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12'>
                <div className='col-start-2 col-end-6 md:col-start-3 md:col-end-7 lg:col-start-4 lg:col-end-10'>
                    {/* Image & Title */}
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <img src={bsImage} alt='bs-image' />
                        <h1 className='font-bold text-4xl leading-10'>Create Product</h1>
                    </div>

                    {/* Desc */}
                    <div className='text-center mt-4 md:mt-8'>
                        <p className='mx-auto text-sm lg:text-base lg:leading-8'>Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                    </div>
                    
                    {/* Form */}
                    <div className='mt-4 md:mt-8'>
                        <h2 className='text-2xl font-medium leading-7'>Detail Product</h2>
                        <form className='mt-4 md:mt-6' noValidate>
                            {/* Product Name */}
                            <div className='mb-4'>
                                <label htmlFor='product-name' className='block mb-2 text-sm font-medium text-gray-900'>Product Name</label>
                                <input id='product-name' type='text' name='product-name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0D6EFD] focus:border-[#0D6EFD] block w-full p-2.5' />
                            </div>

                            {/* Product Category */}
                            <div className='mb-4'>
                                <label htmlFor='product-category' className='block mb-2 text-sm font-medium text-gray-900'>Product Category</label>
                                <select id='product-category' name='product-category' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0D6EFD] focus:border-[#0D6EFD] block w-full p-2.5'>
                                    <option selected>Choose</option>
                                    <option value='shirt'>Shirt</option>
                                    <option value='jacket'>Jacket</option>
                                </select>
                            </div>

                            {/* Product Image */}
                            <div className='mb-4'>
                                <label htmlFor='product-image' className='block mb-2 text-sm font-medium text-gray-900'>Image of Product</label>
                                <input id='product-image' type='file' name='product-image' className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none' />
                            </div>

                            {/* Product Freshness */}
                            <div className='mb-4'>
                                <label className='block mb-2 text-sm font-medium text-gray-900'>Product Freshness</label>
                                <div className='flex items-center'>
                                    <input type='radio' name='product-freshness' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-[#0D6EFD]' />
                                    <label htmlFor='brand-new' className='ml-2 text-sm font-medium text-gray-900'>Brand New</label>
                                </div>
                                <div className='flex items-center'>
                                    <input type='radio' name='product-freshness' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-[#0D6EFD]' />
                                    <label htmlFor='second-hank' className='ml-2 text-sm font-medium text-gray-900'>Second Hank</label>
                                </div>
                                <div className='flex items-center'>
                                    <input type='radio' name='product-freshness' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-[#0D6EFD]' />
                                    <label htmlFor='refurbished' className='ml-2 text-sm font-medium text-gray-900'>Refurbished</label>
                                </div>
                            </div>

                            {/* Product Description */}
                            <div className='mb-4'>
                                <label htmlFor='product-description' className='block mb-2 text-sm font-medium text-gray-900'>Additional Description</label>
                                <textarea id='product-description' name='product-description' rows='4' className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#0D6EFD] focus:border-[#0D6EFD]'></textarea>
                            </div>

                            {/* Product Price */}
                            <div className='mb-4'>
                                <label htmlFor='product-price' className='block mb-2 text-sm font-medium text-gray-900'>Product Price</label>
                                <input id='product-price' type='number' placeholder='$ 100' min='1' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0D6EFD] focus:border-[#0D6EFD] block w-full p-2.5' />
                            </div>

                            {/* Button Submit */}
                            <div className='mb-4'>
                                <button id='btn-submit' type='submit' className='w-full text-white bg-[#0D6EFD] hover:bg-blue-800 focus:ring-4 focus:ring-[#0D6EFD] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            <div className='my-8 w-full md:w-4/5 mx-auto'>
                <h2 className='text-2xl font-medium leading-7 text-center'>List Product</h2>
                <input type='text' className='mt-6 block w-[90%] md:w-full mx-auto p-2 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500' id='input-search' placeholder='Search by Username' />
                <div className='w-[90%] md:w-full mx-auto flex justify-end mt-4'>
                    <button id='btn-delete' type='button' className='text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'>Delete</button>
                    <button id='btn-search' type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'>Search</button>
                </div>
                <div className='mt-4 relative overflow-x-auto shadow-md sm:rounded-lg'>
                    <table className='w-full text-sm text-left text-gray-500'>
                        <thead className='text-xs text-white uppercase bg-[#0D6EFD]'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>
                                Product Name
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                Product Category
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                Image of Product
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                Product Freshness
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                Additional Description
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                Product Prices
                                </th>
                            </tr>
                        </thead>
                        <tbody id='table-product'>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Form