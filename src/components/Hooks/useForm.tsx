import React, { useEffect } from 'react';

interface InitState {
  name: string;
  price: number;
  description: string;
  image: string;
  email?: string;
  password?: string;
}

export const useForm = (initialState: any) => {
  const [state, setstate] = React.useState(initialState);
  const initialValues = Object.values(initialState).join(``);
  useEffect(() => {
    // This function runs when the things we are watching change
    setstate(initialState);
  }, [initialValues]);

  const ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line prefer-const
    let { name, value, type } = e.target;
    if (type === `number`) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line radix
      value = parseInt(value);
    }
    if (type === `file`) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      [value] = e.target.files;
    }

    setstate({
      ...state,
      [name]: value,
    });
  };

  const resetForm = () => setstate(initialState);
  const ClearForm = () => {
    const blankState = Object.fromEntries(
      Object.entries(state).map(([key, _value]) => [key, ``]),
    );
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setstate(blankState);
  };

  return {
    state,
    ChangeHandler,
    resetForm,
    ClearForm,
  };
};
