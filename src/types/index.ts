export type PilotSubmission = {
  id: string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
  submissionDateTime: string;
};

export type PilotFormFields = Omit<PilotSubmission, 'id' | 'submissionDateTime'>;

export type NavItem = {
  label: string;
  href: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};
