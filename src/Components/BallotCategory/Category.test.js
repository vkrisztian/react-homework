import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import BallotCategory from "../../Model/BallotCategory";
import BallotNominee from "../../Model/BallotNominee";
import Category from "./Category";

let container = null;
let testNominees = [new BallotNominee("nominee_title", "", "nominee_id"), new BallotNominee("nominee_title2", "", "nominee_id2")]
let testData = new BallotCategory("test_id", "test_title", testNominees);
function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
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