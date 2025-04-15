import { createContext, useState } from "react";

export const Context = createContext();
const AppContext = ({ children }) => {
  const [categories, setCategories] = useState(false);
  const [products, setProducts] = useState(false);
  return (
    <Context.Provider
      value={{ categories, setCategories, products, setProducts }}
    >
      {children}
    </Context.Provider>
  );
};
export default AppContext;
