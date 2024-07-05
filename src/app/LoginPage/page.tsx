import { useStoreAuth } from '@/store/Auth';
import React from 'react'


export default function LoginPage() {
  const login = useStoreAuth((state) => state.login);
  console.log(login('admin@mail.ru', "admin"));
  return (
    <div>page</div>
  )
}
