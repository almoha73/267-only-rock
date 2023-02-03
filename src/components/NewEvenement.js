import React from "react";
import styled, { keyframes } from "styled-components";

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
`;

const Li = styled.li`
text-shadow: 0 0 30px red, 0 0 40px red;
transition: "opacity 0.5s;
`;

const flecheOuverte = "<< ";
const flecheFermee = " >>"

const NewEvenement = () => {
  return (
    <a href="/evenements" className="w-full flex justify-center  p-2 mb-4">
      <ul className=" text-red-500 flex sm:text-4xl font-bold mr-4">
        <Li>{flecheOuverte}&nbsp;</Li>
        <Li>P</Li>
        <Li>R</Li>
        <LiR>O</LiR>
        <Li>C</Li>
        <Li>H</Li>
        <Li>A</Li>
        <Li>I</Li>
        <Li>N</Li>
      </ul>
      <ul className=" text-red-500 flex sm:text-4xl font-bold">
        <Li>E</Li>
        <Li>V</Li>
        <LiR>E</LiR>
        <Li>N</Li>
        <Li>E</Li>
        <Li>M</Li>
        <Li>E</Li>
        <Li>N</Li>
        <Li>T</Li>
        <Li>&nbsp;{flecheFermee}</Li>
      </ul>
    </a>
  );
};

export default NewEvenement;
