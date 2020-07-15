import React from 'react'

interface RenderHTMLProps {
  html: string
}

export function RenderHTML(props: RenderHTMLProps): JSX.Element {
  return <div dangerouslySetInnerHTML={{ __html: props.html }} />
}
