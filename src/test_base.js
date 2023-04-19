import axios from 'axios'
import React from 'react'
import classnames from 'classnames'
import lodash from 'lodash'

const ITEMS_API_URL = 'https://pokeapi.co/api/v2/pokemon/mightyena'
const DEBOUNCE_DELAY = 500

export default function Base() {
	return (
		<div className='wrapper'>
			<div className='control'>
				<input className='input' type='text' />
			</div>
			<div className='list' />
		</div>
	)
}
