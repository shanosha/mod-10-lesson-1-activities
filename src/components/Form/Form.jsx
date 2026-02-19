import React, { useEffect, useState } from "react";

const h2Style = "mx-4 text-2xl";
const inputStyle = 'border border-gray-400 rounded-sm px-2 py-1';

const initialFormData = {
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
    subscribeToNewsletter: false
}

function Form() {
    const [formData, setFormData] = useState(initialFormData);
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [disableCheckbox, setDisableCheckbox] = useState(true);
    //let passwordMismatch = false;
    
    useEffect(()=>{
        setPasswordMismatch(formData.password != formData.confirmPassword ? true : false);        
        setDisableCheckbox(formData.email.includes("@") ? false : true);
    },[formData]);

    function handleChange(e) {
        const {name,value, type, checked} = e.target;
        
        setFormData({...formData, [name]: type==='checkbox' ? checked :value
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        alert("Submitted!");
    }

    return (
        <>
            <h2 className={h2Style}>Form</h2>
            
            <form className="flex flex-col gap-2 p-4" onSubmit={handleSubmit}>
                
            <label htmlFor="username">Username</label>
            <input onChange={handleChange} value={formData.username} className={inputStyle} type="text" name="username" id="username" required />

            <label htmlFor="password">Password</label>
            <input onChange={handleChange} value={formData.password} className={inputStyle} type="password" name="password" id="password" required />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={handleChange} value={formData.confirmPassword} className={inputStyle} type="password" name="confirmPassword" id="confirmPassword" required />
            {passwordMismatch && (<p className="text-red-600 text-sm">Passwords do not match.</p>)}

            <label htmlFor="confirmPassword">Email</label>
            <input onChange={handleChange} value={formData.email} className={inputStyle} type="email" name="email" id="email" />

            <div>
            <input onChange={handleChange} checked={formData.subscribeToNewsletter} className={inputStyle} type="checkbox" name="subscribeToNewsletter" id="subscribeToNewsletter" disabled={ disableCheckbox } />
            <label htmlFor="subscribeToNewsletter" className="pl-2">Subscribe to newsletter</label>
            </div>

            <div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-sm hover:shadow-md cursor-pointer">Register</button>
            </div>

            </form>

        </>
    )
}

export default Form