import { ButtonDemo } from '@/components/my/ButtonCom';
import { ButtonSize } from '@/components/my/ButtonSize';
import { MyField } from '@/components/my/MyField';
import React from 'react';

const page = () => {
  return (
    <div className='max-w-[80%] mx-auto'>
      Hello World
      <ButtonDemo></ButtonDemo>
      <ButtonSize></ButtonSize>
      <MyField></MyField>
    </div>
  );
};

export default page;