import { NavLink } from 'react-router-dom'

export function Post() {
  return (
    <div>
      <h2>Post</h2>
      <NavLink to="/" title="Home">
        Go to Home
      </NavLink>
    </div>
  )
}
