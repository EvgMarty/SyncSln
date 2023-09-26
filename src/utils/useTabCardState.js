// Создайте отдельный хук для управления состоянием активности карточек
import { useState } from 'react';

export function useTabCardState(initialState) {
  const [active, setActive] = useState(initialState);

  const handleCardClick = (cardNum) => {
    setActive(cardNum);
  };

  return { active, handleCardClick };
}
