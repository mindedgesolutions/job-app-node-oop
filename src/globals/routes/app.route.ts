import candidateProfileRoute from '@/candidate/routes/candidate-profile.route';
import candidateLanguageRoute from '@/features/candidate-profile/routes/candidate-language.route';
import authRoute from '@/user/routes/auth.route';
import userRoute from '@/user/routes/user.route';
import { Application } from 'express';

function appRoutes(app: Application) {
  app.use('/api/v1/auth', authRoute);
  app.use('/api/v1/users', userRoute);
  app.use('/api/v1/candidate-profile', candidateProfileRoute);
  app.use('/api/v1/candidate-languages', candidateLanguageRoute);
}
export default appRoutes;
