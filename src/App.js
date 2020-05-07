import React from "react";
import styled from "styled-components";
import Clock from "./components/Clock";

const MainContainer = styled.div``;

const LocationContainer = styled.div``;

const FormContainer = styled.form``;

const ToDoList = styled.ul``;

const App = () => {
  return (
    <MainContainer>
      <LocationContainer>
        <span className="location"></span>
      </LocationContainer>
      <Clock />
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
