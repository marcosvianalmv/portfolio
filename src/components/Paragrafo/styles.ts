import styled from 'styled-components'

import { LightTheme } from '../../themes/light'

import { Props } from '.'

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.tipo === 'principal'
      ? (props.theme as LightTheme).corPrincipal
      : (props.theme as LightTheme).corSecundaria};
  line-height: 22px;
`
