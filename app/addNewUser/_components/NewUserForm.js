'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/app/_components/Input';
import Button from '@/app/_components/Button';
import toast from 'react-hot-toast';
import SpinnerMini from '@/app/_components/SpinnerMini';
import { createNewUser } from '@/app/_actions/newUser';

function NewUserForm({ company }) {
  const [isCreating, setIsCreating] = useState(false);

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
    setIsCreating(true);

    const result = await createNewUser(data, company);

    if (result?.error) {
      toast.error(`❌ ${result.error}`);
    } else {
      toast.dismiss();
      toast.success('Logged In');
    }

    setIsCreating(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 border-2 border-gray-200 p-6 rounded-md w-[50%]"
    >
      <h1 className="text-3xl font-bold text-center pb-6">Create New User</h1>

      <Input
        label="Email address"
        id="email"
        type="email"
        errors={errors}
        register={register}
        disabled={isCreating}
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
        disabled={isCreating}
        validationRules={{
          required: '* This field is required',
        }}
      />

      <div>
        <Button disabled={isCreating} type="submit">
          {isCreating ? <SpinnerMini /> : 'Create User'}
        </Button>
      </div>
    </form>
  );
}

export default NewUserForm;
