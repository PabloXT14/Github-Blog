import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as S from './styles'

// VALIDATION SCHEMA
const searchFormSchema = zod.object({
  query: zod.string(),
})

// TIPAGEM DOS DADOS DO FORMULÁRIO
type SearchFormInputs = zod.infer<typeof searchFormSchema>

interface SearchFormProps {
  postLength: number
  getPosts: (query?: string) => Promise<void>
}

export function SearchForm({ getPosts, postLength }: SearchFormProps) {
  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInputs) {
    await getPosts(data.query)
    reset()
  }

  return (
    <S.SearchFormContainer>
      <header>
        <strong>Publicações</strong>
        <span>{postLength} publicações</span>
      </header>
      <form onSubmit={handleSubmit(handleSearchPosts)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </form>
    </S.SearchFormContainer>
  )
}
