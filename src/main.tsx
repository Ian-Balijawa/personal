import { SpotlightProvider } from '@mantine/spotlight'
import type { SpotlightAction } from '@mantine/spotlight'
import {
	IconHome,
	IconDashboard,
	IconFileText,
	IconSearch,
} from '@tabler/icons-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider,
} from '@mantine/core'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<AppWrapper />
		</BrowserRouter>
	</React.StrictMode>,
)

function AppWrapper() {
	const [colorScheme, setColorScheme] = React.useState<ColorScheme>('light')
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

	const actions: SpotlightAction[] = [
		{
			title: 'Home',
			description: 'Get to home page',
			onTrigger: () => console.log('Home'),
			icon: <IconHome size="1.2rem" />,
		},
		{
			title: 'Dashboard',
			description: 'Get full information about current system status',
			onTrigger: () => console.log('Dashboard'),
			icon: <IconDashboard size="1.2rem" />,
		},
		{
			title: 'Documentation',
			description: 'Visit documentation to lean more about all features',
			onTrigger: () => console.log('Documentation'),
			icon: <IconFileText size="1.2rem" />,
		},
	]

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				theme={{ colorScheme, primaryColor: 'blue' }}
				withGlobalStyles
				withNormalizeCSS
			>
				<App />
				<SpotlightProvider
					actions={actions}
					searchIcon={<IconSearch size="1.2rem" />}
					searchPlaceholder="Search..."
					shortcut="ctrl + /"
					cleanQueryOnClose
					nothingFoundMessage="Nothing found..."
				/>
			</MantineProvider>
		</ColorSchemeProvider>
	)
}
