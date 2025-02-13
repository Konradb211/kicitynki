import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../Button/Button"
import { Title } from "../Title/Title"
import styles from "./Main.module.css"
export const Main = () => {
	const [scale, setScale] = useState(1)
	const navigate = useNavigate()

	const handleScaleClick = () => {
		setScale(prevScale => prevScale + 0.5)
	}

	const handleYesClick = () => {
		navigate("/kici-meow")
	}

	return (
		<>
			<div className={styles.titleContainer}>
				<Title>Zostaniesz moją kicią walentynką? 🥺</Title>
			</div>
			<div className={styles.buttonContainer}>
				<Button
					onClick={handleYesClick}
					style={{
						transform: `scale(${scale})`,
						transition: "transform .3s easy-in-out",
					}}>
					TAK 😼
				</Button>
				<Button onClick={handleScaleClick}>nie 😒</Button>
			</div>
		</>
	)
}
