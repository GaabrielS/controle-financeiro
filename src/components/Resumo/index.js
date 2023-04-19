import React from 'react'
import ResumoItem from '../ResumoItem'
import * as C from './styles'

const Resumo = ({ income, expense, total }) => {
  return (
    <C.Container>
      <ResumoItem title="Entradas" value={income} />
      <ResumoItem title="Saídas" value={expense} />
      <ResumoItem title="Total" value={total} />
    </C.Container>
  )
}

export default Resumo
