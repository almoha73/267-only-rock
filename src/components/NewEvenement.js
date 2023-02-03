import React from "react";
import styled, { keyframes } from "styled-components";
import uuid from "react-uuid";

const neon = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;

const LiR = styled.li`
  animation: ${neon} 4s linear infinite;
  transform: rotate(15deg) translateY(4px);
  text-shadow: 0 0 30px red, 0 0 40px red;
transition: "opacity 0.5s;
`;

const Li = styled.li`
text-shadow: 0 0 30px red, 0 0 40px red;
transition: "opacity 0.5s;
`;

const flecheOuverte = "<< ";
const flecheFermee = " >>";

const NewEvenement = () => {
  return (
    <a href="/evenements" className="block w-full flex justify-center  p-2 mb-4">
      <ul className=" text-red-500 flex text-xl sm:text-4xl font-bold mr-4">
        <Li key={uuid()}>{flecheOuverte}&nbsp;</Li>
        <Li key={uuid()}>P</Li>
        <Li key={uuid()}>R</Li>
        <LiR key={uuid()}>O</LiR>
        <Li key={uuid()}>C</Li>
        <Li key={uuid()}>H</Li>
        <Li key={uuid()}>A</Li>
        <Li key={uuid()}>I</Li>
        <Li key={uuid()}>N</Li>
      </ul>
      <ul className=" text-red-500 flex text-xl sm:text-4xl font-bold">
        <Li key={uuid()}>E</Li>
        <Li key={uuid()}>V</Li>
        <LiR key={uuid()}>E</LiR>
        <Li key={uuid()}>N</Li>
        <Li key={uuid()}>E</Li>
        <Li key={uuid()}>M</Li>
        <Li key={uuid()}>E</Li>
        <Li key={uuid()}>N</Li>
        <Li key={uuid()}>T</Li>
        <Li key={uuid()}>&nbsp;{flecheFermee}</Li>
      </ul>
    </a>
  );
};

export default NewEvenement;
