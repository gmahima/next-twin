import Head from 'next/head'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
${tw `
 bg-gray-900 min-h-screen
`}
`

export default function Home() {
  return (
    <Container>
      asdf
    </Container>
  )
}
