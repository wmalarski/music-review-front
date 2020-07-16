import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import { AlbumTileData } from '../albums-feed'
import YouTubeIcon from '@material-ui/icons/YouTube'

interface YtAlbumFormProps {
  album: AlbumTileData
}

function buildLink(album: AlbumTileData): string {
  const value = `${album.performer.name} ${album.name}`.replace(' ', '+')
  return `https://www.youtube.com/results?search_query=${value}`
}

export default function YtAlbumForm(props: YtAlbumFormProps) {
  return (
    <IconButton
      color="inherit"
      onClick={() => {
        if (typeof window === 'undefined') return
        window.open(buildLink(props.album), '_blank')
      }}
      title="YouTube Search"
    >
      <YouTubeIcon />
    </IconButton>
  )
}
