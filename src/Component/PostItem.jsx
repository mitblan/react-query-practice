import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

function PostItem(props) {
	const { userId, id, title, body } = props.post
	async function fetchComments() {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}/comments`
		)

		return response.json()
	}

	const {
		isLoading: commentLoading,
		error: commentError,
		data: comments,
	} = useQuery(['comments', id], fetchComments, { staleTime: 300000 })

	if (commentLoading) {
		return <h2>Comments Loading...</h2>
	}

	if (commentError) {
		return <h2>Comment Error: {commentError.message}</h2>
	}
	const commentCount = Object.keys(comments).length

	return (
		<div className='post-list'>
			<Link to={'/post/' + id}>{title}</Link> |{' '}
			<span>Comments: {commentCount}</span>
		</div>
	)
}
export default PostItem
