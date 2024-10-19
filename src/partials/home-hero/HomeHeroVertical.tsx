import React from 'react'
import { Button } from '@components/button/Button'
import { useTranslation } from 'react-i18next'

import LaptopPhoneImage from './laptop-phone-image'

import { StyledSection, StyledTitle, ButtonNote } from './HomeHero.styles'

import {
  Content,
  Header,
  SubTitle,
  ButtonWrapper,
  StyledShapeFilled,
  StyledShapeOutline,
} from './HomeHeroVertical.styles'

export type HomeHeroVerticalProps = {
  loading: 'eager' | 'lazy'
  quality: number
  placeholder: 'none' | 'blurred'
}

const HomeHeroVertical = () => {
  const { t } = useTranslation()

  return (
    <StyledSection>
      <Content>
        <Header>
          <StyledTitle as="h1" light>
            {t('Sell your services online')}
          </StyledTitle>
          <SubTitle>
            {t(
              'Now you can more easily attract, win, and serve your clients online, all with a single platform.'
            )}
          </SubTitle>
          <ButtonWrapper>
            <Button
              label={t('Get started for free', { ns: 'common' })}
              to="https://b12.io/signup"
              variant="primary"
              as="anchor"
            />
            <ButtonNote>{t('No credit card required', { ns: 'common' })}</ButtonNote>
          </ButtonWrapper>
        </Header>
        <LaptopPhoneImage />
      </Content>
      <StyledShapeOutline />
      <StyledShapeFilled />
    </StyledSection>
  )
}

export default HomeHeroVertical
