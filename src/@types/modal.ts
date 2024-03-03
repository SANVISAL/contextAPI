import { Dispatch, SetStateAction } from "react";

export interface ModalContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
