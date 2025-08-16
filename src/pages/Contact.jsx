import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import "./Contact.css";

const initialstate = {
    name: '',
    email: '',
    inquiryType: '',
    message: ''
}

const Contact = () => {
    const [formData, setFormData] = useState({ initialstate });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_vdui04z',
            'template_5vq7i26',
            {
                name: formData.name,
                email: formData.email,
                inquiryType: formData.inquiryType,
                message: formData.message,
                time: new Date().toLocaleString(),
            },
            'djaZ9vE6V6xJJ6NZc'
        ).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
                // alert("Message sent successfully!");
                toast.success("Message sent successfully!")
                setFormData(initialstate);
            },
            (error) => {
                console.log('FAILED...', error);
                alert("Something went wrong, please try again.");
            }
        );
    };

    return (
        <div className='container-fluid contact py-5'>
            <div className='container'>
                <h1 className="display-1 mb-3">Get In Touch</h1>
                <p className="text-muted">
                    Have a project in mind? Let’s build it together.
                </p>
                <div className='row form-row'>
                    <form onSubmit={handleSubmit} className='col-12 col-sm-12 col-md-12 col-lg-12'>
                        <div className='form-floating mb-3'>
                            <input
                                type="text"
                                className='form-control'
                                id="name"
                                name="name"
                                placeholder='Enter Name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                                type="email"
                                className='form-control'
                                id="email"
                                name="email"
                                placeholder='Enter Email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="email">Enter Email</label>
                        </div>
                        <div className='mb-3'>
                            <select
                                name="inquiryType"
                                id="inquiryType"
                                className='form-control p-3'
                                value={formData.inquiryType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Option</option>
                                <option value="Collaboration">Collaboration</option>
                                <option value="Freelance Project">Freelance Project</option>
                                <option value="Job Opportunity">Job Opportunity</option>
                                <option value="General Inquiry">General Inquiry</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <textarea
                                name="message"
                                id="message"
                                className="form-control"
                                placeholder="Type your message here..."
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <button type="submit" className="btn button btn-dark text-center w-50 fs-4">
                                Let's Connect
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;
