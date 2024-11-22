import { createContext, useEffect, useState } from "react";
//this file  is to fetching data

//this can be used anyone in the application
//define a type for the data you gon be using
export interface User {
  name: string;
  age: number;
  isMarried: boolean;
  country: string;
}

//a CRUD- what the context will return. this is what we can access
//a function for adding user
//a function for update user
//a function for deleting
interface UserContextType {
  users: User[] | null;
  addUser: (user: User) => void;
  updateUser: (id: string) => void;
  deleteUser: (id: string) => void;
}

//a state with object that returns null
const contextInitialValues = {
  users: null,
  addUser: () => null,
  updateUser: () => null,
  deleteUser: () => null,
};

//then passing all of the types to their individual places
export const UserContext = createContext<UserContextType>(contextInitialValues);

interface Props {
  children: React.ReactNode;
}

//this function takes in props.
export const UserProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<User[] | null>(null);

  //fetching data at setting user to be a list
  useEffect(() => {
    setUsers([{ name: "pedro", age: 22, isMarried: false, country: "Brazil" }]);
  }, []);

  const addUser = (user: User) => null;
  const updateUser = (id: string) => null;
  const deleteUser = (id: string) => null;

  //and actually pass them as the value of that provider
  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
