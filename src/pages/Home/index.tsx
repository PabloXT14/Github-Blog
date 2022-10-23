import { NavLink } from 'react-router-dom'

export function Home() {
  return (
    <div>
      <h2>Home</h2>
      <NavLink to="/post" title="Post">
        Go to Post
      </NavLink>
    </div>
  )
}
