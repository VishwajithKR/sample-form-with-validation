import React, { useState } from 'react'
import '../styles/form.css'
import { useForm } from "react-hook-form";
import data from '../assets/data'




function Form() {

  const [to, setTo] = useState()

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch
  } = useForm();

  const rangeValue = watch('rangeInput');

  const onSubmit = (data) => {
    console.log(data);
  }


  return (
    <div className='container mb-4'>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>

        <div class="form-group row" >




          {/* text type */}
          <label class="col-sm-2 mt-3 col-form-label">UserName :</label>
          <div class="col-sm-10">
            <input type="text" class="form-control mt-3" placeholder="text"
              {...register("name", { required: true })}
            />
            <span>
              {errors.name?.type === 'required' && <span className='validation-error'>enter your name</span>}
            </span>
          </div>

          {/* email type */}
          <label class="col-sm-2 mt-3 col-form-label">Email :</label>
          <div class="col-sm-10">
            <input type="email" class="form-control mt-3" placeholder="email"
              {...register('email', {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })} />
            <span>
              {errors.email?.type === 'required' && <span className='validation-error'>enter your email Id</span>}
              {errors.email?.type === 'pattern' && <span className='validation-error'>format is not matched</span>}
            </span>
          </div>

          {/* Options */}
          <label class="col-sm-2 mt-3 col-form-label">Options :</label>
          <div class="col-sm-10 mt-3">
            <select class="form-select" aria-label="Default select example"
              value={to} onChange={(e) => setTo(e.target.value)}
              {...register("mySelect", { required: true })}
            >
              <option selected disabled value=''>Select your country</option>

              {
                Object.keys(data).map((e) => {
                  return (
                    <option value={e}>{e}</option>
                  )
                })

              }

            </select>
            {errors.mySelect?.type === 'required' && <span className='validation-error'>This field is required</span>}
          </div>


          {/* number type */}
          <label class="col-sm-2 mt-3 col-form-label">Ph.Number :</label>
          <div class="col-sm-10">
            <input type="number" class="form-control mt-3" placeholder="number"
              {...register('phoneNumber', {
                required: true,
                minLength: 8,
                maxLength: 12,
              })}
            />
            <span>
              {errors.phoneNumber?.type === 'required' && <span className='validation-error'>enter your phone number</span>}
              {errors.phoneNumber?.type === 'maxLength' && <span className='validation-error'>maximum 12 numbers</span>}
              {errors.phoneNumber?.type === 'minLength' && <span className='validation-error'>minimum 8 numbers</span>}
            </span>
          </div>



          {/* search type */}
          <label class="col-sm-2 mt-3 col-form-label">Search :</label>
          <div class="col-sm-10">
            <input type="search" class="form-control mt-3" placeholder="searching..."
              {...register('search', {
                required: true,
              })} />
            <span>
              {errors.search?.type === 'required' && <span className='validation-error'>fill it</span>}
            </span>
          </div>

          {/* url type */}
          <label class="col-sm-2 mt-3 col-form-label">Url :</label>
          <div class="col-sm-10">
            <input type="url" class="form-control mt-3" placeholder="https://localhost:3000"
              {...register('url', {
                required: true,
              })} />
            <span>
              {errors.url?.type === 'required' && <span className='validation-error'>enter your url</span>}
            </span>
          </div>

          {/* hidden type */}
          <label class="col-sm-2 mt-3 col-form-label">Hidden :</label>
          <div class="col-sm-10">
            <input type="hidden" class="form-control mt-3" placeholder="Password" />
          </div>

          {/* file type */}
          <label class="col-sm-2 mt-3 col-form-label" >Photo :</label>
          <div class="col-sm-10">
            <input type="file" class="form-control mt-3" accept="image/png, image/jpeg, image/jpg"
              {...register('file', {
                required: true,

              })}
            />
            <span>
              {errors.file?.type === 'required' && <span className='validation-error'>choose your picture</span>}
            </span>
          </div>

          {/* date type */}
          <label class="col-sm-2 mt-3 col-form-label">Date of Birth :</label>
          <div class="col-sm-10">
            <input type="date" class="form-control mt-3" min="1995-01-01" max="2023-03-07"
              {...register("date",
                {
                  required: true,
                })}
            />

            <span>
              {errors.date?.type === 'required' && <span className='validation-error'>enter your date of birth</span>}
            </span>
          </div>

          {/* month type */}
          <label class="col-sm-2 mt-3 col-form-label">Month/Year :</label>
          <div class="col-sm-10">
            <input type="month" class="form-control mt-3" placeholder="Password" min="1998-01" max="2023-01"
              {...register("month",
                {
                  required: true,
                })}
            />

            <span>
              {errors.month?.type === 'required' && <span className='validation-error'>enter your birth month & year</span>}
            </span>
          </div>

          {/* week type */}
          <label class="col-sm-2 mt-3 col-form-label ">Week :</label>
          <div class="col-sm-10">
            <input type="week" class="form-control mt-3" placeholder="Password" min="1998-W01" max="2023-W08"
              {...register("week",
                {
                  required: true,
                })}
            />

            <span>
              {errors.week?.type === 'required' && <span className='validation-error'>enter your birth week</span>}
            </span>
          </div>

          {/* time type */}
          <label class="col-sm-2 mt-3 col-form-label">Time :</label>
          <div class="col-sm-10">
            <input type="time" class="form-control mt-3" placeholder="Password"
              {...register("time",
                {
                  required: true,
                })}
            />

            <span>
              {errors.time?.type === 'required' && <span className='validation-error'>set the birth time</span>}
            </span>
          </div>

          {/* tel type */}
          <label class="col-sm-2 mt-3 col-form-label">Ph.Number :</label>
          <div class="col-sm-10">
            <input type="tel" class="form-control mt-3" placeholder="tel"
              {...register("mobileNumber",
                {
                  required: true,
                  pattern: /^[0-9]{10}$/,
                  maxLength: 10,
                })}

            />
            <span>
              {errors.mobileNumber?.type === 'required' && <span className='validation-error'>enter your mobile number</span>}
              {errors.mobileNumber?.type === 'maxLength' && <span className='validation-error'>maximum 10 digits are allowed</span>}
              {errors.mobileNumber?.type === 'pattern' && <span className='validation-error'>example : 0987654321 minimum 10 digits</span>}
            </span>

          </div>

          {/* range type */}
         


          <label class="col-sm-2 mt-3 col-form-label">Range :</label>
          <div class="col-sm-10 mt-4">
          <input  type="range" min={0} max={100} {...register('rangeInput', { required: true, min: 18, max: 45 })} />
          {errors.rangeInput && <span className='validation-error' > This field is required and should be between 18 and 45</span>}
          <p>Range Value: {rangeValue}</p>

          </div>



          {/* radio type */}
          <label class="col-sm-2 mt-3 col-form-label">Radio :</label>
          <div class="col-sm-10 mt-4">
            <input class="form-check-input " type="radio" name="gender" value='male'
              {...register("gender", {
                required: "Gender is required"
              })}
            /> <span className='mt-5'>Male </span>
            <input class="form-check-input  ms-3" type="radio" name="gender" value='female'
              {...register("gender", {
                required: "Gender is required"
              })}
            /> <span className='mt-5'>Female </span>
            <div>
              {errors.gender?.type === 'required' && <span className='validation-error'>{errors.gender.message}</span>}
            </div>
          </div>

          {/* color type */}
          <label class="col-sm-2 mt-3 col-form-label">Color :</label>
          <div class="col-sm-10">
            <input type="color" class="form-control-color mt-3"
              {...register("color", { required: true })}
            />
            {errors.color && <span className='validation-error'>This field is required</span>}
          </div>








          {/* password type */}
          <label class="col-sm-2 mt-3 col-form-label">Password :</label>
          <div class="col-sm-10">
            <input type="password" class="form-control mt-3" placeholder="Password"
              {...register('password', {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/,
                maxLength: 12,
                minLength: 8,

              })} />
            <span>
              {errors.password?.type === 'required' && <span className='validation-error'>enter the password</span>}
              {errors.password?.type === 'pattern' && <span className='validation-error'>example : Abc@123</span>}
              {errors.password?.type === 'maxLength' && <span className='validation-error'>maximum 12 digits</span>}
              {errors.password?.type === 'minLength' && <span className='validation-error'>minimum 8 digits</span>}

            </span>
          </div>

          {/* checkbox type */}
          <label class="col-sm-2 mt-3 col-form-label">Check-box :</label>
          <div class="col-sm-10">
            <input class="form-check-input mt-4" type="checkbox"
              {...register('checkbox', {
                required: true,
              })}
            />
            <div>
              {errors.checkbox?.type === 'required' && <span className='validation-error'>pick the tick</span>}
            </div>
          </div>

          {/* reset type */}
          <label class="col-sm-2 mt-3 col-form-label">Reset :</label>
          <div class="col-sm-10">
            <input type="reset" class="form-control bg-primary mt-3" value='Reset' />
          </div>

          {/* button type */}
          <label class="col-sm-2 mt-3 col-form-label">Button :</label>
          <div class="col-sm-10">
            <input type="button" class="form-control bg-info mt-3" value='button' onClick={handleSubmit(onSubmit)} />
          </div>

          {/* submit type */}
          <label class="col-sm-2 mt-3 col-form-label">Submit :</label>
          <div class="col-sm-10">
            <input type="submit" class="form-control mt-3 bg-success" value='SUBMIT' />
          </div>

        </div>



      </form>

    </div>
  )
}

export default Form;