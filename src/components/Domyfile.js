import React, { useState } from "react";
import { useForm } from "react-hook-form";
import data from '../assets/data'


function Domyfile() {


    const [to, setTo] = useState('DZA')
    console.log(to)
    // const {
    //     register,
    //     formState: { errors },
    //     handleSubmit,
    // } = useForm();


    // const onSubmit = (data) => {
    //     console.log(data.name);
    // }

    // const a = data 
    // console.log(data)

    let a = parseInt(to)

    const Showvalue = () => {
        alert(data[to])
    }

    return (

        <div>
            <select class="form-select" aria-label="Default select example" value={to} onChange={(e) => setTo(e.target.value)}>
                {
                    Object.keys(data).map((e) => <option value={e}>{e}</option>)

                }

            </select>
            {data.to}
            <button className="btn btn-info" onClick={Showvalue}>click</button>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h1>Registration</h1>
                </div>


                <div>
                    <label>Name</label>
                    <input
                        placeholder="Enter person name"
                        {...register("name", { required: true })}
                    />
                    <span>
                        {errors.name?.type === "required" && 'Name is required'}
                    </span>
                </div>


                <div>
                    <label>Email</label>
                    <input
                        placeholder="Enter primary email"
                        {...register("email",
                            {
                                required: true,
                                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                            })}
                    />

                    <span>
                        {errors.email?.type === "required" && "Email is required"}
                        {errors.email?.type === "pattern" &&
                            "Entered email is in wrong format"}
                    </span>
                </div>


                <div>
                    <label>Phone Number</label>
                    <input
                        type="number"
                        {...register("number", {
                            required:true,
                            minLength: 6,
                            maxLength: 12,
                        })}
                    />
                    <span>
                        {errors.number?.type === "minLength" &&
                            "Entered number is less than 6 digits"}
                        {errors.number?.type === "maxLength" &&
                            "Entered number is more than 12 digits"}
                        {errors.number?.type==='required' && 'enter your phone number'}    
                    </span>
                </div>


                <div>
                    <label>Password</label>
                    <input
                        placeholder="Enter password"
                        {...register("password", {
                            required: true,
                            minLength: 5,
                            maxLength: 20,
                        })}
                    />
                    <span>
                        {errors.password?.type === "minLength" &&
                            "Entered password is less than 5 characters"}
                        {errors.password?.type === "maxLength" &&
                            "Entered password is more than 20 characters"}
                    </span>
                </div>


                <div>
                    <input className="button" type="submit" />
                </div>
            </form> */}
        </div>
    );
}

export default Domyfile;