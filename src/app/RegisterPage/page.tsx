'use client';
import { useRouter } from 'next/navigation';

import { useStoreAuth } from '@/store/Auth';
import { useForm } from 'react-hook-form';
import useFetch from '../lib/hooks/useFetch';
import Link from 'next/link';

interface Data {
  username: string;
  email: string;
  password: string;
}
export default function RegisterPage() {
  const router = useRouter();

  const reg = useStoreAuth((state) => state.register);
  const { mutate, data, isLoading, error } = useFetch<typeof reg>(reg, () => {
    router.push("/LoginPage")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>();
  const onSubmit = async (data: Data) => {
    const { username, email, password } = data;
    mutate('admin2@mail.ru', 'admin', 'admin');
  };
  console.log(error);
  console.log(data);
  console.log(isLoading);

  return (
    <div className=' flex items-center justify-center h-svh w-[100%]'>
      <div className='flex flex-col items-center max-w-[500px]'>
        <div className=''>
          <h1 className='text-[36px]'>SignUp</h1>
        </div>
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <input
            className={
              'text-[black] h-[40px] w-full p-2 border border-[#363738] rounded bg-[#232324] text-white mb-[8px]'
            }
            type='text'
            placeholder='UserName'
            {...register('username')}
          />
          <input
            className={
              'text-[black] h-[40px] w-full p-2 border border-[#363738] rounded bg-[#232324] text-white mb-[8px]'
            }
            type='text'
            placeholder='Email'
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            className={
              'text-[black] h-[40px] w-full p-2 border border-[#363738] rounded bg-[#232324] text-white mb-[8px]'
            }
            type='tel'
            placeholder='Password'
            {...register('password', { required: true, minLength: 1 })}
          />
          <ul>
            {errors.password && errors.password.type === 'minLength' && (
              <li className='text-[red] mb-[8px]'>password length must be {'>'} 8</li>
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <li className='text-[red] mb-[8px]'>plis use correct mail</li>
            )}
            {error ?? <li className='text-[red] mb-[8px]'> fdfd </li>}
          </ul>

          <input
            className='mb-[8px] flex w-[100%] justify-center bg-blue-700 p-2 rounded-sm cursor-pointer hover:bg-blue-600'
            type='submit'
          />
        </form>
        <Link href={'/LoginPage'}>
          <p className='text-blue-500 text-[18px]'>Sign in?</p>
        </Link>
      </div>
    </div>
  );
}
