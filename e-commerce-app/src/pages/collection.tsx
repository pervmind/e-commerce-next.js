import HeadComponent from "@/components/Head"
import styles from "../styles/Collection.module.css"
export default function About(){
    return (
        <>
            <HeadComponent />
            <div className={styles.container}>
                Katanas
            </div>
        </>
    )
}