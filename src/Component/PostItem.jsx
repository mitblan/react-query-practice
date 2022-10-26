import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function PostItem(props) {
	const { userId, id, title, body } = props.post

	return (
		<div className='post-list'>
			<Link to={'/post/' + id}>{title}</Link>
		</div>
	)
}
export default PostItem
