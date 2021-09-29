import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAppDispatch, welcomeWizardSelector } from '../../app/hooks';
import { heightWeightChanged } from '../../features/welcomeWizardSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import IHeightWeight from '../../interface/IHeightWeight';
import { appModeChanged } from '../../features/appSlice';
import { AppMode } from '../../lib/app.const';

const validationSchema = yup.object({
  weight: yup
    .number()
    .required('The weight is required')
    .typeError('The value must be number'),
  height: yup
    .number()
    .required('The height is required')
    .typeError('The value must be number')
});

const defaultValues: Record<keyof IHeightWeight, string> = {
  height: '',
  weight: ''
};

const useSetHeightWeight = () => {
  const dispatch = useAppDispatch();
  const [initialValues, setInitialValues] = useState(defaultValues);
  const { height, weight, gender } = useSelector(welcomeWizardSelector);

  const form = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit(values) {
      const heightWeight: IHeightWeight = {
        height: +values.height,
        weight: +values.weight
      };
      dispatch(heightWeightChanged(heightWeight));
      dispatch(appModeChanged(AppMode.DASHBOARD));
    }
  });

  useEffect(() => {
    if (height && weight) {
      setInitialValues({
        height: String(height),
        weight: String(weight)
      });
    }
  }, [height, weight]);

  return { form, gender };
};

export default useSetHeightWeight;
