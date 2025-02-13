import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Text from "../Text/Text"
import { Title } from "../Title/Title"
import styles from "./SuccesPage.module.css"

export const SuccesPage = () => {
	const [number, setNumber] = useState("?")
	const [animating, setAnimating] = useState(false)
	const [name1, setName1] = useState("")
	const [name2, setName2] = useState("")
	const navigate = useNavigate()

	const handleCheck = () => {
		setAnimating(true)

		const first = name1.toLowerCase()
		const second = name2.toLowerCase()

		const isMatch =
			(first === "dominika" && second === "konrad") ||
			(first === "konrad" && second === "dominika")

		let targetScore = isMatch ? 100 : 0

		let currentScore = 1
		const interval = setInterval(() => {
			currentScore += 5
			if (currentScore >= targetScore) {
				clearInterval(interval)
				setNumber(targetScore)
				setAnimating(false)
			} else {
				setNumber(currentScore)
			}
		}, 50)
	}

	const handleNextStep = () => {
		navigate("/kici-meow/rebus")
	}

	return (
		<>
			<Title>Ale super że zgodziłaś się z własnej kiciej woli🥺</Title>
			<Text>
				No to co Pani Gociczko pora sprawdzić zgodność sercową z wybrankiem
			</Text>
			<div className={styles.inputContainer}>
				<div className={styles.inputContent}>
					<label htmlFor='kittyFirst'>Wpisz Swoje imię</label>
					<input
						id='kittyFirst'
						type='text'
						value={name1}
						onChange={e => setName1(e.target.value)}
					/>
				</div>
				<div className={styles.inputContent}>
					<label htmlFor='kittySecond'>Wpisz imię wybranka</label>
					<input
						type='text'
						id='kittySecond'
						value={name2}
						onChange={e => setName2(e.target.value)}
					/>
				</div>
			</div>
			<div className={styles.number}>
				<p className={styles.numberColor}>{number}%</p>
			</div>

			<div className={styles.numberButtonContainer}>
				{number === 100 ? (
					<button onClick={handleNextStep} className={styles.button}>
						Lecimy dalej 💕
					</button>
				) : (
					<button
						onClick={handleCheck}
						disabled={animating || name1.trim() === "" || name2.trim() === ""}
						className={styles.button}>
						Pacnij łapką 💕
					</button>
				)}
			</div>
		</>
	)
}
