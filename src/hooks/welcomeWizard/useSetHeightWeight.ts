import { useFormik } from 'formik';
import * as yup from 'yup';

interface IHeightWeight {
  height: number;
  weight: number;
}

const validationSchema = yup.object({
  weight: yup
    .number()
    .required('The weight is required')
    .typeError('The value must be number'),
  height: yup
    .number()
    .required('The height is required')
    .typeError('The value must be number'),
});

const initialValues: Record<keyof IHeightWeight, string> = {
  height: '',
  weight: '',
};

const useSetHeightWeight = () => {
  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values) {
      console.log(values);
    },
  });

  return { form };
};

export default useSetHeightWeight;
