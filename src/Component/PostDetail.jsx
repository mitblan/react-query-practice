import { useQuery } from '@tanstack/react-query'

function PostDetail(props) {
	const { userId, id, title, body } = props.post

	return (
		<div>
			<h3>{title}</h3>
		</div>
	)
}
export default PostDetail
