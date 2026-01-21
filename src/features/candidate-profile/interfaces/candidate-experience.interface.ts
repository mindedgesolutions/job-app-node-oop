export type CandidateExperienceDTO = {
  company: string;
  department: string;
  responsibilities: string;
  startDate: Date;
  endDate: Date | null;
  currentlyWorking: boolean;
};
