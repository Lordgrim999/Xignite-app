import Header from "./Header";
import { render } from "@testing-library/react";

it("rendering Header Component", () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId("title").textContent).toBe("WSJ Rates");
});
