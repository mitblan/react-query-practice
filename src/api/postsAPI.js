const postAPI = 'http://jsonplaceholder.typicode.com/posts'

export const fetchPosts = async (limit, page) => {
	const response = await fetch(postAPI + '?_limit=' + limit + '&_page=' + page)

	return response.json()
}

export const fetchPost = async (postId) => {
	const response = await fetch(postAPI + '/' + postId)

	return response.json()
}

export const fetchPostComments = async (postId) => {
	const response = await fetch(postAPI + '/' + postId + '/comments')

	return response.json()
}
