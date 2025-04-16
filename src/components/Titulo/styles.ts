import styled from 'styled-components'

import { LightTheme } from '../../themes/light'

import { Props } from '.'

export const Titulo = styled.h3<Props>`
  color: ${(props) => (props.theme as LightTheme).corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
