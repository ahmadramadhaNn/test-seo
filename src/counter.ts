export function setupCounter(
  element: HTMLButtonElement,
  decreaseBtn: HTMLButtonElement,
  increaseBtn: HTMLButtonElement
) {
  let counter = 0;

  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `${counter}`;
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  decreaseBtn.addEventListener("click", decreaseCounter);
  increaseBtn.addEventListener("click", increaseCounter);

  setCounter(0);
}
