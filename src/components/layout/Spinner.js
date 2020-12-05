import React from 'react';
import spinner from './spinner.gif'

const Spinner=function(){
	return(
		<div>
			<img src={spinner} alt="loading.." 
				style={{margin:'40px auto', width:'200px',display:'block'}}
			/>
		</div>
	)
}

export default Spinner