import React from 'react'
import * as C from './styles'

const ResumoItem = ({ title, value }) => {
  return (
    <C.Container>
      <C.Header>
        <C.Headertitle>{title}</C.Headertitle>
      </C.Header>
      <C.Total>{value}</C.Total>
    </C.Container>
  )
}

export default ResumoItem
