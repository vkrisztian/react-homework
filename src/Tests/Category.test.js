import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Category from "../Components/BallotCategory/Category";
import { testData } from "./TestData";
import { getElementByXpath } from "./TestHelper";

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

test("category should render all nominees", () => {
    const onSelection = () => {};
    act(() => {
        render(
            <Category category={testData} onSetSelection={onSelection}/>, container
        );
    });

    expect(document.getElementById("nominee_id")).toBeInTheDocument();
    expect(document.getElementById("nominee_id2")).toBeInTheDocument();
});

test("there should be only 1 selection", () => {
    let selected = null;
    const onSelection = (nominee) => {
        selected = nominee;
    };
    act(() => {
        render(
            <Category category={testData} onSetSelection={onSelection}/>, container
        );
    });

    getElementByXpath('//*[@id="nominee_id"]/div[3]').click();
    expect(selected.id).toBe("nominee_id");
    getElementByXpath('//*[@id="nominee_id2"]/div[3]').click();
    expect(selected.id).toBe("nominee_id2");
    expect(getElementByXpath('//*[@id="nominee_id2"]').className).toContain('selected');
    expect(getElementByXpath('//*[@id="nominee_id"]').className).not.toContain('selected');
});