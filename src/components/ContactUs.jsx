import React from 'react';

// --- SVG Icons ---
// Using inline SVG components to keep everything in one file.

const GooglePlayIcon = () => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mr-4">
    <path d="M344.2 250.3l-149.6-149.6c-6.2-6.2-16.4-6.2-22.6 0l-22.6 22.6c-6.2 6.2-6.2 16.4 0 22.6l105.4 105.4-105.4 105.4c-6.2 6.2-6.2 16.4 0 22.6l22.6 22.6c6.2 6.2 16.4 6.2 22.6 0l149.6-149.6c6.3-6.2 6.3-16.4 0-22.6z" fill="#00E676"/>
    <path d="M490.4 233.2L344.2 87.1c-6.2-6.2-16.4-6.2-22.6 0l-22.6 22.6c-6.2 6.2-6.2 16.4 0 22.6l105.4 105.4-105.4 105.4c-6.2 6.2-6.2 16.4 0 22.6l22.6 22.6c6.2 6.2 16.4 6.2 22.6 0l146.2-146.2c6.3-6.2 6.3-16.4-.1-22.6z" fill="#00C4FF"/>
    <path d="M21.6 490.4L167.8 344.2c6.2-6.2 6.2-16.4 0-22.6L62.4 216.2c-6.2-6.2-16.4-6.2-22.6 0L17.2 238.8c-6.2 6.2-6.2 16.4 0 22.6l105.4 105.4-105.4 105.4c-6.2 6.2-6.2 16.4 0 22.6l22.6 22.6c6.2 6.2 16.4 6.2 22.6 0z" fill="#FFC100"/>
    <path d="M321.6 21.6L175.4 167.8c-6.2 6.2-6.2 16.4 0 22.6l105.4 105.4c6.2 6.2 16.4 6.2 22.6 0l22.6-22.6c6.2-6.2 6.2-16.4 0-22.6L242.6 167.8l105.4-105.4c6.2-6.2 6.2-16.4 0-22.6l-22.6-22.6c-6.2-6.2-16.4-6.2-22.6 0z" fill="#FF3D00"/>
  </svg>
);


const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.196h3.312z"></path>
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.35 0 11.37-6.08 11.37-11.37 0-.17 0-.34-.01-.51.78-.56 1.45-1.26 1.98-2.03z"></path>
    </svg>
);

const WhatsAppIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.38 0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.24-8.24 8.24zm4.52-6.13c-.25-.12-1.47-.72-1.7-.81-.23-.09-.39-.12-.56.12-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.25-.75-.66-1.25-1.48-1.4-1.73-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.09-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.88 2.4 1 2.56.12.17 1.75 2.67 4.23 3.74 2.48 1.08 2.48.72 2.92.69.44-.03 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.05-.12-.2-.19-.44-.31z"></path>
    </svg>
);

const ContactUs = () => {
    // Data for social icons to map over
    const socialIcons = [
        { icon: <FacebookIcon />, key: 'fb', link: '#' },
        { icon: <InstagramIcon />, key: 'ig', link: '#' },
        { icon: <TwitterIcon />, key: 'tw', link: '#' },
        { icon: <WhatsAppIcon />, key: 'wa', link: '#' },
    ];

    // Data for the two contact columns
    const contactDetails = [
        {
            name: "Team Robo Sapiens",
            address: "Pimpri-Chinchwad, Pune",
            tel: "+91 99705 49885",
            web: "www.annapurnaveda.org.in",
            email: "sih25winner@gmail.com",
            lines: [
                { label: "Mobile:", value: "+91 84462 57853" },
            ]
        },
        {
            name: "Sivananda Yoga Vedanta Meenakshi Ashram",
            address: "near Pavanna Vilakku Junction, New Natham Road, Saramthangi village, Vellayampatti PO., Madurai, 62550",
            tel: "+91. 98 65 65 53 36",
            web: "www.sivananda.org.in/madurai",
            email: "sihmadurai@sivananda.org.in",
            lines: [
                // This is now handled by mobileInfo for a more accurate structure
            ],
            mobileInfo: {
                heading: "Mobile:",
                details: [
                    { label: "Reception :", value: "+91. 98 65 65 53 36" },
                    { label: "SIH Doctor:", value: "+91 9747835091" }
                ]
            }
        }
    ];

  return (
    // Main container to center the card on the page
    <div className="bg-gray-100 min-h-screen flex items-center justify-center font-sans p-4">
      {/* The card itself with background color, padding, shadow, and rounded corners */}
      <div className="bg-[#f0fafa] rounded-2xl shadow-lg p-6 md:p-10 max-w-4xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">Contact us</h1>

        {/* Top section with Google Play and social icons, responsive layout */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-8">
            <div className="flex items-center">
                <GooglePlayIcon />
                <p className="text-3xl font-semibold text-gray-700">Team RoboSapiens</p>
            </div>
            <div className="flex items-center space-x-3">
                {socialIcons.map(social => (
                     <a href={social.link} key={social.key} className="bg-gray-800 hover:bg-gray-700 rounded-full p-3 transition-colors duration-300">
                       {social.icon}
                    </a>
                ))}
            </div>
        </div>
        
        {/* Contact details section, responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-gray-600 text-[15px] leading-relaxed">
            {contactDetails.map((details, index) => (
                <div key={index}>
                    <p className="font-bold text-base mb-3 text-gray-800">{details.name}</p>
                    <p className="mb-4">{details.address}</p>
                    <div className="space-y-1">
                      <p><span className="font-semibold text-gray-700">T:</span> {details.tel}</p>
                      <p><span className="font-semibold text-gray-700">W:</span> {details.web}</p>
                      <p className="mb-4"><span className="font-semibold text-gray-700">E:</span> {details.email}</p>
                    </div>
                    {/* Render flat list for contact info (used by first column) */}
                    {details.lines && details.lines.length > 0 && (
                        <div className="space-y-1 mt-3">
                            {details.lines.map((line, lineIndex) => (
                                <p key={lineIndex}><span className="font-semibold text-gray-700">{line.label}</span> {line.value}</p>
                            ))}
                        </div>
                    )}
                    {/* Render nested list for contact info (used by second column) */}
                    {details.mobileInfo && (
                        <div className="space-y-1 mt-3">
                            <p><span className="font-semibold text-gray-700">{details.mobileInfo.heading}</span></p>
                            <div className="pl-5 space-y-1">
                                {details.mobileInfo.details.map((info, infoIndex) => (
                                    <p key={infoIndex}><span className="font-semibold text-gray-700">{info.label}</span> {info.value}</p>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;