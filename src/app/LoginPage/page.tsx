'use client';

import { useStoreAuth } from '@/store/Auth';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import useFetch from '../lib/hooks/useFetch';
import { useRouter } from 'next/navigation';

interface Data {
  email: string;
  password: string;
}
export default function LoginPage() {
  const login = useStoreAuth((state) => state.login);
  const router = useRouter();
  const { mutate, data, isLoading, error } = useFetch<typeof login>(login, () => {
    if (error) {
      router.push('/MainPage');
      router.replace;
    }
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>();
  const onSubmit = (data: Data) => {
    const { email, password } = data;
    mutate(email, password);
  };
console.log(error);

  return (
    <div className=' flex items-center justify-center h-svh w-[100%]'>
      <div className='flex flex-col items-center  max-w-[500px]'>
        <div className=''>
          <h1 className='text-[36px]'>SignIn</h1>
        </div>
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <input
            className={' h-[40px] w-full p-2 border border-[#363738] rounded bg-[#232324] text-white mb-[8px]'}
            type='text'
            placeholder='Email'
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />

          <input
            className={' h-[40px] w-full p-2 border border-[#363738] rounded bg-[#232324] text-white mb-[8px]'}
            type='password'
            placeholder='Password'
            {...register('password', { required: true, minLength: 1 })}
          />

          <input
            className='mb-[8px] flex w-[100%] justify-center bg-blue-700 p-2 rounded-sm cursor-pointer hover:bg-blue-600'
            type='submit'
          />
          <ul>
            {errors.password && errors.password.type === 'minLength' && (
              <li className='text-[red] mb-[8px]'>password length must be {'>'} 8</li>
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <li className='text-[red] mb-[8px]'>plis use correct mail</li>
            )}
            {error ? <li className='text-[red] mb-[8px]'>{error.response?.data?.error}</li> : null}
          </ul>
        </form>
        <Link href={'/RegisterPage'}>
          <p className='text-blue-500 text-[18px]'>Don't you have an account?</p>
        </Link>
      </div>
    </div>
  );
}
