import * as yup from 'yup';

export const freelancerProfileValidationSchema = yup.object().shape({
  skills: yup.string().nullable(),
  experience: yup.number().integer().nullable(),
  hourly_rate: yup.number().integer().nullable(),
  availability: yup.date().nullable(),
  portfolio_url: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
