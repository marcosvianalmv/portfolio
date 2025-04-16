import styled from 'styled-components'

import { LightTheme } from '../../themes/light'

export const Card = styled.div`
  border: 1px solid ${(props) => (props.theme as LightTheme).corDaBorda};
  padding: 16px;
`
export const LinkBotao = styled.a`
  color: ${(props) => (props.theme as LightTheme).corDeFundo};
  font-size: 14px;
  background-color: ${(props) => (props.theme as LightTheme).corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
