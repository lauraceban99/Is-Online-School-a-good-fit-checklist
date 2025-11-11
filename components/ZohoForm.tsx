import React, { useEffect, useRef } from 'react';

declare global {
    interface Window {
        $?: any;
        grecaptcha?: any;
    }
}

interface ZohoFormProps {
    onSuccess: () => void;
}

const ZohoForm: React.FC<ZohoFormProps> = ({ onSuccess }) => {
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        // Load reCAPTCHA script
        const recaptchaScript = document.createElement('script');
        recaptchaScript.src = 'https://www.google.com/recaptcha/api.js';
        recaptchaScript.async = true;
        recaptchaScript.defer = true;
        document.body.appendChild(recaptchaScript);

        // Load jQuery script
        const jqueryScript = document.createElement('script');
        jqueryScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js';
        document.body.appendChild(jqueryScript);

        // Define reCAPTCHA callback
        (window as any).rccallback86859000001948007 = function() {
            const recapElem = document.getElementById('recap86859000001948007');
            if (recapElem) {
                recapElem.setAttribute('captcha-verified', 'true');
            }
            const recapErr = document.getElementById('recapErr86859000001948007');
            if (recapErr && recapErr.style.visibility === 'visible') {
                recapErr.style.visibility = 'hidden';
            }
        };

        const intervalId = setInterval(() => {
            if (window.$ && formRef.current) {
                clearInterval(intervalId);

                window.$('#webform86859000001948007').submit(function(e: any) {
                    e.preventDefault();
                    
                    const form = formRef.current;
                    if (!form) return;
                    
                    const firstName = (form.elements.namedItem('First Name') as HTMLInputElement)?.value;
                    const lastName = (form.elements.namedItem('Last Name') as HTMLInputElement)?.value;
                    const email = (form.elements.namedItem('Email') as HTMLInputElement)?.value;
                    const phone = (form.elements.namedItem('Phone') as HTMLInputElement)?.value;
                    const gradeLevel = (form.elements.namedItem('LEADCF2') as HTMLSelectElement)?.value;

                    if (!firstName || !lastName || !email || !phone || !gradeLevel) {
                        alert('Please fill out all required fields.');
                        return;
                    }

                    // Validate reCAPTCHA
                    const recap = document.getElementById('recap86859000001948007');
                    if (recap && recap.getAttribute('captcha-verified') !== 'true') {
                        const recapErr = document.getElementById('recapErr86859000001948007');
                        if (recapErr) {
                            recapErr.style.visibility = 'visible';
                        }
                        return;
                    }

                    window.$(this).find('input[type=submit]').attr('disabled', 'true');

                    var formData = new FormData(this);
                    window.$.ajax({
                        url: 'https://crm.zoho.com.au/crm/WebToLeadForm',
                        type: 'POST',
                        data: formData,
                        cache: false,
                        contentType: false,
                        processData: false,
                        success: function(data: any) {
                            // On successful submission to Zoho, call the onSuccess prop
                            onSuccess();
                        },
                        error: function(data: any) {
                            alert('An error occurred. Please try again.');
                            window.$(this).find('input[type=submit]').removeAttr('disabled');
                        }
                    });
                });
            }
        }, 100);

        return () => {
            clearInterval(intervalId);
            if (document.body.contains(jqueryScript)) {
                document.body.removeChild(jqueryScript);
            }
            if (document.body.contains(recaptchaScript)) {
                document.body.removeChild(recaptchaScript);
            }
            delete (window as any).rccallback86859000001948007;
        };
    }, [onSuccess]);

    return (
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg max-w-2xl mx-auto w-full animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-aia-blue text-center mb-2">See Your Personalized Result!</h2>
            <p className="text-center text-gray-600 mb-8">Just one last step. Enter your details below to unlock your quiz result and get more information.</p>
            
            <form ref={formRef} id='webform86859000001948007' name='WebToLeads86859000001948007' acceptCharset='UTF-8'>
                <input type='text' style={{ display: 'none' }} name='xnQsjsdp' defaultValue='6d86878f71d2f43ca4c63e4ba9847b793935ce431b3ea94626fc38c9db40409b' />
                <input type='hidden' name='zc_gad' id='zc_gad' defaultValue='' />
                <input type='text' style={{ display: 'none' }} name='xmIwtLD' defaultValue='e5f0311efa96c5338827e1a0139cd82265283b003940bd45869b36735a728ef374acd75b328a98f229b25679c15faacf' />
                <input type='text' style={{ display: 'none' }} name='actionType' defaultValue='TGVhZHM=' />
                <input type='text' style={{ display: 'none' }} name='returnURL' defaultValue='null' />
                <input type='text' style={{ display: 'none' }} name='aG9uZXlwb3Q' defaultValue='' />
                
                <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor='First_Name' className="block text-sm font-medium text-gray-700 mb-1">First Name <span className='text-red-500'>*</span></label>
                            <input type='text' id='First_Name' name='First Name' maxLength={40} className="w-full bg-white px-4 py-2 border border-gray-200 rounded-lg focus:ring-aia-gold focus:border-aia-gold" />
                        </div>
                        <div>
                            <label htmlFor='Last_Name' className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className='text-red-500'>*</span></label>
                            <input type='text' id='Last_Name' name='Last Name' maxLength={80} className="w-full bg-white px-4 py-2 border border-gray-200 rounded-lg focus:ring-aia-gold focus:border-aia-gold" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='Email' className="block text-sm font-medium text-gray-700 mb-1">Email <span className='text-red-500'>*</span></label>
                        <input type='text' id='Email' name='Email' maxLength={100} className="w-full bg-white px-4 py-2 border border-gray-200 rounded-lg focus:ring-aia-gold focus:border-aia-gold" />
                    </div>
                     <div>
                        <label htmlFor='Phone' className="block text-sm font-medium text-gray-700 mb-1">Phone <span className='text-red-500'>*</span></label>
                        <input type='text' id='Phone' name='Phone' maxLength={30} className="w-full bg-white px-4 py-2 border border-gray-200 rounded-lg focus:ring-aia-gold focus:border-aia-gold" />
                    </div>
                    <div>
                        <label htmlFor='LEADCF2' className="block text-sm font-medium text-gray-700 mb-1">Child's Grade Level <span className='text-red-500'>*</span></label>
                        <select id='LEADCF2' name='LEADCF2' className="w-full bg-white px-4 py-2 border border-gray-200 rounded-lg focus:ring-aia-gold focus:border-aia-gold" defaultValue="">
                            <option value="" disabled>Select a grade</option>
                            <option value="Grade 9">Grade 9</option>
                            <option value="Grade 10">Grade 10</option>
                            <option value="Grade 11">Grade 11</option>
                            <option value="Grade 12">Grade 12</option>
                        </select>
                    </div>
                    
                    <div className='hidden'>
                         <select id='Lead_Source' name='Lead Source' defaultValue='Website - Online School Quiz'>
                            <option value='Website - Online School Quiz'>Website - Online School Quiz</option>
                        </select>
                        <select id='Lead_Status' name='Lead Status' defaultValue='Not Contacted'>
                            <option value='Not Contacted'>Not Contacted</option>
                        </select>
                    </div>

                    <div>
                        <div
                            className='g-recaptcha'
                            data-sitekey='6LexBOgqAAAAAOwnoOCpXV9Y6Cd5k-T11h2gxg4s'
                            data-theme='light'
                            data-callback='rccallback86859000001948007'
                            id='recap86859000001948007'
                            data-captcha-verified='false'
                        ></div>
                        <div id='recapErr86859000001948007' style={{ fontSize: '12px', color: 'red', visibility: 'hidden' }}>
                            Captcha validation failed. If you are not a robot then please try again.
                        </div>
                    </div>

                    <div>
                        <input type='submit' id='formsubmit' className='w-full bg-aia-gold text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-md cursor-pointer' value='See My Result' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ZohoForm;