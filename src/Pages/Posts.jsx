// TODO - Get current page from url

// Use component state for current page for pagination
import { useState, useEffect } from 'react'
// Use React Query to cache posts
import { useQuery, useQueryClient } from '@tanstack/react-query'
import PostItem from '../Component/PostItem'
import { fetchPosts } from '../api/postsAPI'

function Posts() {
	const [currentPage, setCurrentPage] = useState(1)
	const maxPages = 10

	const queryClient = useQueryClient()

	const {
		isLoading,
		error,
		data: posts,
	} = useQuery(
		['posts', currentPage],
		() => fetchPosts(maxPages, currentPage),
		{
			staleTime: 60000 * 60 * 24,
			keepPreviousData: true,
		}
	)

	useEffect(() => {
		if (currentPage < maxPages) {
			const nextPage = currentPage + 1
			queryClient.prefetchQuery(['posts', nextPage], () =>
				fetchPosts(maxPages, nextPage)
			)
		}
	}, [currentPage, queryClient])

	if (isLoading) {
		return <span>Loading...</span>
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
				<button
					disabled={currentPage <= 1}
					onClick={() => setCurrentPage(currentPage - 1)}>
					Prev
				</button>
				<span>{currentPage}</span>
				<button
					disabled={currentPage >= maxPages}
					onClick={() => setCurrentPage(currentPage + 1)}>
					Next
				</button>
			</div>
		</>
	)
}
export default Posts
