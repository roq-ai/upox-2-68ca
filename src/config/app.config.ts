interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Admin', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Upox 2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage own profile', 'Apply for jobs', 'Update job application status', 'View job details'],
  ownerAbilities: [
    'Manage user data',
    'Manage company data',
    'Manage freelancer profiles',
    'Manage job postings',
    'Manage job applications',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/41a595d3-2be3-4be7-9a62-9c473620d7ce',
};
