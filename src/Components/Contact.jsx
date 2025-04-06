
import React from 'react';

export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);
        formData.append("access_key", "20c90420-0729-4c79-a641-1dd0e50ece85");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully ✅");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult("Something went wrong ❌");
        }
    };

    return (
        <div id="contact" className="min-h-screen flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-6xl p-8 rounded-2xl shadow-xl bg-transparent">
                
                {/* Centered Heading */}
                <h2 className="text-3xl font-bold text-center mb-10 text-white">Contact Me</h2>

                {/* Flex Section: Image + Form */}
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    
                    {/* Left - Image Section */}
                    <div className="flex-1">
                        <img 
                            src="/images/Email.jpg" 
                            alt="Contact" 
                            className="w-full h-auto max-w-sm mx-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Right - Form Section */}
                    <div className="flex-1 w-full max-w-md">
                        <form onSubmit={onSubmit} className="space-y-5">
                            <div>
                                <label className="block text-white mb-1">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    required 
                                    className="w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-white mb-1">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    required 
                                    className="w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-white mb-1">Message</label>
                                <textarea 
                                    name="message" 
                                    required 
                                    rows="5"
                                    className="w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white"
                                ></textarea>
                            </div>
                            <div>
                                <button 
                                    type="submit" 
                                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Submit Form
                                </button>
                            </div>
                        </form>

                        {/* Result message */}
                        <div className="mt-4 text-center">
                            <span className="text-green-400">{result}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
