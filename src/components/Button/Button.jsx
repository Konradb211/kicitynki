import styles from "./Button.module.css"

export const Button = ({ children, onClick, style }) => {
	return (
		<button style={style} onClick={onClick} className={styles.button}>
			{children}
		</button>
	)
}
