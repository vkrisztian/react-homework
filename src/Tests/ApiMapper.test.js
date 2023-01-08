import { MapBallot } from "../Api/ApiMapper";
import { apiTestData } from "./TestData";

test("api mapping to model", () => {
    const Mapped = MapBallot(apiTestData);
    expect(Mapped.ballotCategories.length).toBe(2);
    expect(Mapped.ballotCategories[0].title).toBe("Best Picture");
    expect(Mapped.ballotCategories[0].nominees.length).toBe(2);
    expect(Mapped.ballotCategories[0].nominees[1].title).toBe("The Trial of the Chicago 7");
});