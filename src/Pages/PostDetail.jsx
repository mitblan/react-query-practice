import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

function PostDetail() {
	const params = useParams()
	const { id } = params
	console.log(id)

	async function fetchPost() {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		)

		return response.json()
	}

	async function fetchPostComments() {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}/comments`
		)

		return response.json()
	}

	const {
		isLoading,
		error,
		data: post,
	} = useQuery(['post', id], fetchPost, { staleTime: 300000 })

	const {
		isLoading: commentLoading,
		error: commentError,
		data: comments,
	} = useQuery(['comments', id], fetchPostComments, {
		staleTime: 300000,
	})

	if (isLoading || commentLoading) {
		return <h1>Loading...</h1>
	}

	if (error || commentError) {
		return <h1>Error: {error.message}</h1>
	}

	const commentCount = Object.keys(comments).length

	return (
		<div>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
			<div>
				<h3>{commentCount} Comments</h3>
				<div>
					{comments.map((comment) => (
						<div key={comment.id}>
							<h4>{comment.email}</h4>
							<p>{comment.body}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default PostDetail