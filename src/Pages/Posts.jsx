// TODO - Get current page from url

// Use component state for current page for pagination
import { useState } from 'react'
// Use React Query to cache posts
import { useQuery } from '@tanstack/react-query'
import PostItem from '../Component/PostItem'

function Posts() {
	const [currentPage, setCurrentPage] = useState(1)

	async function fetchPosts() {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${currentPage}`
		)

		return response.json()
	}

	const {
		isLoading,
		error,
		data: posts,
	} = useQuery(['posts', currentPage], () => fetchPosts(currentPage), {
		staleTime: 300000,
	})

	if (isLoading) {
		return <h1>Loading...</h1>
	}

	if (error) {
		return (
			<h1>
				Error: <h2>{error.message}</h2>
			</h1>
		)
	}

	return (
		<>
			{posts.map((post) => (
				<PostItem key={post.id} post={post} />
			))}
			<div className='pagination-wrapper'>
				<button onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
				<span>{currentPage}</span>
				<button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
			</div>
		</>
	)
}
export default Posts
