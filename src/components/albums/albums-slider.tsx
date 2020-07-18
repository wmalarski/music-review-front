import React, { Dispatch } from 'react'
import { Slider, createStyles, makeStyles, Theme } from '@material-ui/core'

interface AlbumSliderProps {
  range: number[]
  setRange: Dispatch<number[]>
}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    slider: {
      marginTop: theme.spacing(6),
      padding: theme.spacing(1),
    },
  }),
)

const MIN_YEAR = 1950
const MAX_YEAR = new Date().getFullYear()

export default function AlbumSlider(props: AlbumSliderProps) {
  const classes = useStyles()
  return (
    <Slider
      className={classes.slider}
      value={props.range.length == 0 ? [MIN_YEAR, MAX_YEAR] : props.range}
      onChange={(_event, newValue) => {
        if (typeof newValue !== 'number') props.setRange(newValue)
      }}
      valueLabelDisplay="on"
      aria-labelledby="range-slider"
      color={'secondary'}
      min={MIN_YEAR}
      max={MAX_YEAR}
    />
  )
}
