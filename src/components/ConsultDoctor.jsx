import React from 'react';

// --- Page Components ---

const ConsultDoctorPage = () => {
    const doctors = [
        { name: 'Dr. Priya Sharma', spec: 'Ayurvedic Physicians (BAMS)', tel: '8999856672', clinic: '123 Health Clinic, Chennai' },
        { name: 'Dr. Aanchal Pathak', spec: 'Endocrinologist', tel: '9090221178', clinic: 'Ruby Hall Clinic, Pune' },
        { name: 'Dr. Kapil Salunkhe', spec: 'Ayurvedic Dietitians & Nutritionist', tel: '9875413126', clinic: 'Ayur Wellness, Mumbai' },
        { name: 'Dr. Renuka Jain', spec: 'Gastroenterologist', tel: '9753132468', clinic: 'City Hospital, Delhi' },
        { name: 'Dr. Aisha Iyer', spec: 'Ayurvedic Dietitians & Nutritionist', tel: '9898221087', clinic: 'Sunrise Hospital, Kochi' },
        { name: 'Dr. Anand Singh', spec: 'Ayurvedic Physicians (BAMS)', tel: '7728150100', clinic: 'TheCare, Bangalore' },
        { name: 'Dr. Vivek Rao', spec: 'Endocrinologists', tel: '9957257801', clinic: 'HolisticCare, Hyderabad' },
    ];

    const dietitians = [
        { name: 'Dr. Anjali Deshmukh', tel: '7728150100', clinic: 'NutriVeda Wellness Clinic, Mumbai' },
        { name: 'Dr. Raghav Kulkarni', tel: '9753132468', clinic: 'Prakriti Diet & Nutrition Studio, Chennai' },
        { name: 'Dr. Meera Nair', tel: '9090221178', clinic: 'Ojas Nutrition & Lifestyle Center, Delhi' },
        { name: 'Dr. Karan Sharma', tel: '9957257801', clinic: 'Ayushakti Diet & Health Hub, Pune' },
        { name: 'Dr. Priya Iyer', tel: '8999856672', clinic: 'AaharVeda Nutrition Clinic, Kochi' },
        { name: 'Dr. Vivek Patil', tel: '9898221087', clinic: 'Sattva Diet & Wellness Care, Hyderabad' },
        { name: 'Dr. Neha Bhandari', tel: '9875413126', clinic: 'Arogya Nutrition & Healing Clinic, Bangalore' },
    ];

    return (
        <div className="w-full max-w-6xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-md border border-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#0a2342]">Consult a Professional</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Doctors Table */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Doctors</h2>
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                            <thead className="bg-blue-50">
                                <tr>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">Doctor Name</th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">Specialization</th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">Tel. No</th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">Clinic</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {doctors.map((doc, index) => (
                                    <tr key={index} className="hover:bg-blue-50/50">
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{doc.name}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{doc.spec}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{doc.tel}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{doc.clinic}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                {/* Dietitians Table */}
                <div>
                     <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dietitians & Nutritionists</h2>
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                             <thead className="bg-blue-50">
                                <tr>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">Name</th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">Tel no</th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">Clinic</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {dietitians.map((diet, index) => (
                                    <tr key={index} className="hover:bg-blue-50/50">
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{diet.name}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{diet.tel}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{diet.clinic}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- Main App Component ---

const Consulting = () => {
    return (
        <main className="bg-[#f0fcfc] min-h-screen flex items-center justify-center p-4 font-sans">
            <ConsultDoctorPage />
        </main>
    );
};

export default Consulting;