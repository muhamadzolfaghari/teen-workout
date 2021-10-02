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
import { accountChanged, oauth2Changed } from '../../features/authSlice';
import IAccount from '../../interface/IAccount';
import {
  ACCOUNT_STORAGE_KEY,
  OAUTH2_STORAGE_KEY
} from '../../lib/account.const';

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
  const [trigger, data] = useLazyProfileAccountQuery();
  const [initialValues, setInitialValues] = useState(defaultValues);
  const { oauth2, csrf, account } = useSelector(authSelector);
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
          account_id: account?.id!,
          access_token: oauth2?.access_token!
        }
      });
    }
  });

  useEffect(() => {
    if (data.status === 'fulfilled') {
      const updatedAccount = { ...account, is_completed: true } as IAccount;
      dispatch(accountChanged(updatedAccount));
      localStorage.setItem(ACCOUNT_STORAGE_KEY, JSON.stringify(updatedAccount));
    } else if (data.status === 'rejected') {
      dispatch(oauth2Changed());
      dispatch(accountChanged());
      localStorage.setItem(OAUTH2_STORAGE_KEY, '');
      localStorage.setItem(ACCOUNT_STORAGE_KEY, '');
    }
  }, [account, data, dispatch]);

  useEffect(() => {
    if (height && weight) {
      setInitialValues({
        height: String(height),
        weight: String(weight)
      });
    }
  }, [height, weight]);

  return { form, gender, isFetching: data.isFetching };
};

export default useSetHeightWeight;
