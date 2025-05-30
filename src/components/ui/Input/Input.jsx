import styles from "./input.module.scss";


export const InputSearch = (props) => {
    return (
        <>
            <input className={styles.search} {...props} />
        </>
    )
}