import { useState } from "react";
import Nominee from "../BallotNominee/Nominee";
import styles from "./Category.module.css";

const Category = (props) => {
    const [selected, setSelected] = useState(null);

    const setSelection = (nominee) => {
        setSelected(nominee.id);
        props.onSetSelection(nominee);
    }

    return (
        <div className={styles.categoryContainer}>
            <div className={styles.categoryTitle}>{props.category.title}</div>
            <div className={styles.nomineeContainer}>
                {
                    props.category.nominees.map(nominee => 
                        <Nominee key={nominee.id} nominee={nominee} onSelect={() => setSelection(nominee)} selected={selected === nominee.id} />
                    )
                }
            </div>
        </div>
    )
}

export default Category;