import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: '₹4,000',
    description: 'Perfect for personal portfolios and landing pages.',
    features: [
      '4 Pages',
      'Responsive Design',
      'Contact Form',
      'Basic SEO',
      '1 Week Support'
    ],
    popular: false,
  },
  {
    name: 'Business',
    price: '₹12,000',
    description: 'Ideal for small businesses ready to scale.',
    features: [
      '5 Pages',
      'Modern Animations',
      'CMS Integration',
      'Social Media Integration',
      '1 Month Support'
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '₹20,000',
    description: 'Advanced features for high-growth companies.',
    features: [
      '6 Pages',
      'E-commerce Ready',
      'Custom Interactive Elements',
      'Advanced SEO & Analytics',
      '3 Months Support'
    ],
    popular: false,
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-400">Simple, predictable pricing for premium digital infrastructure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-8 rounded-2xl bg-black border ${
                plan.popular 
                  ? 'border-sea-green shadow-[0_0_30px_rgba(46,132,94,0.15)] transform md:-translate-y-4' 
                  : 'border-gray-800'
              } transition-all duration-300 hover:border-gray-600`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-sea-green text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm h-10">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-500">/project</span>
                </div>
              </div>

              <ul className="mb-8 flex-1 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <svg className="h-6 w-6 text-sea-green mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`w-full py-4 rounded-md font-medium text-center transition-all duration-300 ${
                  plan.popular
                    ? 'bg-sea-green text-white hover:bg-[#236b4a] hover:shadow-[0_0_15px_rgba(46,132,94,0.4)]'
                    : 'bg-transparent border border-gray-700 text-white hover:border-white'
                }`}
              >
                Select Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
