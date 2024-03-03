import React, { ChangeEvent, useState, useRef, FormEventHandler } from "react";
import { useCard } from "@/app/Context/CardContext";
import { useModal } from "@/app/Context/ModalContext";
import { CardForm } from "@/@types/card";
import { CardValidateSchema } from "@/schema/CardSchema";
import * as Yup from "yup";
import { Button, InputFile, InputText } from "@/Components";
import { setLocalStorage } from "@/utils/localStorage";

const DEFAULT_FORM_VALUE: CardForm = {
  name: "",
  image: "",
};

const FormAdd = () => {
  const { selectCard, selectCardInfo, addNewCard } = useCard();
  const { setIsOpen } = useModal();

  const [cardDetail, setCardDetail] = useState<CardForm>(
    selectCard ? (selectCardInfo as CardForm) : DEFAULT_FORM_VALUE
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    try {
      // await CardValidateSchema.validate(cardDetail, { abortEarly: false });

      // Implement update logic here if needed
      if (selectCard) {
        // updateUser(selectCardInfo?.id as string, cardDetail)
      } else {
        addNewCard(cardDetail);
      }

      console.log("object");
      setErrors({});
      setIsOpen(false);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const newErrors: { [key: string]: string } = {};
        error.inner.forEach((e) => {
          if (e.path) {
            newErrors[e.path] = e.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files && event.target.files[0];
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setCardDetail({ ...cardDetail, image: imageUrl });
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetail({ ...cardDetail, [name]: value });
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <InputText
          type="text"
          name="name"
          value={cardDetail.name}
          onChange={handleChangeInput}
          placeholder="Enter card name"
        />
        {errors.name && (
          <p className="-mt-3" style={{ color: "red" }}>
            {errors.name}
          </p>
        )}
        <InputFile
          size="md"
          type="file"
          name="image"
          // ref={inputFileRef}
          accept="image/*"
          onChange={handleImageChange}
        />
        {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}

        <div className="flex flex-col">
          <Button type="submit" className="mt-2" size="md" color="primary">
            {selectCard ? "Update" : "Create"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export { FormAdd };
