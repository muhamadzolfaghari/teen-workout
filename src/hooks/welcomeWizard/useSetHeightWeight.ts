import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAppDispatch } from '../../app/hooks';
import { heightWeightChanged } from '../../features/welcomeWizardSlice';
import IHeightWeight from '../../interfaces/IHeightWeight';

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
  const dispatch = useAppDispatch();
  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values) {
      const heightWeight: IHeightWeight = {
        height: +values.height,
        weight: +values.weight,
      };
      dispatch(heightWeightChanged(heightWeight));
    },
  });

  return { form };
};

export default useSetHeightWeight;
