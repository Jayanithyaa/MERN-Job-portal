import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';

const CreateJob = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        data.skills = selectedOption;
        // console.log(data);
        fetch("http://localhost:3000/post-job", {
            method: "POST",
            headers:{'content-type' : 'application/json'},
            body: JSON.stringify(data)
        }).then(res => res.json()).then((result) =>{
            console.log(result);
            if(result.acknowledged === true){
                alert("Job posted successfully!!")
            }
            reset()
        });
    };

    const options = [
        {value: 'JavaScript', label:'JavaScript'},
        {value: 'C++', label:'C++'},
        {value: 'HTML', label:'HTML'},
        {value: 'CSS', label:'CSS'},
        {value: 'React', label:'React'},
        {value: 'Node', label:'Node'},
        {value: 'MongoDB', label:'MongoDB'},
        {value: 'Redux', label:'Redux'},
    ]

  return (
    <div className='amx-w-screen-2xl container mx-auto xl:px-24 px-4'>
        {/*form*/}
        <div className='bg-[#eaeaea] py-10 px-4 lg:px-16'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

       {/*first row*/}
        <div className='create-job-flex'>
            <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Job Title</label>
            <input type="text" defaultValue={"Web Developer"} {...register("jobTitle")} className='create-job-input' />
            </div>

            <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Company Name</label>
            <input type="text" placeholder='Ex: Microsoft' {...register("companyName")} className='create-job-input' />
            </div>
        </div>

        {/*second row*/}
        <div className='create-job-flex'>
            <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Minimum Salary</label>
            <input type="text" placeholder='$20k' {...register("minPrice")} className='create-job-input' />
            </div>

            <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Maximum Salary</label>
            <input type="text" placeholder='$100k' {...register("maxPrice")} className='create-job-input' />
            </div>
        </div>

        {/*third row*/}
        <div className='create-job-flex'>
            <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Salary Type</label>
            <select {...register("salaryType")} className='create-job-input'>
                <option value="">Choose our salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
            </select>            
      </div>

            <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Job Location</label>
            <input type="text" placeholder='Ex: Colombo' {...register("jobLocation")} className='create-job-input' />
            </div>
        </div>

        {/*fourth row*/}
        <div className='create-job-flex'>

            <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Job Posting Date</label>
            <input type="date" placeholder='Ex: 2023-12-29' {...register("postingDate")} className='create-job-input' />
            </div>

            <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Experience Level</label>
            <select {...register("experienceLevel")} className='create-job-input'>
                <option value="">Select Your Experience Level</option>
                <option value="NoExperience">No experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
            </select>            
            </div>

        </div>
      
        {/*fifth row*/}
            <div>
            <label className='block mb-2 text-lg'>Required Skill Set:</label>
                <CreatableSelect
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                isMulti
                className='create-job-input py-4'
                />
            </div>
        
        {/*sixth row*/}
        <div className='create-job-flex'>

            <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Company Logo</label>
            <input type="url" placeholder='Paste your company logo URL: http://wetransfer.com/img1' {...register("companyLogo")} className='create-job-input' />
            </div>

            <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Employment Type</label>
            <select {...register("employmentType")} className='create-job-input'>
                <option value="">Select Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
            </select>            
            </div>

        </div>

        {/*seventh row*/}
        <div className='w-full '>
        <label className='block mb-2 text-lg'>Job Description</label>
        <textarea className='w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-400'
        rows={6}
        placeholder="Describe the job responsibilities, qualifications, and any unique aspects in a clear and engaging way."
        {...register("description")}/>
        </div>

        {/*last row*/}
        <div className='w-full'>
            <label className='block mb-2 text-lg'>Job Posted By</label>
            <input type="email" placeholder='your email' {...register("postedBy")} className='create-job-input' />
        </div>

      <input type="submit" className='block mt-12 bg-blue text-white fornt-semibold px-8 py-2 rounded-sm cursor-pointer'/>
    </form>
        </div>
    </div>
  )
}

export default CreateJob