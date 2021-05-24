import RateTable from "./RateTable";
import renderer from "react-test-renderer";
import {render,waitFor} from "@testing-library/react";

describe("render App component", () => {
  it("sanpshot test for App component", () => {
    const container = renderer.create(<RateTable />);
    const tree = container.toJSON();
    expect(tree).toMatchSnapshot();
  });
//having some errors
  it("testing fetch api", async ()=>{
     const {getByTestId}=await render(<RateTable/>);
     await waitFor(()=>{
       expect(getByTestId("type").textContent).toBe("Prime");

     });

  });
});
