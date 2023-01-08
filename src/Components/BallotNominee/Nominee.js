import styles from "./Nominee.module.css";

const Nominee = (props) => {

    const selectedClass = props.selected ? styles.selected : '';
    
    return (
        <div className={`${styles.container} ${selectedClass}`}>        
            <div className={styles.title}>
                {props.nominee.title}
            </div>
            <div className={styles.imgContainer}>
                <img className={styles.image} src={props.nominee.photoUrl} alt={'img'}/>
            </div>
            <div className={styles.button} onClick={props.onSelect}>
                Select
            </div>
        </div>
    );
}

export default Nominee;