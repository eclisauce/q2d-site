({
	mainmenu: {
		items: [
			{
				label: 'Start',
				link: '/',
				new_window: false
			},
			{
				label: 'Vad vi erbjuder',
				link: '/product',
				new_window: false
			},
			{
				label: 'Utbildning',
				link: '/workshop',
				new_window: false
			},
			//Finns där inga jobb just nu så stäng av denna routen genom att kommentera bort det så försvinner den från navbaren.
			{
				label: 'Jobb',
				link: '/work',
				new_window: false
			},
			{
				label: 'Om oss',
				link: '/about',
				new_window: false
			}
		]
	}
})
