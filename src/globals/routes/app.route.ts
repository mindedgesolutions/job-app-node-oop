import candidateProfileRoute from '@/candidate/routes/candidate-profile.route';
import candidateEducationRoute from '@/features/candidate-profile/routes/candidate-education.route';
import candidateExperienceRoute from '@/features/candidate-profile/routes/candidate-experience.route';
import candidateLanguageRoute from '@/features/candidate-profile/routes/candidate-language.route';
import companyRoute from '@/company/routes/company.route';
import companyImageRoute from '@/features/company/routes/company-image.route';
import authRoute from '@/user/routes/auth.route';
import userRoute from '@/user/routes/user.route';
import { Application } from 'express';
import companyIndustryRoute from '@/features/company/routes/company-industry.route';
import jobRoleRoute from '@/features/job/routes/job-role.route';

function appRoutes(app: Application) {
  app.use('/api/v1/auth', authRoute);
  app.use('/api/v1/users', userRoute);
  app.use('/api/v1/candidate-profile', candidateProfileRoute);
  app.use('/api/v1/candidate-languages', candidateLanguageRoute);
  app.use('/api/v1/candidate-education', candidateEducationRoute);
  app.use('/api/v1/candidate-experience', candidateExperienceRoute);
  app.use('/api/v1/companies', companyRoute);
  app.use('/api/v1/company-images', companyImageRoute);
  app.use('/api/v1/company-industries', companyIndustryRoute);
  app.use('/api/v1/job-roles', jobRoleRoute);
}
export default appRoutes;
