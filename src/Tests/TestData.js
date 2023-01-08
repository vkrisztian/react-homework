import BallotCategory from "../Model/BallotCategory";
import BallotModel from "../Model/BallotModel";
import BallotNominee from "../Model/BallotNominee";

export const testNominees = [new BallotNominee("nominee_title", "", "nominee_id"), new BallotNominee("nominee_title2", "", "nominee_id2")]
export const testData = new BallotCategory("test_id", "test_title", testNominees);
export const ballotTest = new BallotModel([testData]);

export const apiTestData = { items: [
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