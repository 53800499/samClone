/** @format */

import { ForgetFormFieldsType } from "@/types/forms";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Formulaire from "./formulaire";
import { useRouter } from "next/router";
import Button from "@/ui/design-system/button/button";
import Container from "../container/container";
import { IoIosArrowDown } from "react-icons/io";

export default function FormulaireContainer() {
  const [isLoading, setisLoading] = useState<boolean>(false);
  const route = useRouter();
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset
  } = useForm<ForgetFormFieldsType>();

  const handleResetPassword = async () => {
    //const { error } = await firebaseResetPasswordUser(email);
    /*if (error) {
      setisLoading(false);
      console.log("Error creating user:", error);
      //toast.error(error.message);
      return;
    } */
    console.log("User update successfully:");
    setisLoading(false);
    //toast.success(`un mail a été expédié à votre adresse email ${email}`);
    reset();
    route.push("/connexion");
  };

  const onSubmit: SubmitHandler<ForgetFormFieldsType> = async (formdata) => {
    setisLoading(true);
    console.log("Form submitted:", formdata);
    handleResetPassword();
  };

  const form = {
    errors,
    register,
    handleSubmit,
    onSubmit,
    isLoading
  };

  console.log("Form data in RegisterContainer:", form); // Vérifiez ici.

  return (
    <Container className="flex flex-col gap-4 my-20 px-8">
      <Formulaire form={form} />
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-between items-center gap-2">
          <Button
            size="medium"
            icon={{ icon: IoIosArrowDown }}
            onclick={() => console.log("Bouton cliqué")}>
            Recherche avancée
          </Button>
          <Button className="" variant="primary" disabled>
            Recherche
          </Button>
      </div>
    </Container>
  );
}
