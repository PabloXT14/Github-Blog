import { fakePosts } from '../../data/fakePosts'
import { PostItem } from './components/PostItem'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import * as S from './styles'

export function Home() {
  return (
    <S.HomeContainer className="container">
      <Profile />
      <SearchForm />
      <S.PostsPreviewContainer>
        <ul>
          {fakePosts.map((post) => {
            return (
              <PostItem
                key={Math.floor(Date.now() * Math.random()).toString(36)}
                title={post.title}
                createdAt={post.created_at}
                description={post.description}
              />
            )
          })}
        </ul>
      </S.PostsPreviewContainer>
    </S.HomeContainer>
  )
}
