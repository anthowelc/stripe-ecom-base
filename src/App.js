import React from 'react'
import styled from 'styled-components'
import WithPanier from './context/WithPanier'

import 'typeface-germania-one'
import 'typeface-zilla-slab'
import 'typeface-lato'
import 'sanitize.css'

import Header from './components/Header'
import LivreItem from './components/LivreItem'
import Panier from './components/Panier'

const Layout = styled.div`
  border: 5px solid GAINSBORO;
  background: DARKSLATEGRAY;
  color: GAINSBORO;
  font-family: 'lato', sans-serif;
  padding-bottom: 64px;
`

const App = ({ context }) => (
  <Layout>
    <Header />

    <LivreItem
      key={context.state.livres['livre1'].id}
      livre={context.state.livres['livre1']}
    />

    <Panier />
  </Layout>
)

export default WithPanier(App)
