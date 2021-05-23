import App from "./App";
import renderer from "react-test-renderer";

describe("render App component", () => {
  it("sanpshot test for App component", () => {
    const container = renderer.create(<App />);
    const tree = container.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
