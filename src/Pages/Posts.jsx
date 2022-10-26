// TODO - Get current page from url

// Use component state for current page for pagination
import { useState } from 'react'
// Use React Query to cache posts
import { useQuery } from '@tanstack/react-query'
import PostItem from '../Component/PostItem'

async function fetchPosts() {
	const response = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1'
	)

	return response.json()
}

function Posts() {
	const [currentPage, setCurrentPage] = useState(1)

	const {
		isLoading,
		error,
		data: posts,
	} = useQuery(['posts'], fetchPosts, { staleTime: 300000 })

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
		</>
	)
}
export default Posts
