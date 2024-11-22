// import { useState } rom "react";
import { useContext } from "react";
import { UserContext } from "./UserContextProvider";

//We have to define props with type med interface
//if you gon make a component in the file it got to be .tsx
//by interfaces im creating my own type
interface Props {
  name: string;
  age: number;
  isMarried: boolean;
  country: Countries;
}

//to define a specific type of a property inside of your application. wanna add a contry. you
//dont wanna make country a string because there is amount of options that can go in
export enum Countries {
  Brazil = "Brazil",
  France = "France",
  UnitedStates = "united States",
  India = "india",
}

//its what it can return
export const User = ({ name, age, isMarried, country }: Props) => {
  const { users, updateUser, deleteUser } = useContext(UserContext);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>This person {isMarried ? "is married" : "is single"} </p>
      <p>Country of origin: {country}</p>
      {/* <p>
        {Props.name} Bio: {personBio === null ? "no Bio Available" : personBio}
      </p>
      <input onChange={handleChange} /> */}
    </div>
  );
};
