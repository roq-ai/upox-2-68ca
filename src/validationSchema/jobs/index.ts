import * as yup from 'yup';

export const jobValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  requirements: yup.string().nullable(),
  salary_range: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
});
