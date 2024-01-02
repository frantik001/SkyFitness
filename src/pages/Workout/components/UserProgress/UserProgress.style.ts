import { styled } from 'styled-components'

import { ColorType } from '@/theme/themeTypes'

type ProgressProps = {
  $percentage?: number
  $colorIndex?: number
}

const getProgressColor = (index: number) => {
  const colors = ['progressOrange', 'progressBlue', 'progressPurple']
  const order = index + 1
  return order % 2 === 0 ? colors[0] : order % 3 === 0 ? colors[1] : colors[2]
}

export const ProgressBlock = styled.div`
  padding: 32px 44px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.grayLight};
`

export const ProgressTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-bottom: 30px;
  text-align: center;
`

export const ProgressStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const ProgressStatsItem = styled.div<ProgressProps>`
  display: flex;
  align-items: center;
  > div:last-child {
    border: 2px solid
      ${({ theme, $colorIndex = 0 }) => {
        const color = getProgressColor($colorIndex) as keyof ColorType['colors']
        return theme.colors[color]
      }};
    > div {
      background: ${({ theme, $colorIndex = 0 }) => {
        const color = getProgressColor($colorIndex) as keyof ColorType['colors']
        return theme.colors[color]
      }};
    }
  }
`

export const ProgressName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  max-width: 230px;
`

export const ProgressBar = styled.div`
  box-sizing: border-box;
  width: 280px;
  height: 40px;
  border-radius: 22px;
  overflow: hidden;
`

export const Progress = styled.div<ProgressProps>`
  color: ${({ theme, $colorIndex = 0, $percentage = 0 }) => {
    const color = getProgressColor($colorIndex) as keyof ColorType['colors']
    return $percentage < 15 ? theme.colors[color] : theme.colors.white
  }};
  width: ${({ $percentage }) => $percentage + '%'};
  height: 100%;
  position: relative;
  > span {
    position: absolute;
    right: ${({ $percentage = 0 }) => {
      return $percentage < 15 ? '-4rem' : '1rem'
    }}
  }
`
