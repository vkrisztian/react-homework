import { apiTestData } from "./TestData";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import Ballot from "../Components/Ballot/Ballot";

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});


afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test("data fetching works", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() => {
        return Promise.resolve({
            json: () => Promise.resolve(apiTestData)
        })
    });

    await act(async () => {
        render(<Ballot />, container);
    })

    expect(document.getElementById("nomadland")).toBeInTheDocument();
    expect(document.getElementById("the-trial-of-the-chicago-7")).toBeInTheDocument();

    global.fetch.mockRestore();
})