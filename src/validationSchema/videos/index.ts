import * as yup from 'yup';

export const videoValidationSchema = yup.object().shape({
  title: yup.string().required(),
  url: yup.string().required(),
  description: yup.string(),
  organization_id: yup.string().nullable(),
});
