import { FormEvent } from 'react'
import * as S from './styles'

export function SearchForm() {
  function handleSearchPost(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <S.SearchFormContainer>
      <header>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </header>
      <form onSubmit={handleSearchPost}>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
    </S.SearchFormContainer>
  )
}
