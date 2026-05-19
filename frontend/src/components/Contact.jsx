import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: ''
  });
  
  const [status, setStatus] = useState({ submitting: false, message: '', error: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, message: '', error: false });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ submitting: false, message: 'Message sent successfully. We will be in touch soon.', error: false });
        setFormData({ name: '', email: '', phone: '', projectDetails: '' });
      } else {
        setStatus({ submitting: false, message: data.error || 'Something went wrong.', error: true });
      }
    } catch {
      setStatus({ submitting: false, message: 'Failed to connect to the server.', error: true });
    }
  };

  return (
    <section id="contact" className="py-24 bg-black border-t border-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Start Your Project</h2>
          <p className="text-xl text-gray-400">Ready to build? Tell us about your vision.</p>
        </div>

        <div className="bg-[#0a0a0a] border border-gray-800 p-8 md:p-12 rounded-2xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:border-sea-green focus:ring-1 focus:ring-sea-green transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:border-sea-green focus:ring-1 focus:ring-sea-green transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone Number (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:border-sea-green focus:ring-1 focus:ring-sea-green transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-400 mb-2">Project Details</label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                required
                rows="4"
                value={formData.projectDetails}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:border-sea-green focus:ring-1 focus:ring-sea-green transition-colors resize-none"
                placeholder="Tell us about your goals, timeline, and budget..."
              ></textarea>
            </div>

            {status.message && (
              <div className={`p-4 rounded-md ${status.error ? 'bg-red-900/20 border border-red-800 text-red-200' : 'bg-sea-green/20 border border-sea-green text-sea-green'}`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={status.submitting}
              className="w-full py-4 bg-sea-green text-white rounded-md font-medium text-lg hover:bg-[#236b4a] hover:shadow-[0_0_20px_rgba(46,132,94,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status.submitting ? 'Submitting...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
