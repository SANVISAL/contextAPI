import { Dispatch, SetStateAction } from "react";

export interface CardModel {
  readonly id: string;
  name: string;
  image: string | null;
}

export interface CardContextType {
  cards: CardModel[];
  selectCard: string | null;
  selectCardInfo: CardModel | undefined;
  addNewCard: (card: CardForm) => void;
  updateCard: (id: string, newUpdateUser: CardForm) => void;
  deleteCard: (id: string) => void;
  // clearAllCard: () => void;
  setSelectCard: Dispatch<SetStateAction<string | null>>;
}

export type CardForm = Omit<CardModel, "id">;
