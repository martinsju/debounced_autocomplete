import axios from 'axios'
import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import lodash from 'lodash'

//

function AutoCompleteV1({ onSelectItem }) {
	const [input, setInput] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [list, setList] = useState([])
	const [querySearch, setQuerySearch] = useState([])

	//usar params no axios, SE USERS = Q
	// const params = 'users'

	useEffect(() => {
		console.log('loading changed: ', isLoading)
	}, [isLoading])

	//buscar na API a cada 500ms para nao fazer muitas requisições à API
	useEffect(() => {
		setIsLoading(true)
		const handler = setTimeout(() => {
			const loadList = async function () {
				await axios
					.get('https://reqres.in/api/users')
					//na aplicação de teste, usar: , { params: { q: {input} } }
					.then((response) => {
						setList(response.data.data)
						console.log(response.data.data)
					})
					.catch(() => {
						console.log('something got wrong here')
					})
				// const response = await axios.get('https://reqres.in/api', { params })
				//query parameter q: 'https://example.com/api/items?q'
				//or maybe just: 'https://example.com/api/items' and the "query" is the input (try both)

				console.log('buscou na API')
			}
			setIsLoading(false)

			loadList()
			setQuerySearch(list)
			// searchList()
		}, 500)

		return () => {
			clearTimeout(handler)
			setIsLoading(false)
		}
	}, [input])

	//nao precisa dessa função pq ele nao pede pra verificar o input
	// function searchList() {
	// let matches = []
	//
	// retorna todos os valores caso o input comece com "q"
	// if (input.length > 0 && input.at(0) === 'q') {
	//se falhar com a procura do q sendo o primeiro, usar apenas um "includes("q")
	// if (input === 'query') {
	// 	//aqui é pra o input ser "query"
	// 	console.log('input: ', input)
	// 	setQuerySearch(list)
	// 	console.log('list is ', list)
	// } else {
	// 	setQuerySearch([])
	// 	console.log('not found')
	// }
	//
	//retorna apenas o que foi pesquisado
	// const newFilteredData = list.filter((value) => {
	// 	return value.data.email.includes(input)
	// })
	// setQuerySearch(newFilteredData)
	// }

	function handleInput(e) {
		setInput(e.target.value)
	}

	function handleClick(item) {
		onSelectItem(item)
	}

	//alguma coisa pra settar o cara escolhido pra o input mas isso ocasionou muitos re-renders
	// function handleItem(item) {
	// 	setInput({input: item})
	// }

	return (
		<div className='wrapper'>
			<div className={classnames('control', { 'is-loading': isLoading })}>
				{/* here the user enters a query, so maybe the "q" query doesnt need to be at the endpoint */}
				<input className='input' type='text' onChange={handleInput} />
			</div>
			<div className='list'>
				{querySearch &&
					querySearch.map((item, key) => (
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

export default AutoCompleteV1
