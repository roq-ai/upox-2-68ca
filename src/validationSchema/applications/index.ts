import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  application_date: yup.date().nullable(),
  status: yup.string().nullable(),
  cover_letter: yup.string().nullable(),
  resume_url: yup.string().nullable(),
  job_id: yup.string().nullable().required(),
  freelancer_id: yup.string().nullable().required(),
});
