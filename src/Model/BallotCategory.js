class BallotCategory {
    nominees = [];
    title = '';
    id = '';
    
    constructor(
        id,
        title,
        nominees
    ) {
        this.id = id;
        this.title = title;
        this.nominees = nominees;
    }
}

export default BallotCategory;