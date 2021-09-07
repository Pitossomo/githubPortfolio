import styled from "styled-components";

export function Alert({text}) { 
  return (
    <AlertWrapper>
      <p>{text}</p>
    </AlertWrapper>
  );
}

export const AlertWrapper = styled.div`
  display: flex;
  margin: 32px;
  color: #555;
  justify-content: center;
  font-size: 30px;
  font-weight: 500;
`;