"use client";

import React, {
  createContext,
  useState,
  SetStateAction,
  Dispatch,
  useContext,
  useEffect,
} from "react";
import { CardContextType, CardModel, CardForm } from "@/@types/card";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import { generateRandomString } from "@/utils/string";

export const CardContext = React.createContext<CardContextType>({
  cards: [],
  selectCard: null,
  selectCardInfo: undefined,
  addNewCard: () => {},
  updateCard: () => {},
  setSelectCard: () => {},
  deleteCard: () => {},
});

const CardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cards, setCards] = useState<CardModel[]>([]);
  const [selectCard, setSelectCard] = useState<string | null>(null);
  const selectCardInfo = cards.find((card) => card.id === selectCard);

  console.log(cards);

  const addNewCard = (card: CardForm) => {
    const id = generateRandomString(5);
    const newCard = { ...card, id };
    setCards((prev) => {
      const newAllCards = [...prev, newCard];
      setLocalStorage("cards", newAllCards);
      return newAllCards;
    });
  };
  const deleteCard = (id: string) => {
    const remainUsers = cards.filter((card) => card.id !== id);

    setLocalStorage("user", remainUsers);
    setCards(remainUsers);
  };


  const updateCard = (id: string, newUpdateUser: CardForm) => {
    const newCard = cards.map((user) => {
      // If the existed user id === id we want to update
      // Update the info of user
      if (user.id === id) {
        return {
          ...user,
          ...newUpdateUser,
        };
      }
      // Else, return the existed user
      return user;
    });

    setLocalStorage("cards", newCard);
    setCards(newCard);
  };

  useEffect(() => {
    const cardsStorage = getLocalStorage("cards");
    if (cardsStorage) {
      setCards(cardsStorage);
    }
  }, []);

  const value = {
    cards,
    selectCard,
    selectCardInfo,
    setSelectCard,
    addNewCard,
    updateCard,
    deleteCard
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

export function useCard() {
  const context = useContext(CardContext);

  if (context === undefined) {
    throw new Error("useCard must be used within a CardProvider");
  }
  return context;
}

export default CardProvider;
