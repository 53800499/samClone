import React from 'react'
import { Input } from '@/ui/design-system/forms/input';
import { ForgetFormFieldsType, FormsType } from '@/types/forms';
import { GoArrowSwitch } from 'react-icons/go';

interface Props {
  form: FormsType<ForgetFormFieldsType>; // Le type du formulaire est défini ici
}
export default function Formulaire({ form }: Props) {
  const {  errors, isLoading, register } = form;
  //const { onSubmit, errors, isLoading, register, handleSubmit } = form;
  

  return (
      <div className="flex gap-7 items-center justify-center">
        <Input
          isLoading={isLoading}
          placeholder="De"
          placeholders="Nom de l'arret"
          type="email"
          register={register}
          errors={errors}
          errorMsg="Champs obligatoire"
          id="email"
          required={true}
          isAutoCompleted={false}
          className=" w-4/9"
        />
        <div className="border-2 border-black h-20 w-96 flex justify-center items-center">
          <GoArrowSwitch className="text-gray-400 text-8xl " />
        </div>
        <Input
          isLoading={isLoading}
          placeholder="A"
          placeholders="Nom de l'arret"
          type="email"
          register={register}
          errors={errors}
          errorMsg="Champs obligatoire"
          id="email"
          required={true}
          isAutoCompleted={false}
          className=" w-4/9"
        />
      </div>
  );
}
