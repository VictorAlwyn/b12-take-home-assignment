import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { mq, theme } from '@styles/theme'

import ShapeFilledV2 from './images/shape-filled-v2.inline.svg'
import ShapeOutlineV2 from './images/shape-outline-v2.inline.svg'

export const Content = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Header = styled.div`
  text-align: center;
  position: relative;
  z-index: 20;

  h1 {
    text-align: center;
  }
`

export const SubTitle = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: ${theme.colors.text.white};
  margin: 0 auto;
  font-weight: 400;
  text-align: center;
  max-width: 70%;

  ${mq['md']} {
    font-size: 24px;
    line-height: 35px;
    max-width: 551px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
  flex-direction: row;
  margin-top: 56px;
  gap: 24px;
`

const shapeBaseStyles = css`
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 20px;

  ${mq['md']} {
    width: auto;
    bottom: -20px;
  }
`

export const StyledShapeFilled = styled(ShapeFilledV2)`
  ${shapeBaseStyles}
  right: 3%;
`

export const StyledShapeOutline = styled(ShapeOutlineV2)`
  ${shapeBaseStyles}
  left: 3%;
`
