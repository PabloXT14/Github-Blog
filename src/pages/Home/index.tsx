import { useCallback, useEffect, useState } from 'react'
import { PostItem } from './components/PostItem'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { githubAPI } from '../../libs/githubAPI'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Spinner } from '../../components/Spinner'

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
  const [isLoadingPosts, setIsLoadingPosts] = useState(false)
  const [animationParent] = useAutoAnimate<HTMLUListElement>()

  const getPosts = useCallback(async (query: string = '') => {
    try {
      setIsLoadingPosts(true)
      //  SÓ MOSTRAR ISSUES COM A LABEL 'PUBLISHED' NESTE REPOSITÓRIO NO GITHUB
      const response = await githubAPI.get(
        `/search/issues?q=${query.toLowerCase()}%20label:published%20repo:${username}/${repoName}`,
      )

      setPosts(response.data.items)
    } finally {
      setIsLoadingPosts(false)
    }
  }, [])

  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <S.HomeContainer className="container">
      <Profile />
      <SearchForm getPosts={getPosts} postLength={posts.length} />
      <S.PostsPreviewContainer>
        <ul ref={animationParent}>
          {isLoadingPosts ? (
            <Spinner />
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
