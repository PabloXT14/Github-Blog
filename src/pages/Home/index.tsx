import { useCallback, useEffect, useState } from 'react'
import { PostItem } from './components/PostItem'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { githubAPI } from '../../libs/githubAPI'

import * as S from './styles'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export interface IPost {
  number: number
  title: string
  body: string
  created_at: string
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const getPosts = useCallback(async (query: string = '') => {
    try {
      setIsLoading(true)
      const response = await githubAPI.get(
        `/search/issues?q=${query}%20repo:${username}/${repoName}`,
      )

      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <S.HomeContainer className="container">
      <Profile />
      <SearchForm />
      <S.PostsPreviewContainer>
        <ul>
          {isLoading ? (
            <p>Is Loading...</p>
          ) : (
            posts.map((post) => {
              return <PostItem key={post.number} post={post} />
            })
          )}
        </ul>
      </S.PostsPreviewContainer>
    </S.HomeContainer>
  )
}
