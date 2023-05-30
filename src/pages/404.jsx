import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1>404: Página não encontrada</h1>
    <p>Você acabou de acessar uma rota que não existe... que tristeza.</p>
    <p>Volte para a <a href="/">página inicial</a> e tente novamente.</p>

  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
