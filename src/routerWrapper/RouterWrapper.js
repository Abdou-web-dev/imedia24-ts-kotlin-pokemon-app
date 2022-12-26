import { MemoryRouter } from "react-router-dom";

export const RouterWrapper = ({ children }) => (
  <MemoryRouter>{children}</MemoryRouter>
);
