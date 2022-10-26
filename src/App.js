import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Posts from './Pages/Posts'

function App() {
	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<div>
					<h1>My App</h1>
					<Routes>
						<Route path='/blog' element={<Posts />} />
					</Routes>
				</div>
				<ToastContainer />
				<ReactQueryDevtools />
			</BrowserRouter>
		</QueryClientProvider>
	)
}

export default App
