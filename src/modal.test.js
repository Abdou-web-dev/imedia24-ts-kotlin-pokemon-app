import { fireEvent, render, screen } from "@testing-library/react";
import Pokemon from "../src/components/Pokemon";
import "./matchMedia";
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

//test block
test("pokemon modal test", () => {
  // render the component on virtual dom
  render(<Pokemon />);

  //select the elements you want to interact with
  const modalBtn = screen.getByTestId("openModalBtn");
  const theModal = screen.getByTestId("theModal");

  //interact with those elements
  fireEvent.click(modalBtn);

  //assert the expected result
  expect(theModal).toHaveTextContent(true);
});
