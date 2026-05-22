import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-[#f5f5f4]">
      <div className="max-w-[800px] mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 border border-black/5 shadow-sm">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Shield size={24} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight">Privacy Policy</h1>
            <p className="text-sm text-gray-400 mt-1">Last updated: May 2026</p>
          </div>
        </div>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 text-sm md:text-base leading-relaxed">
          <p>
            At <strong>Bhavna Institute</strong>, accessible from Pooth Khas, Meerut, one of our main priorities is the privacy of our students and visitors. This Privacy Policy document contains types of information that is collected and recorded by Bhavna Institute and how we use it.
          </p>

          <h2 className="text-xl font-bold text-[#0a0a0a] pt-4 border-t border-black/5">1. Information We Collect</h2>
          <p>
            We may collect personal identification information from students and visitors in a variety of ways, including, but not limited to, when users visit our site, register for a course, fill out a form, and in connection with other activities, services, features or resources we make available on our Site.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Contact Data:</strong> Name, email address, phone number, and physical address.</li>
            <li><strong>Academic Data:</strong> Educational background, course preferences, and enrollment details.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage statistics.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0a0a0a] pt-4 border-t border-black/5">2. How We Use Your Information</h2>
          <p>
            Bhavna Institute may collect and use students' personal information for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To personalize user experience and deliver course materials.</li>
            <li>To process admissions and maintain academic records.</li>
            <li>To send periodic emails and messages regarding course schedules, updates, and placement opportunities.</li>
            <li>To improve our website functionality and customer service.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0a0a0a] pt-4 border-t border-black/5">3. Data Protection and Security</h2>
          <p>
            We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.
          </p>

          <h2 className="text-xl font-bold text-[#0a0a0a] pt-4 border-t border-black/5">4. Sharing Your Personal Information</h2>
          <p>
            We do not sell, trade, or rent users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our trusted business partners, affiliate organizations, and recruiters for placement purposes.
          </p>

          <h2 className="text-xl font-bold text-[#0a0a0a] pt-4 border-t border-black/5">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this website, please contact us at:
          </p>
          <div className="bg-gray-50 rounded-2xl p-6 border border-black/5 mt-4">
            <p className="font-semibold text-[#0a0a0a] mb-1">Bhavna Institute</p>
            <p className="text-sm">Pooth Khas, Rohta Road, Meerut, Uttar Pradesh</p>
            <p className="text-sm mt-2"><strong>Phone:</strong> +91 97192 05268</p>
            <p className="text-sm"><strong>Email:</strong> bhavnainstitue@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
