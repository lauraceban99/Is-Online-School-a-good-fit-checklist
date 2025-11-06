import React from 'react';

const ComparisonTable: React.FC = () => {
  const features = [
    { name: 'Schedule', online: 'Flexible – live or self-paced', traditional: 'Fixed daily hours' },
    { name: 'Class Size', online: '~20-25 students', traditional: '25–30+ students' },
    { name: 'Teachers', online: 'Certified U.S. teachers', traditional: 'On-site teachers' },
    { name: 'Subjects', online: 'Core + enriched electives & unlimited APs', traditional: 'Varies by school' },
    { name: 'Location', online: 'Learn from anywhere', traditional: 'Fixed campus' },
    { name: 'Cost', online: 'Often fully covered by ESAs', traditional: 'Tuition or public funding' },
  ];

  return (
    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-3xl font-bold text-center text-aia-blue mb-8">Online vs. Traditional at a Glance</h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-max text-left">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="p-4 text-lg font-bold text-gray-500">Feature</th>
              <th className="p-4 text-lg font-bold text-aia-blue bg-aia-blue/10 rounded-t-lg">Online School (AIA)</th>
              <th className="p-4 text-lg font-bold text-gray-600 bg-gray-50 rounded-t-lg">Traditional School</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={feature.name} className={`${index < features.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <td className="p-4 font-semibold text-gray-700">{feature.name}</td>
                <td className="p-4 text-aia-blue font-medium bg-aia-blue/10">{feature.online}</td>
                <td className="p-4 text-gray-600 bg-gray-50">{feature.traditional}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        <p className="text-center text-gray-500 mt-6 italic text-sm">
            Online schooling isn’t for everyone—but for busy, independent learners, it can be a game changer.
        </p>
    </div>
  );
};

export default ComparisonTable;