import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const pageStyles = {
  backgroundColor: "#ece7e1",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>MM Portfolio</title>
