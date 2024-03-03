import React, { useEffect } from "react";
import { Card } from "./Card";
import { useCard} from "@/app/Context/CardContext";
import { Button } from "@/Components";
interface CardListProps {
  search: string;
}

const CardList: React.FC<CardListProps> = ({ search }) => {
  const { cards } = useCard();

  return (
    <>
      <div className="flex justify-end mx-10 my-5 w-[90%]">
        <span className="flex justify-center items-center w-auto bg-gray-500 p-2 mr-2 rounded-md text-white">
          Total User : {cards.length}
        </span>
        <Button color="warning">
          Clear All
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid lg:grid-cols-2 gap-y-2 mx-auto w-[70%]">
        {cards
          .filter((items) => {
            return search.trim() === ""
              ? items
              : items.name &&
                  items.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((item, index) => (
            <React.Fragment key={index}>
              <Card card={item} />
            </React.Fragment>
          ))}
      </div>
    </>
  );
};

export { CardList };
