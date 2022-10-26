import { Link } from 'react-router-dom'

function Home() {
	return (
		<nav>
			Navigation:
			<ul>
				<li>
					<Link to='/blog/'>Blog</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Home
