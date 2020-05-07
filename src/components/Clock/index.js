import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ClockContainer = styled.div`
  .clock-title {
    font-size: 2rem;
    display: flex;
    justify-content: center;
  }
`;

const Clock = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const setTime = () => {
    const date = new Date();
    const hours =
      date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
    const minutes =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;

    setHours(hours);
    setMinutes(minutes);
  };

  useEffect(() => {
    setInterval(setTime, 1000, []);

    return clearInterval(setTime);
  }, []);

  return (
    <ClockContainer>
      {hours && minutes && (
        <h1 className="clock-title">{`${hours}:${minutes}`}</h1>
      )}
    </ClockContainer>
  );
};

export default Clock;
