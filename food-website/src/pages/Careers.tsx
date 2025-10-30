import React from 'react';

const Careers: React.FC = () => {
  const jobs = [
    {
      title: 'Senior React Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time',
    },
    {
      title: 'Customer Support Specialist',
      department: 'Support',
      location: 'Remote',
      type: 'Part-time',
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'San Francisco, CA',
      type: 'Full-time',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 pt-32">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">Join Our Team</h1>
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
          We're always looking for talented individuals to help us revolutionize food delivery.
        </p>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">{job.department}</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{job.location}</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">{job.type}</span>
                  </div>
                </div>
                <button className="px-6 py-3 bg-orange-500 text-white rounded-2xl hover:bg-orange-600 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;