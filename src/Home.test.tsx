import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./pages/Home";

// toBeInTheDocument is not part of RTL. You need to install jest-dom to enable it.

//test block
test("welcome test", () => {
  // render the component on virtual dom
  render(<Home />);

  //select the elements you want to interact with
  const HomeHeader = screen.getByRole("home-header");

  //interact with those elements
  //assert the expected result
  expect(HomeHeader).toBeInTheDocument();
});

//test block
test("p tag test", () => {
  // render the component on virtual dom
  render(<Home />);

  //select the elements you want to interact with
  const HomepTag = screen.getByTestId("home-par-text");

  //interact with those elements
  //assert the expected result
  expect(HomepTag).toHaveTextContent(
    `Here is the list of available pokemons :`
  );
});

//test block
test("className tag test", () => {
  render(<Home />);
  const HomepTag = screen.getByTestId("home-par-text");
  expect(HomepTag).toHaveAttribute("class", "pokemon-home-header-p");
});
