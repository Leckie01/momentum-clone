import React from "react";
import styled from "styled-components";

const MainContainer = styled.div``;

const ClockContainer = styled.div``;

const FormContainer = styled.form``;

const ToDoList = styled.ul``;

const App = () => {
  return (
    <MainContainer>
      <LocationContainer>
        <span className="location"></span>
      </LocationContainer>
      <ClockContainer>
        <h1 className="clock-title"></h1>
      </ClockContainer>
      <FormContainer>
        <input
          className="user-name"
          placeholder="What is your name?"
          name="user-name"
        />
      </FormContainer>
      <ToDoList></ToDoList>
    </MainContainer>
  );
};

export default App;
