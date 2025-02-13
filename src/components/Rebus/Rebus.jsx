import styles from "./Rebus.module.css"

const Rebus = () => {
	return (
		<>
			<h1>Na koniec mały rebus(mega trudny)</h1>
			<div className={styles.images}>
				<img src='/potas.jpeg' alt='Potas' />
				<img src='/wegiel.webp' alt='Węgiel' />
			</div>
		</>
	)
}

export default Rebus
