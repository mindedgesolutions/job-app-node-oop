import candidateProfileRoute from '@/candidate/routes/candidate-profile.route';
import candidateEducationRoute from '@/features/candidate-profile/routes/candidate-education.route';
import candidateExperienceRoute from '@/features/candidate-profile/routes/candidate-experience.route';
import candidateLanguageRoute from '@/features/candidate-profile/routes/candidate-language.route';
import companyRoute from '@/company/routes/company.route';
import authRoute from '@/user/routes/auth.route';
import userRoute from '@/user/routes/user.route';
import { Application } from 'express';

function appRoutes(app: Application) {
  app.use('/api/v1/auth', authRoute);
  app.use('/api/v1/users', userRoute);
  app.use('/api/v1/candidate-profile', candidateProfileRoute);
  app.use('/api/v1/candidate-languages', candidateLanguageRoute);
  app.use('/api/v1/candidate-education', candidateEducationRoute);
  app.use('/api/v1/candidate-experience', candidateExperienceRoute);
  app.use('/api/v1/companies', companyRoute);
}
export default appRoutes;
