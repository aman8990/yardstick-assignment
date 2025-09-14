'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../_components/Input';
import Button from '@/app/_components/Button';
import toast from 'react-hot-toast';
import SpinnerMini from '@/app/_components/SpinnerMini';
import { login } from '@/app/_actions/login';

function LoginForm() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    setIsLoggingIn(true);

    const result = await login(data);

    if (result?.error) {
      toast.error(`❌ ${result.error}`);
    } else {
      toast.dismiss();
      toast.success('Logged In');
    }

    setIsLoggingIn(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 border-2 border-gray-200 p-6 rounded-md"
    >
      <h1 className="text-3xl font-bold text-center pb-6">Sign In</h1>

      <Input
        label="Email address"
        id="email"
        type="email"
        errors={errors}
        register={register}
        disabled={isLoggingIn}
        validationRules={{
          required: '* This field is required',
        }}
      />

      <Input
        label="Password"
        id="password"
        type="password"
        errors={errors}
        register={register}
        disabled={isLoggingIn}
        validationRules={{
          required: '* This field is required',
        }}
      />

      <div>
        <Button disabled={isLoggingIn} type="submit">
          {isLoggingIn ? <SpinnerMini /> : 'Sign In'}
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
