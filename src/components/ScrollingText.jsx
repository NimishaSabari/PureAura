import React from 'react';
import styled, { keyframes } from 'styled-components';

const scrollAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const ScrollingContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  width: 100%;
  background-color: rgba(224, 231, 255, 1); /* Light blue background color */
  padding: 20px 0;
  margin-top: 90px;
  margin-bottom:15px;
`;

const ScrollingText = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: ${scrollAnimation} 20s linear infinite; /* Increased animation duration */
`;

const SkincareWord = styled.span`
  display: inline-block;
  margin: 0 15px;
  font-size: 2rem; /* Increased font size */
  font-weight: bold;
  color: #1E3A8A; /* Dark blue text color */
`;

const StyledWord1 = styled(SkincareWord)`
  font-family: 'Arial', sans-serif;
`;

const StyledWord2 = styled(SkincareWord)`
  font-family: 'Helvetica', sans-serif;
`;

const StyledWord3 = styled(SkincareWord)`
  font-family: 'Times New Roman', serif;
`;

const StyledWord4 = styled(SkincareWord)`
  font-family: 'Courier New', monospace;
`;

const StyledWord5 = styled(SkincareWord)`
  font-family: 'Georgia', serif;
`;

const StyledWord6 = styled(SkincareWord)`
  font-family: 'Verdana', sans-serif;
`;

const StyledWord7 = styled(SkincareWord)`
  font-family: 'Impact', sans-serif;
`;

const StyledWord8 = styled(SkincareWord)`
  font-family: 'Comic Sans MS', cursive;
`;

const StyledWord9 = styled(SkincareWord)`
  font-family: 'Trebuchet MS', sans-serif;
`;

const StyledWord10 = styled(SkincareWord)`
  font-family: 'Lucida Console', monospace;
`;

const StyledWord11 = styled(SkincareWord)`
  font-family: 'Palatino Linotype', serif;
`;

const StyledWord12 = styled(SkincareWord)`
  font-family: 'Book Antiqua', serif;
`;

const StyledWord13 = styled(SkincareWord)`
  font-family: 'Copperplate', sans-serif;
`;

const StyledWord14 = styled(SkincareWord)`
  font-family: 'Brush Script MT', cursive;
`;

const StyledWord15 = styled(SkincareWord)`
  font-family: 'Garamond', serif;
`;

const ScrollingTextComponent = () => {
  const skincareWords = [
    'Hydration',
    'Moisturize',
    'Exfoliate',
    'Serum',
    'Glow',
    'Cleanse',
    'Nourish',
    'Rejuvenate',
    'Radiance',
    'Revitalize',
    'Toner',
    'Essence',
    'Mask',
    'Sunscreen',
    'Acne'
  ];

  return (
    <ScrollingContainer>
      <ScrollingText>
        <StyledWord1>{skincareWords[0]}</StyledWord1>
        <StyledWord2>{skincareWords[1]}</StyledWord2>
        <StyledWord3>{skincareWords[2]}</StyledWord3>
        <StyledWord4>{skincareWords[3]}</StyledWord4>
        <StyledWord5>{skincareWords[4]}</StyledWord5>
        <StyledWord6>{skincareWords[5]}</StyledWord6>
        <StyledWord7>{skincareWords[6]}</StyledWord7>
        <StyledWord8>{skincareWords[7]}</StyledWord8>
        <StyledWord9>{skincareWords[8]}</StyledWord9>
        <StyledWord10>{skincareWords[9]}</StyledWord10>
        <StyledWord11>{skincareWords[10]}</StyledWord11>
        <StyledWord12>{skincareWords[11]}</StyledWord12>
        <StyledWord13>{skincareWords[12]}</StyledWord13>
        <StyledWord14>{skincareWords[13]}</StyledWord14>
        <StyledWord15>{skincareWords[14]}</StyledWord15>
      </ScrollingText>
    </ScrollingContainer>
  );
};

export default ScrollingTextComponent;
