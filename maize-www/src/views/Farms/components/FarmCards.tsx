import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import Countdown, { CountdownRenderProps } from 'react-countdown'

import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Loader from '../../../components/Loader'

import useFarms from '../../../hooks/useFarms'

import { Farm } from '../../../contexts/Farms'

import { getPoolStartTime, getPoolEndTime } from '../../../yamUtils'

const FarmCards: React.FC = () => {
  const [farms] = useFarms()

  const rows = farms.reduce<Farm[][]>((farmRows, farm) => {
    const newFarmRows = [...farmRows]
    if (newFarmRows[newFarmRows.length - 1].length === 3) {
      newFarmRows.push([farm])
    } else {
      newFarmRows[newFarmRows.length - 1].push(farm)
    }
    return newFarmRows
  }, [[]])

  return (
    <StyledCards>
      {!!rows[0].length ? rows.map((farmRow, i) => (
        <StyledRow key={i}>
          {farmRow.map((farm, j) => (
            <React.Fragment key={j}>
              <FarmCard farm={farm} />
              {(j === 0 || j === 1) && <StyledSpacer />}
            </React.Fragment>
          ))}
        </StyledRow>
      )) : (
          <StyledLoadingWrapper>
            <Loader text="Loading farms" />
          </StyledLoadingWrapper>
        )}
    </StyledCards>
  )
}

interface FarmCardProps {
  farm: Farm,
}
const WARNING_TIMESTAMP = 1598000400000

const FarmCard: React.FC<FarmCardProps> = ({ farm }) => {
  const [startTime, setStartTime] = useState(0)
  const [endTime, setEndTime] = useState(0)

  const getStartTime = useCallback(async () => {
    if(farm.depositToken=='hnp'){const startTime = await getPoolStartTime(farm.contract);} //xixi
    else{const startTime = 1598270400;}
    setStartTime(startTime)
  }, [farm, setStartTime])

  const getEndTime = useCallback(async () => {    
    if(farm.depositToken=='hnp'){const endTime = await getPoolEndTime(farm.contract)} //xixi
    else{const endTime = 1598270400;}
    setEndTime((endTime))
  }, [farm, setStartTime])

  const renderer = (countdownProps: CountdownRenderProps) => {
    const { days, hours, minutes, seconds } = countdownProps
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const totalhours = days * 24 + hours;
    const paddedHours = hours < 10 ? `0${hours}` : hours
    return (
      <span style={{ width: '100%' }}>{totalhours > 24 ? totalhours : paddedHours}:{paddedMinutes}:{paddedSeconds}</span>
    )
  }

  useEffect(() => {
    if (farm) {
      getStartTime()
      getEndTime()
    }
  }, [farm, getStartTime, getEndTime])

  const timeLeft = Number((endTime * 1000) - Date.now())
  const poolActive = ((startTime * 1000)) - Date.now() <= 0
  return (<>
  {farm.name === "Uni the Union" || farm.name === "Big Balancer" || farm.name === "To Da Moon" ?
  <StyledCardWrapper>
      <Card>
        <CardContent>
          <StyledContent>
            <CardIcon>{farm.icon}</CardIcon>
            <StyledTitle>{farm.name}</StyledTitle>
            <StyledDetails>
              <StyledDetail>Deposit {farm.depositToken.toUpperCase()}</StyledDetail>
              <StyledDetail>Earn {farm.earnToken.toUpperCase()}</StyledDetail>
            </StyledDetails>  
            {Date.now() < 1599480000 * 1000 ? (  //1599220800
              <>
              <Button
              disabled={true}
              text={'Waiting'}
              to={`/farms/${farm.id}`}
              />
            <br/>
            {
            <span style={{textAlign: 'center'}}>
            <Countdown date={Number(1599480000 * 1000)} renderer={renderer} />
            </span>
            }
            </>
            )
              : (<>

                <Button
              disabled={false}
              text={'Select'}
              to={`/farms/${farm.id}`}
            />  

                </>
                )}
            </StyledContent>
          </CardContent>
        </Card>
      </StyledCardWrapper>
  :
    <StyledCardWrapper>
      <Card>
        <CardContent>
          <StyledContent>
            <CardIcon>{farm.icon}</CardIcon>
            <StyledTitle>{farm.name}</StyledTitle>
            <StyledDetails>
              <StyledDetail>Deposit {farm.depositToken.toUpperCase()}</StyledDetail>
              <StyledDetail>Earn {farm.earnToken.toUpperCase()}</StyledDetail>
            </StyledDetails>  
            {Date.now() < 1599393600 * 1000 ? (  //1598270390
              <>
              <Button
              disabled={true}
              text={'Waiting'}
              to={`/farms/${farm.id}`}
            />  
            <br/>
            {
            <span style={{textAlign: 'center'}}>
            <Countdown date={Number(1599393600 * 1000)} renderer={renderer} />
            </span>
            }
            </>
            )
              : (<>

                <Button
              disabled={false}
              text={'Select'}
              to={`/farms/${farm.id}`}
            />  
            <br/>
            
                </>
                )}
            </StyledContent>
          </CardContent>
        </Card>
      </StyledCardWrapper>
    }
  </>
  )
}

const StyledCardAccent = styled.div`
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  border-radius: 12px;
  filter: blur(4px);
  position: absolute;
  top: -2px; right: -2px; bottom: -2px; left: -2px;
  z-index: -1;
`

const StyledCards = styled.div`
  width: 900px;
`

const StyledLoadingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`

const StyledRow = styled.div`
  display: flex;
  margin-bottom: ${props => props.theme.spacing[4]}px;
`

const StyledCardWrapper = styled.div`
  display: flex;
  width: calc((900px - ${props => props.theme.spacing[4]}px * 2) / 3);
  position: relative;
`

const StyledTitle = styled.h4`
  color: ${props => props.theme.color.grey[600]};
  font-size: 24px;
  font-weight: 700;
  margin: ${props => props.theme.spacing[2]}px 0 0;
  padding: 0;
`

const StyledContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const StyledDenominator = styled.div`
  text-align: center;
  margin-left: 8px;
  font-size: 18px;
  color: ${props => props.theme.color.grey[600]};
`

const StyledSpacer = styled.div`
  height: ${props => props.theme.spacing[4]}px;
  width: ${props => props.theme.spacing[4]}px;
`

const StyledDetails = styled.div`
  margin-bottom: ${props => props.theme.spacing[6]}px;
  margin-top: ${props => props.theme.spacing[2]}px;
  text-align: center;
`

const StyledDetail = styled.div`
  color: ${props => props.theme.color.grey[500]};
`

export default FarmCards
