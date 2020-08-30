import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "You dont know JS", id: 1 },
    { title: "The art of war", id: 2 },
    { title: "The final empire", id: 3 },
    { title: "The song of fire and ice", id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
