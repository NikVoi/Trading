import styles from './Loader.module.css'

const Loader = () => {
	return (
		<section className={styles.loading}>
			<div className={styles.loader}></div>
		</section>
	)
}

export default Loader
