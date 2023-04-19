import axios from 'axios'
import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import debounce from 'lodash/debounce'

const USERS_API_URL = 'https://reqres.in/api/users'
const DEBOUNCE_DELAY = 500

function AutoComplete({ onSelectItem }) {
	const [input, setInput] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [list, setList] = useState([])

	const request = async () => {
		const response = await axios.get(USERS_API_URL)
		console.log('requested response: ', response?.data?.data)
		return response?.data?.data ?? []
	}

	const debouncedUsers = debounce(
		async () => {
			const response = await request()
			setList(response)
			setIsLoading(false)
			return response
		},
		DEBOUNCE_DELAY,
		{ immediate: true }
	)

	useEffect(() => {
		const fetchUsers = async () => {
			setIsLoading(true)
			await debouncedUsers()
		}

		if (input.length > 0) {
			fetchUsers()
		} else {
			setList([])
		}

		return () => {
			debouncedUsers.cancel()
		}
	}, [input])

	function handleInput(e) {
		setInput(e.target.value)
	}

	function handleClick(item) {
		onSelectItem(item)
	}

	return (
		<div className='wrapper'>
			<div className={classnames('control', { 'is-loading': isLoading })}>
				<input className='input' type='text' onChange={handleInput} />
				<label htmlFor=''>Loading: {isLoading.toString()}</label>
			</div>
			<div className='list'>
				{!!list.length &&
					list.map((item, key) => (
						<li key={key}>
							<a
								key={key}
								className='list-item'
								onClick={() => handleClick(item)}
							>
								{item.email}
							</a>
						</li>
					))}
			</div>
		</div>
	)
}

export default AutoComplete
