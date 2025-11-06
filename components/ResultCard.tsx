import React from 'react';
import { RECOMMENDATIONS } from '../constants';
import type { Recommendation } from '../types';

interface ResultCardProps {
  score: number;
}

const getRecommendation = (score: number): Recommendation => {
  if (score >= 6) { // 6-7 "Yes"
    return RECOMMENDATIONS['strong'];
  }
  if (score >= 3) { // 3-5 "Yes"
    return RECOMMENDATIONS['hybrid'];
  }
  return RECOMMENDATIONS['traditional']; // 0-2 "Yes"
};

const ResultCard: React.FC<ResultCardProps> = ({ score }) => {
  const recommendation = getRecommendation(score);

  return (
    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg text-center animate-fade-in">
      <h2 className="text-sm font-semibold text-aia-blue uppercase tracking-wider mb-2">Your Result</h2>
      
      <div className={`text-3xl md:text-4xl font-bold mb-4 ${recommendation.color}`}>{recommendation.title}</div>
      <p className="text-lg text-gray-700 max-w-xl mx-auto mb-10">{recommendation.description}</p>
      
      <div className="bg-aia-blue/5 border border-aia-blue/20 rounded-lg p-6">
        <h3 className="text-2xl font-bold text-aia-blue mb-4">Ready to Explore a School Built for Flexibility?</h3>
        <p className="text-gray-600 mb-6">
          <a href="https://www.americaninfiniteacademy.school/" target="_blank" rel="noopener noreferrer" className="font-bold text-aia-blue hover:underline">
            American Infinite Academy
          </a> is an online school designed to fit your family's life. Discover how our ability-based classes, unique career electives, and flexible scheduling can create a learning environment where your child thrives. We offer full-time programs and part-time options—perfect for supplementing a traditional education or enriching a homeschool curriculum. See how families like yours use state scholarships to make private online education affordable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://zoom.us/rec/play/C1MD2KnNYw4AlMmqfnumxEJFMZH11JlMUHe-ju5olhOls_tabF7QI6iVwqn0dapA-MBpkiZiOAdXf7G7.TDUs9NvqTqUlNB2d?eagerLoadZvaPages=sidemenu.billing.plan_management&isReferralProgramEnabled=false&isReferralProgramAvailable=false&accessLevel=meeting&canPlayFromShare=true&from=my_recording&startTime=1761181336000&componentName=rec-play&originRequestUrl=https://zoom.us/rec/share/rp4wwRlZ2R1Gw8qEobvqgRvnCQO79ORuUcpMi0Q4Jl01l-FKLNSmoRD8ER8sC1bv.2Yy6MduNwEN6YfjX?startTime%3D1761181336000%2520" target="_blank" rel="noopener noreferrer" className="bg-aia-gold text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center gap-2">
                🎥 Watch Free Webinar
            </a>
            <a href="https://assets.crimsoneducation.org/american-infinite-academy-prospectus/full-view.html" target="_blank" rel="noopener noreferrer" className="bg-white text-aia-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 border-2 border-aia-blue flex items-center justify-center gap-2">
                📄 Download Info Pack
            </a>
        </div>
         <p className="text-sm text-gray-500 mt-6">
          Enrollment opens March 1 for August 2026 — families can pre-register now.
        </p>
      </div>
    </div>
  );
};

export default ResultCard;