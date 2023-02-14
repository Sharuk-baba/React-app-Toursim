import React from 'react'
import player from './../../css/music.module.css'
function Details(props) {
    return (
        <div className={player.c_player_details}>
            <div className={player.details_img}>
                <img src={props.song.img_src} alt="" />
            </div>
            <h3 className={player.details_title}>{props.song.title}</h3>
            <h4 className={player.details_artist}>{props.song.artist}</h4>
        </div>
    )
}

export default Details
