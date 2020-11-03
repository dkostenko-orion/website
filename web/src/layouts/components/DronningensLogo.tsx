import React from 'react'
import styled from '@emotion/styled'
import { layout, LayoutProps } from 'styled-system'

interface LogoAttrs {
  textColor?: string
}

type LogoProps = LogoAttrs & LayoutProps

const LogoSvg = styled.svg<any>`
  .text {
    fill: white;
  }
  ${layout}
`

const DronningensLogo: React.FC<LogoProps> = ({ children, ...props }) => (
  <LogoSvg viewBox="0 0 200 26" {...props}>
    <path className="text" d="M32.4 1h6.8c1.4 0 2.7.2 3.9.8 1.2.5 2.3 1.2 3.2 2.1.9.9 1.6 1.9 2.2 3.1s.8 2.5.8 3.9-.2 2.7-.8 3.9c-.5 1.2-1.2 2.3-2.2 3.1-.9.9-2 1.6-3.2 2.1-1.2.5-2.5.8-3.9.8h-6.8V1zm6.8 15.3c.8 0 1.5-.2 2.1-.4.7-.3 1.2-.6 1.7-1.1.5-.5.9-1 1.1-1.7.3-.7.4-1.4.4-2.2 0-.8-.1-1.5-.4-2.2-.3-.7-.7-1.2-1.1-1.7s-1-1-1.7-1.2c-.7-.3-1.4-.4-2.1-.4H37v11h2.2zM59 6.1h.5c.2 0 .3 0 .4.1.1 0 .2 0 .4.1v4.4c-.1 0-.3-.1-.4-.2-.2 0-.3-.1-.5-.1h-.7c-.8 0-1.5.2-2 .8-.5.5-.7 1.2-.7 2.2v7.4h-4.3V6.3h3.2l.7 1.6c.2-.3.6-.6.9-.8.3-.2.7-.4 1.1-.6.4-.3.9-.4 1.4-.4zm2.7 7.4c0-1 .2-2.1.6-3 .4-.9.9-1.7 1.6-2.4.7-.7 1.5-1.2 2.4-1.6.8-.4 1.8-.5 2.8-.5s2 .2 2.9.6c.9.4 1.7.9 2.4 1.6s1.2 1.5 1.6 2.4c.4.9.6 1.9.6 3s-.2 2.1-.6 3c-.4.9-.9 1.7-1.6 2.4-.7.7-1.5 1.2-2.4 1.6s-1.8.4-2.9.4-2-.2-2.9-.6c-.9-.4-1.7-.9-2.4-1.6s-1.2-1.5-1.6-2.4c-.3-.8-.5-1.8-.5-2.9zm10.7 0c0-1.1-.3-2-.9-2.6s-1.4-1-2.2-1c-.9 0-1.6.3-2.2 1-.6.6-.9 1.5-.9 2.6s.3 2 .9 2.6c.6.6 1.4 1 2.2 1 .9 0 1.6-.3 2.2-1 .5-.6.9-1.5.9-2.6zm14.8-7.4c.9 0 1.7.2 2.4.4.7.3 1.3.7 1.9 1.2.5.5.9 1.2 1.2 1.9.3.8.4 1.6.4 2.5v8.5h-4.3v-7.7c0-.9-.2-1.7-.7-2.2-.5-.5-1.1-.8-2-.8s-1.5.3-2 .8-.7 1.2-.7 2.2v7.7h-4.3V6.3h3.2l.7 1.4c.3-.3.7-.6 1.2-.8.4-.2.9-.4 1.4-.5.4-.2 1-.3 1.6-.3zm17 0c.9 0 1.7.2 2.4.4.7.3 1.3.7 1.9 1.2.5.5.9 1.2 1.2 1.9.3.8.4 1.6.4 2.5v8.5h-4.3v-7.7c0-.9-.2-1.7-.7-2.2-.5-.5-1.1-.8-2-.8-.8 0-1.5.3-2 .8s-.7 1.2-.7 2.2v7.7h-4.3V6.3h3.2l.7 1.4c.3-.3.7-.6 1.2-.8.4-.2.9-.4 1.4-.5.4-.2 1-.3 1.6-.3zm8.9-3.7c0-.6.2-1.2.7-1.7.5-.5 1-.7 1.7-.7s1.2.2 1.7.7c.5.5.7 1 .7 1.7s-.2 1.2-.7 1.7c-.5.5-1 .7-1.7.7s-1.2-.2-1.7-.7c-.5-.6-.7-1.1-.7-1.7zm4.4 18.3h-4.3V6.3h4.3v14.4zm11.6-14.6c.9 0 1.7.2 2.4.4.7.3 1.3.7 1.9 1.2.5.5.9 1.2 1.2 1.9.3.8.4 1.6.4 2.5v8.5h-4.3v-7.7c0-.9-.2-1.7-.7-2.2-.5-.5-1.1-.8-2-.8-.8 0-1.5.3-2 .8s-.7 1.2-.7 2.2v7.7H121V6.3h3.2l.7 1.4c.3-.3.7-.6 1.2-.8.4-.2.9-.4 1.4-.5.4-.2 1-.3 1.6-.3zm14.9 0c.7 0 1.2.1 1.7.2.5.2.9.4 1.3.5.4.2.8.5 1.1.8l.7-1.4h3.2v13.2c0 .9-.2 1.8-.5 2.6s-.9 1.5-1.5 2.1c-.7.6-1.4 1-2.3 1.4-.9.3-1.9.5-3 .5-1.3 0-2.5-.2-3.3-.8-.9-.5-1.6-1-2.1-1.7-.6-.7-1.1-1.5-1.4-2.5l4.3-.3c.1.3.3.5.5.7.2.2.4.3.8.5.3.2.7.2 1.2.2.9 0 1.6-.3 2.2-.8.6-.6.9-1.2.9-2v-.8c-.2.2-.5.4-.9.6-.3.2-.7.3-1.1.4-.4.1-1 .2-1.6.2-.9 0-1.8-.2-2.6-.5-.8-.4-1.5-.8-2.1-1.5-.6-.6-1.1-1.3-1.4-2.2-.4-.8-.5-1.7-.5-2.7s.2-1.9.5-2.7.8-1.6 1.4-2.2c.6-.6 1.3-1.1 2.1-1.5.6-.1 1.5-.3 2.4-.3zm-2.4 7c0 .9.3 1.6.9 2.1.6.6 1.3.8 2.2.8.9 0 1.6-.3 2.2-.8.6-.6.9-1.3.9-2.1s-.3-1.6-.9-2.1c-.6-.6-1.3-.8-2.2-.8-.9 0-1.6.3-2.2.8-.6.4-.9 1.2-.9 2.1zm26.9 3.4c-.2.6-.5 1.2-.9 1.7-.4.6-.9 1-1.4 1.5s-1.2.8-2 1c-.8.2-1.6.4-2.6.4s-1.9-.2-2.8-.6c-.9-.4-1.7-.9-2.3-1.6s-1.2-1.5-1.6-2.4c-.4-.9-.6-1.9-.6-3 0-1 .2-2.1.6-3 .4-.9.9-1.7 1.6-2.4.7-.7 1.5-1.2 2.4-1.6.9-.4 1.9-.6 2.9-.6s1.9.2 2.8.5c.9.4 1.6.8 2.3 1.5.7.6 1.1 1.5 1.5 2.4.4.9.6 2 .6 3.1v.5c0 .2 0 .3-.1.4 0 .2 0 .3-.1.5h-10c.2.6.5 1 1 1.5.5.4 1.2.7 2 .7.4 0 .7 0 1-.2.3-.1.5-.2.7-.3.2-.1.4-.3.5-.5l4.5.5zm-6.6-6.6c-.8 0-1.5.2-2 .7-.5.5-.9 1-1 1.7h6c-.2-.6-.5-1.2-1-1.7s-1.2-.7-2-.7zm17.6-3.8c.9 0 1.7.2 2.4.4.7.3 1.3.7 1.9 1.2.5.5.9 1.2 1.2 1.9.3.8.4 1.6.4 2.5v8.5h-4.3v-7.7c0-.9-.2-1.7-.7-2.2-.5-.5-1.1-.8-2-.8s-1.5.3-2 .8-.7 1.2-.7 2.2v7.7h-4.3V6.3h3.2l.7 1.4c.3-.3.7-.6 1.2-.8.4-.2.9-.4 1.4-.5.4-.2 1-.3 1.6-.3zm12.4 9.9c.1.5.3.8.6 1.1.3.3.7.4 1.3.4.5 0 1-.1 1.3-.4.3-.2.4-.6.4-.8 0-.2-.2-.4-.6-.6-.4-.2-.8-.3-1.4-.5-.6-.2-1.1-.3-1.8-.6-.7-.2-1.3-.5-1.8-.8-.6-.4-1-.8-1.4-1.4-.4-.6-.6-1.3-.6-2.1 0-.6.1-1.1.4-1.7.2-.5.6-1 1.1-1.4.5-.4 1.1-.7 1.7-1 .7-.2 1.5-.4 2.3-.4 1.9 0 3.3.4 4.4 1.2 1 .8 1.6 1.9 1.8 3.1l-4.1.4c-.1-.3-.3-.6-.6-.8-.3-.2-.7-.4-1.2-.4s-.9.1-1.1.3c-.2.2-.4.5-.4.8 0 .3.2.5.6.6.4.2.8.3 1.4.4.6.2 1.1.3 1.8.6.7.2 1.3.5 1.8.8.5.4 1 .8 1.4 1.4s.6 1.3.6 2.1c0 .6-.1 1.2-.4 1.7-.2.6-.7 1-1.1 1.5-.5.4-1.1.8-1.9 1s-1.4.5-2.3.5c-2 0-3.5-.4-4.5-1.3-1-.8-1.6-2-1.9-3.4l4.2-.3z" />
    <path
      fill="#ee6a45"
      d="M12.9 20.4c.4-.8.8-1.7.2-2.6-.3-.6.2-.5.5-.5 3-.4 3.3-.8 2.4-3.7-.2-.8-.5-1.6-.8-2.4.5.1.8-.3 1.2-.6 1.7-1.4 3.4-2.7 5-4.1.3-.3.7-.7 1.2-.4.6.4.4.9.2 1.4-1.1 2.9-2.1 5.7-3.2 8.6-.2.6-.5 1.1.4 1.5.7.3.9 1 .7 1.8-.2.7-.7 1.1-1.5 1.1-2.1 0-4.2-.1-6.3-.1z"
    />
    <path
      fill="#fbd4a4"
      d="M7.5 11.3c.1 1-.4 2-.7 2.9-.6 2-.3 2.5 1.6 3.1 1.4.4 1.6 1.6.6 3.1-1 .2-2 .2-3 0-.4-.6-1.1-1.2-.7-2 .7-1.2 0-1.3-.9-1.2-.2 0-.4-.1-.6-.1-1.2-3.3-2.4-6.5-3.7-9.8C0 7-.2 6.5.3 6.2c.5-.4.8 0 1.2.3l6 4.8z"
    />
    <path
      fill="#fc994f"
      d="M3.9 17.2c.2 0 .4.1.6.1 1-.1 1.6 0 .9 1.2-.4.7.2 1.4.7 2-.5 0-1.1 0-1.6.1-1.1 0-2-.1-2.2-1.3-.3-1.3.5-1.8 1.6-2.1zm11.3-6.1c.3.8.6 1.6.8 2.4.9 2.9.6 3.3-2.4 3.7-.3 0-.8 0-.5.5.6 1 .2 1.8-.2 2.6-1.3.2-2.6.2-3.9 0 1-1.6.8-2.7-.6-3.1-1.9-.6-2.2-1.1-1.6-3.1.3-1 .8-1.9.7-2.9.9-1.2 1-2.7 1.5-4.1.6-1.8 1.1-3.5 1.7-5.4.1-.2.3-.7.8-.7s.7.4.8.8l2.9 9.3"
    />
  </LogoSvg>
)

export default DronningensLogo
