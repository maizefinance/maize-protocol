import React from 'react'
import styled from 'styled-components'

interface PageHeaderProps {
  icon?: React.ReactNode,
  subtitle?: React.ReactNode,
  title?: string,
  head?: string,
}

const PageHeader: React.FC<PageHeaderProps> = ({ head, icon, subtitle, title }) => {
  return (

    title === '1' ? (<StyledPageHeader1>
          <StyledIcon>{icon}</StyledIcon>
          <StyledHead>{head}</StyledHead>
          
          <StyledSubtitle>{subtitle}</StyledSubtitle>
        </StyledPageHeader1>) :(<StyledPageHeader>
          <StyledIcon>{icon}</StyledIcon>
          <StyledTitle>{title}</StyledTitle>
          <StyledSubtitle>{subtitle}</StyledSubtitle>
        </StyledPageHeader>)
  )
}

const StyledPageHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: ${props => props.theme.spacing[6]}px;
  padding-top: ${props => props.theme.spacing[6]}px;
`

const StyledPageHeader1 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: -10px;
  padding-top: -10px;
`

const StyledIcon = styled.div`
  font-size: 96px;
  height: 96px;
  line-height: 96px;
  text-align: center;
  width: 96px;
  margin-right: 40px;
`

const StyledHead = styled.div`
  font-size: 64px;
  height: 96px;
  line-height: 96px;
  text-align: center;
  font-weight: 700;
  margin-right: 40px;
  padding-bottom: 10px;
`

const StyledTitle = styled.h1`
  color: ${props => props.theme.color.grey[600]};
  font-size: 42px;
  font-weight: 700;
  margin: 0;
  padding: 0;
`

const StyledSubtitle = styled.h3`
  color: ${props => props.theme.color.grey[400]};
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 0;
`

export default PageHeader