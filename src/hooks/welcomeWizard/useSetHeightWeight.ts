import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  authSelector,
  useAppDispatch,
  welcomeWizardSelector
} from '../../app/hooks';
import { heightWeightChanged } from '../../features/welcomeWizardSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import IHeightWeight from '../../interface/IHeightWeight';
import { useLazyProfileAccountQuery } from '../../features/apiSlice';

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
  const [trigger] = useLazyProfileAccountQuery();
  const [initialValues, setInitialValues] = useState(defaultValues);
  const { oauth2, csrf } = useSelector(authSelector);
  const {
    height,
    weight,
    gender,
    ageRange
  } = useSelector(welcomeWizardSelector);

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
      trigger({
        csrf: csrf!,
        body: {
          ...heightWeight,
          gender: gender!,
          age_range: ageRange!,
          access_token: oauth2?.access_token!
        }
      });

      // dispatch(appModeChanged(AppMode.DASHBOARD));
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
