import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [form, setform] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setform({ ...form, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            'service_h6prtnp',
            'template_xguvhwh',
            {
                from_name: form.name,
                to_name: 'Carson',
                from_email: form.email,
                to_email: 'carsonjf8@gmail.com',
                message: form.message,
            },
                'hozkn8z_ZGMndX55-'
            ).then(() => {
                setLoading(false);
                alert('Thank you. I will get back to you as soon as possible.');
                setform({
                    name: '',
                    email: '',
                    message: '',
                })
            }, (error) => {
            setLoading(false);
            console.log(error);
            alert('Something went wrong.');
        })
    }

    return (
        <div className='flex flex-col pt-[80px] pb-20 items-center' id='Contact'>
            <p className='text-white text-[48px]'>
                Contact Me
            </p>

            {/* contact form */}
            <div className='rounded-2xl justify-center items-center w-[50%] text-white bg-slate-700 px-4 py-3'>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='flex flex-col'
                >
                    <label className='flex flex-col mb-4'>
                        <p>Your Name</p>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder='What is your name?'
                            className='px-2 rounded-2xl bg-neutral-300 mt-1 text-neutral-950 placeholder:text-neutral-800'
                        />
                    </label>

                    <label className='flex flex-col mb-4'>
                        <p>Your Email</p>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder='What is your email?'
                            className='px-2 rounded-2xl bg-neutral-300 mt-1 text-neutral-950 placeholder:text-neutral-800'
                        />
                    </label>

                    <label className='flex flex-col mb-4'>
                        <p>Your Message</p>
                        <textarea
                            rows='7'
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What is your message?'
                            className='px-2 rounded-2xl bg-neutral-300 mt-1 text-neutral-950 placeholder:text-neutral-800'
                        />
                    </label>

                    <button
                        type='submit'
                        className='flex rounded-2xl bg-slate-950 px-5 py-2 w-min'
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact