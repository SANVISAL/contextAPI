"use client";

import React, { useState } from "react";
import  CardProvider  from "@/app/Context/CardContext";
import ModalProvider from "./Context/ModalContext";
import { CardList } from "@/Components";
import { FormAdd } from "@/Components";
import { Modal } from "@/Modal";

const HomePage = () => {
 const [search , setSearch]  = useState("");

  return (
    <CardProvider>
      <ModalProvider>
        <Modal>
          <FormAdd/>
        </Modal>
      </ModalProvider>

      {/* <Search search={search} setSearch={setSearch} /> */}
      <CardList search={search}/>
    </CardProvider>
  );
};

export default HomePage;


// "use client"

// import React from 'react'
// import { Button,Card } from '@/Components'
// import { CardProvider } from '@/Contexts'

// const page = () => {
//   return (
//     <div>
//       <CardProvider/>
//       <Card name="Visal" image='facebook.svg' previewUrl=''/>
//       <Button/>

//     </div>
//   )
// }

// export default page
