import type { Question, Recommendation } from './types';

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Does your child have a packed schedule with sports, arts, or travel that requires flexible school hours?",
  },
  {
    id: 2,
    text: "Is your child a self-motivated learner who enjoys exploring topics on their own?",
  },
  {
    id: 3,
    text: "Does your child focus better in a calm, quiet space, away from the distractions of a typical classroom?",
  },
  {
    id: 4,
    text: "Is your child interested in taking fun or career-focused electives, like Coding, Space Exploration, or Entrepreneurship, that their local school doesn’t offer?",
  },
  {
    id: 5,
    text: "Do you feel your child's learning pace is either too fast or too slow for their current school?",
  },
  {
    id: 6,
    text: "Are you concerned about social pressures or the learning environment at your child's current school?",
  },
  {
    id: 7,
    text: "Is having a clear, direct view of your child's daily learning and progress important to you?",
  },
];

export const RECOMMENDATIONS: { [key: string]: Recommendation } = {
  strong: {
    level: 'strong',
    title: 'Strong Fit for Online Learning',
    description: "Your answers suggest your child is ready for a learning path that moves with them, offering an enriched curriculum and personalized pacing to help them achieve their goals.",
    color: 'text-green-600',
  },
  hybrid: {
    level: 'hybrid',
    title: 'Could Thrive in a Hybrid Model',
    description: "It looks like a flexible learning model could be a great fit. You can help them explore their passions by supplementing their education with individual advanced or career-focused electives.",
    color: 'text-aia-gold',
  },
  traditional: {
    level: 'traditional',
    title: 'Better Suited to Traditional Schooling',
    description: "It seems that a traditional school environment might be the best fit right now, providing the in-person structure where your child can thrive. If you're still curious about how a flexible online course could complement their learning, there are great options to explore.",
    color: 'text-gray-700',
  },
};