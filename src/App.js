import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './Pages/Home'
import Posts from './Pages/Posts'
import PostDetail from './Pages/PostDetail'

function App() {
	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<div className='container'>
					<h1>My App</h1>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/blog' element={<Posts />} />
						<Route path='/post/:id' element={<PostDetail />} />
					</Routes>
				</div>
				<ToastContainer />
				<ReactQueryDevtools />
			</BrowserRouter>
		</QueryClientProvider>
	)
}

export default App
