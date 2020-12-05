import React from 'react'
import {Link} from 'react-router-dom'

const Track=(props)=>{
	const {track}=props
	return(
		<div className='col-md-6'>
			<div className='card shadow-sm mb-4'>
				<div className='card-body'>
					<h5>{track.artist_name}</h5>
					<p className='card-text'>
						<strong><i className='fa fa-play'></i> Track:</strong>: {track.track_name}
					</p>
					<br />
					<p className='card-text'>
						<strong><i className='fa fa-music'></i> Album</strong>: {track.album_name}
					</p>
					<br/>
					<Link to={`/lyrics/tracks/${track.track_id}`} className='btn btn-dark btn-block'>
						<i className='fa fa-chevron-right'></i> View Lyrics
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Track