import React, { useState } from 'react';
import axios from 'axios';
import Input from "./utils/Input";
import Select from './utils/Select';


export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: null,
    no_of_person: 1,
    budget_per_person: null
  })
  
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/v1/submissions', { enquiry: formData })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST" onSubmit={handleSubmit}>
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">

                      <div className="col-span-6 sm:col-span-3">
                        <Input name="name" value={formData.name} type="text" label="Name" onChange={handleInputChange}/>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <Input name="email" label="Email" onChange={handleInputChange}/>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <Select name="country" selectedValue={formData.country} handleSelectChange={handleInputChange}/>
                      </div>
                      <br/>

                      <div className="col-span-6 sm:col-span-3">
                        <Input name="no_of_person" value={formData.no_of_person} label="No of person" onChange={handleInputChange}/>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <Input name="budget_per_person" value={formData.budget_per_person}label="Budget per person($)" onChange={handleInputChange}/>
                      </div>

                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
          </div>
        </div>
    </>
  )
}