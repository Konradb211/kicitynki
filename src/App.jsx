import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Main } from "./components/Main/Main"
import { SuccesPage } from "./components/SuccesPage/SuccesPage"
import Rebus from "./components/Rebus/Rebus"
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/kici-meow' element={<SuccesPage />} />
					<Route path='/kici-meow/rebus' element={<Rebus />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
