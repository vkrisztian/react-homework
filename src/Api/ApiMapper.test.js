import { MapBallot } from "./ApiMapper";

let testData = { items: [
    {
      id: "best-picture",
      items: [
        {
          title: 'Nomadland',
          photoUrL: 'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
          id: 'nomadland'
        },
        {
          title: 'The Trial of the Chicago 7',
          photoUrL: 'https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg',
          id: 'the-trial-of-the-chicago-7'
        }
      ],
      title: "Best Picture"
    },
    {
      id: "best-director",
      items: [
        {
          title: 'Chloé Zhao for Nomadland',
          photoUrL: 'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
          id: 'chloe-zhao'
        },
        {
          title: 'Aaron Sorkin for The Trial of the Chicago 7',
          photoUrL: 'https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg',
          id: 'aaron-sorkin'
        }
      ],
      title: "Best Director"
    }
  ],
}


test("api mapping to model", () => {
    const Mapped = MapBallot(testData);
    expect(Mapped.ballotCategories.length).toBe(2);
    expect(Mapped.ballotCategories[0].title).toBe("Best Picture");
    expect(Mapped.ballotCategories[0].nominees.length).toBe(2);
    expect(Mapped.ballotCategories[0].nominees[1].title).toBe("The Trial of the Chicago 7");
});