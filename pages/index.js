import Head from 'next/head'
import styled, {css} from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
${tw `
 bg-testing-100 min-h-screen text-testing-200 flex flex-col
`}
`

export default function Home() {
  return (
    <Container>
      <div css={tw`font-bold text-xl bg-gray-100 m-64 text-center rounded p-24`}>next.js + twin.macro</div>
    </Container>
  )
}
