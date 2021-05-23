import RateTable from "./RateTable";
import renderer from "react-test-renderer";
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// describe("rendering rate table", () => {
//   it("check wether getting data", async () => {
//     const fakeRates = {
//       Type: "Prime",
//       Data: "5/19/2021",
//       Value: "3.25",
//       Price: "0",
//     };

//     jest.spyOn(global, "fetch").mockImplementation(() =>
//       Promise.resolve({
//         json: () => Promise.resolve(fakeRates),
//       })
//     );
//     await act(async () => {
//       render(<RateTable />, container);
//     });

//     expect(container.querySelectorAll("TableCell")).toBe(fakeRates);
//     global.fetch.mockRestore();
//   });
// });

describe("render App component", () => {
  it("sanpshot test for App component", () => {
    const container = renderer.create(<RateTable />);
    const tree = container.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
