import { PostHeader } from './components/PostHeader'
import { useCallback, useEffect, useState } from 'react'
import { IPost } from '../Home'
import { useParams } from 'react-router-dom'
import { githubAPI } from '../../libs/githubAPI'

import * as S from './styles'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Post() {
  const [postData, setPostData] = useState<IPost>({} as IPost)
  const [isLoadingPostData, setIsLoadingPostData] = useState(false)

  // PEGANDO PARÂMETRO DA ROTA DO REACT ROUTER DOM
  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoadingPostData(true)

      const response = await githubAPI.get<IPost>(
        `/repos/${username}/${repoName}/issues/${id}`,
      )

      setPostData(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoadingPostData(false)
    }
  }, [id])

  useEffect(() => {
    getPostDetails()
  }, [getPostDetails])

  return (
    <S.PostContainer className="container">
      <PostHeader postData={postData} isLoadingPostData={isLoadingPostData} />
    </S.PostContainer>
  )
}
