import React from 'react';
import axios from 'axios';
import {Consumer} from '../../context'

class Search extends React.Component{
	state={
		trackTitle:""
	}
	onChange=(e)=>{
		this.setState({[e.target.name]:e.target.value})
	}
	findTrack=(dispatch,e)=>{
		e.preventDefault()
		axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
			.then((res)=>{
				console.log(res.data)
				dispatch({
					type:"SEARCH_TRACKS",
					payload:res.data.message.body.track_list
				})
				this.setState({trackTitle:""})
			}).catch((error)=>{
				console.log(error)
			})
	}
	render(){
		return(
			<Consumer>
				{values=>{
					const {dispatch}=values
					return(
						<div className='card card-body mb-4 p-4'>
							<h1 className='display-4 text-center'>
								<i className='fa fa-music'></i> Search For A Song
							</h1>
							<p className='lead text-center'>
								Get the lyrics for any song
							</p>
							<form onSubmit={this.findTrack.bind(this,dispatch)}>
								<div className='form-group'>
									<input type="text" placeholder='Song title...' 
										className='form-control form-control-lg'
										value={this.state.trackTitle}
										name='trackTitle'
										onChange={this.onChange}
									 />
								</div>
								<button type='submit' className='btn btn-primary btn-lg btn-block mb-5'>
									Get Track Lyrics
								</button>
							</form>
						</div>
					)
				}}
			</Consumer>	
		)
	}
}

export default Search