import React from "react";

const BallotResult = (props) => {

    function* getWinners(selection) {
        for (let item in selection) {
            yield (
                <React.Fragment key={item}>
                    <div style={{marginTop: '0.5rem',marginBottom: '1rem',fontSize: '1.5rem'}}>
                        {item}
                    </div>
                    {!!selection[item] ? 
                        <div style={{marginBottom: '1rem'}}>
                            {selection[item].title}
                        </div> :
                        <div style={{color: 'red'}}>
                            No selection for this category!
                        </div>
                    }
                </React.Fragment>
            )
        }
    }

    return (
        <>
            {Array.from(getWinners(props.selection))}
        </>
    )
}

export default BallotResult;