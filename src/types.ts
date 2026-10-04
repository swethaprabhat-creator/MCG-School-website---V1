export type NavigationTab = 
  | 'home' 
  | 'about-us' 
  | 'academics' 
  | 'admissions' 
  | 'campus-facilities' 
  | 'student-life' 
  | 'ai-counselor' 
  | 'contact'
  | 'apply-now'
  | 'portal-login';

export interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  time: string;
  senderName: string;
  text?: string;
  type?: 'text' | 'age-criteria' | 'robotics-tour' | 'tuition-card' | 'custom-card';
  cardData?: any;
}

export interface TourSlot {
  id: string;
  date: string;
  time: string;
  available: boolean;
}

export interface CandidateRegistration {
  parentName: string;
  mobile: string;
  email: string;
  studentName: string;
  dob: string;
  currentClass: string;
  targetGrade: string;
  curriculum: 'cbse' | 'cambridge';
  tourSlot: 'morning' | 'afternoon';
  talents: string;
  agreed: boolean;
}
