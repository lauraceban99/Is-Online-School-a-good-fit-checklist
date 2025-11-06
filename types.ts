import React from 'react';

export interface Question {
  id: number;
  text: string;
}

export interface Recommendation {
  level: 'strong' | 'hybrid' | 'traditional';
  title: string;
  description: string;
  color: string;
}