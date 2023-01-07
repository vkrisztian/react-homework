import BallotCategory from "../Model/BallotCategory";
import BallotModel from "../Model/BallotModel";
import BallotNominee from "../Model/BallotNominee";

export function MapBallot(response) {
    if (!response?.items) {
        console.error('no ballot available!');
        return null;
    }
    
    const categories = response.items.map(mapCategory);
    return new BallotModel(categories)
}

function mapCategory(category) {
    const nominees = category.items.map(mapNominee);
    return new BallotCategory(category.id, category.title, nominees);
}

function mapNominee(nominee) {
    return new BallotNominee(nominee.title, nominee.photoUrL, nominee.id);
}