// import { useState, useEffect } from 'react'
import AutoComplete from './autocomplete_v2'

function App() {
	function onSelectItem(item) {
		console.log('clicked ', item.email)
	}

	return <AutoComplete onSelectItem={onSelectItem} />
}

export default App
