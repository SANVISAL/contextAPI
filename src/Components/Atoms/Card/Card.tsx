"use client";

import { CardModel } from "@/@types/card";
import React from "react";
import Swal from "sweetalert2";
import Image from "next/image";
import { useCard } from "@/app/Context/CardContext";

const Card = ({ card }: { card: CardModel }) => {
  const { deleteCard, setSelectCard, selectCard } = useCard();
  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure bro?",
      text: "This will delete user from your card lists!",
      icon: "warning",
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: "#FF5861",
      cancelButtonColor: "#00B5FF",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCard(id);
        Swal.fire(
          "Deleted!",
          "The user has been deleted successfully .",
          "success"
        );
      }
    });
  };
  return (
    <>
      <div
        className="flex justify-center items"
        onClick={() => {
          if (selectCard === card.id) {
            setSelectCard("");
            return;
          }
          setSelectCard(card.id);
        }}
      >
        <div
          className={`card mt-5 bg-base-100 shadow-xl w-[600px] border-2 border-blue-300 ${
            selectCard === card.id && "bg-base-300"
          }`}
        >
          <div className="card-body">
            <div className="flex items-center">
              <Image
                src={card.image as string}
                height={80}
                width={80}
                className="rounded-full object-cover w-[80px] h-[80px] mr-2"
                alt="Avatar"
              />
              <div className="flex justify-center flex-col ml-2">
                <h1 className="card-title">{card.name}</h1>
              </div>
            </div>
            <div className="card-actions justify-end">
              <button
                className="btn btn-error w-[100px]"
                onClick={(e) => {
                  handleDelete(card.id);
                  e.stopPropagation(); // Prevent the event fireup to the ancestor
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Card };
