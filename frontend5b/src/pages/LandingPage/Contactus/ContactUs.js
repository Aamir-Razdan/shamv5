import {React,useState} from 'react'
import './ContactUs.css'
// import aboutusimg from '../Assets/aboutusimg1.png';
const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can implement the functionality to send the email
        console.log(formData); // For now, just log the form data
      };
  return (
    
    <div className="container mx-auto">
    {/* <!-- First Row --> */}
    <div className="flex flex-col lg:flex-row mt-8 px-14">
        {/* <!-- First Column --> */}
        <div className="w-full lg:w-1/2 p-4 justify-end flex items-center">
            {/* <div className="flex items-center justify-center"> */}
            <div className="">
                <h1 className="text-3xl font-bold">Get in Touch</h1>
                <p className='w-1/2 text-gray-500 mt-4 '>feel free to reach out us for inquiries,collaboration opportunities,or to share your own sunset and moon experineces,We'd love to hear from you</p>
            </div>
        </div>
        {/* <!-- Second Column --> */}
        <div className="w-full lg:w-1/2 p-1">
            <div className="w-full flex items-center justify-center">
                {/* <div className="w-full max-w-md mx-auto mt-8 p-3 border rounded-lg shadow-lg"> */}
                <div className="w-full max-w-md mx-auto mt-8 p-3 ">
                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="mt-1 p-2 border border-gray-300 rounded-md w-full h-32 resize-none"
                          required
                        ></textarea>
                      </div>
                      <div className="text-right">
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
   


    {/* <!-- Second Row --> */}
    <div className="bg-white flex flex-col lg:flex-row mt-8 px-14 ">
        {/* <!-- First Column --> */}
        <div className="w-full lg:w-1/3 p-4">
        <h1 className="text-lg font-semibold mb-2">Contact Info</h1>
        <div className="text-left">
            <p className="mb-1">Shamaim Lifestyle</p>
            <p className="mb-1">123 Celestial Avenue</p>
            <p className="mb-1">Starlight City</p>
            <p className="mb-1">Phone: +91 9800234509</p>
            <p>Email: shamaim@gmail.com</p>
        </div>
        </div>
        {/* <!-- Second Column --> */}
        <div className="w-full lg:w-1/3 p-4">
            
            <h1 className="text-lg font-semibold mb-2">Stay in the Loop</h1>
            <div className="text-left s:text-center">
             <p className='w-1/2'>Subscribe to our newsletter for the latest update</p>
            </div>
        </div>
        {/* <!-- Third Column --> */}
        <div className="w-full lg:w-1/3 p-4">
            <div className=" flex items-center justify-center">
               <h1 className='text-3xl'>Shamaim Lifestyle</h1> 
            </div>
        </div>
    </div>
    </div>



    
    
  )
}

export default ContactUs
