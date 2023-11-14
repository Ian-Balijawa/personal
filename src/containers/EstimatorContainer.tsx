import { Flex, NumberInput, SimpleGrid, Stack, Title } from '@mantine/core'
import { PlatformCard, PlatformCardProps } from '../components/PlatformCard'
import {
	IconBrandAndroid,
	IconBrandAppstore,
	IconBrandReactNative,
	IconBrandTypescript,
	IconGasStation,
	IconGauge,
	IconManualGearbox,
} from '@tabler/icons-react'
import { SizeCard, data } from '../components/SizeCard'

export const HourlyRate = () => {
	return (
		<Stack spacing={0} mb="lg" mt={0}>
			<Title fw="lighter" fz={{ lg: 100, md: 70 }} >
				01
			</Title>
			<Title fz={{ lg: 30, md: 10 }} tt="uppercase">
				What's your expected current or expected average hourly rate?
			</Title>
			<Flex>
				<NumberInput type="number" />
			</Flex>
		</Stack>
	)
}

export const PlatformSelection = () => {
	const data: PlatformCardProps[] = [
		{
			mockdata: [
				{ label: 'Xcode', icon: IconBrandAppstore },
				{ label: 'Cocoa Touch Frameworks', icon: IconManualGearbox },
				{ label: 'NodeJS-Backend', icon: IconGasStation },
				{ label: 'Swift', icon: IconGauge },
			],
			image: 'https://1000logos.net/wp-content/uploads/2017/02/iOS-Logo-2013.jpg',
		},
		{
			mockdata: [
				{ label: 'Andriod studio', icon: IconBrandAndroid },
				{ label: 'Kotlin', icon: IconManualGearbox },
				{ label: 'React Native', icon: IconBrandReactNative },
				{ label: 'TypeScript', icon: IconBrandTypescript },
				{ label: 'Swift', icon: IconGauge },
			],
			image: 'https://1000logos.net/wp-content/uploads/2017/02/iOS-Logo-2013.jpg',
		},
		{
			mockdata: [
				{ label: 'Andriod studio', icon: IconBrandAndroid },
				{ label: 'Kotlin', icon: IconManualGearbox },
				{ label: 'React Native', icon: IconBrandReactNative },
				{ label: 'TypeScript', icon: IconBrandTypescript },
				{ label: 'Swift', icon: IconGauge },
			],
			image: 'https://1000logos.net/wp-content/uploads/2017/02/iOS-Logo-2013.jpg',
		},
		{
			mockdata: [
				{ label: 'Andriod studio', icon: IconBrandAndroid },
				{ label: 'Kotlin', icon: IconManualGearbox },
				{ label: 'React Native', icon: IconBrandReactNative },
				{ label: 'TypeScript', icon: IconBrandTypescript },
				{ label: 'Swift', icon: IconGauge },
			],
			image: 'https://1000logos.net/wp-content/uploads/2017/02/iOS-Logo-2013.jpg',
		},
	]

	const cards = data.map( card => <PlatformCard key={card.image} {...card} /> )

	return (
		<Stack spacing={0} mb="lg" mt={0}>
			<Title fw="lighter" fz={{ lg: 100, md: 70 }} >
				02
			</Title>
			<Title fz={{ lg: 30, md: 10 }} tt="uppercase">
				What platform do you need?
			</Title>
			<SimpleGrid
				cols={3}
				spacing="xl"
				mt={50}
				breakpoints={[{ maxWidth: 'md', cols: 1 }]}
			>
				{cards}
			</SimpleGrid>
		</Stack>
	)
}

export const ApplicationSize = () => {
	const cards = Array.from( { length: 3 } ).map( ( _, index ) => (
		<SizeCard key={index} {...data} />
	) )

	return (
		<Stack spacing={0} mb="lg" mt={0}>
			<Title fw="lighter" fz={{ lg: 100, md: 70 }} >
				03
			</Title>
			<Title fz={{ lg: 30, md: 10 }} tt="uppercase">
				How big is your app
			</Title>
			<SimpleGrid
				cols={3}
				spacing="xl"
				mt={50}
				breakpoints={[{ maxWidth: 'md', cols: 1 }]}
			>
				{cards}
			</SimpleGrid>
		</Stack>
	)
}

export const UIUX = () => {
	const cards = Array.from( { length: 3 } ).map( ( _, index ) => (
		<SizeCard key={index} {...data} />
	) )

	return (
		<Stack spacing={0} mb="lg" mt={0}>
			<Title fw="lighter" fz={{ lg: 100, md: 70 }} >
				04
			</Title>
			<Title fz={{ lg: 30, md: 10 }} tt="uppercase">
				What level of UI/UX would you need?
			</Title>
			<SimpleGrid
				cols={3}
				spacing="xl"
				mt={50}
				breakpoints={[{ maxWidth: 'md', cols: 1 }]}
			>
				{cards}
			</SimpleGrid>
		</Stack>
	)
}

export const UsersAndAccounts = () => {
	const cards = Array.from( { length: 10 } ).map( ( _, index ) => (
		<SizeCard key={index} {...data} />
	) )

	return (
		<Stack spacing={0} mb="lg" mt={0}>
			<Title fw="lighter" fz={{ lg: 100, md: 70 }} >
				05
			</Title>
			<Title fz={{ lg: 30, md: 10 }} tt="uppercase">
				Users, accounts & security
			</Title>

			<SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
				{cards}
			</SimpleGrid>
		</Stack>
	)
}

export const UserGeneratedContent = () => {
	const cards = Array.from( { length: 4 } ).map( ( _, index ) => (
		<SizeCard key={index} {...data} />
	) )

	return (
		<Stack spacing={0} mb="lg" mt={0}>
			<Title fw="lighter" fz={{ lg: 100, md: 70 }} >
				06
			</Title>
			<Title fz={{ lg: 30, md: 10 }} tt="uppercase">
				User generated content
			</Title>

			<SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
				{cards}
			</SimpleGrid>
		</Stack>
	)
}

export const DatesAndLocations = () => {
	const cards = Array.from( { length: 4 } ).map( ( _, index ) => (
		<SizeCard key={index} {...data} />
	) )

	return (
		<Stack spacing={0} mb="lg" mt={0}>
			<Title fw="lighter" fz={{ lg: 100, md: 70 }} >
				07
			</Title>
			<Title fz={{ lg: 30, md: 10 }} tt="uppercase">
				Dates and Locations
			</Title>

			<SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
				{cards}
			</SimpleGrid>
		</Stack>
	)
}

export const SocialAndEngament = () => {
	const cards = Array.from( { length: 5 } ).map( ( _, index ) => (
		<SizeCard key={index} {...data} />
	) )

	return (
		<Stack spacing={0} mb="lg" mt={0}>
			<Title fw="lighter" fz={{ lg: 100, md: 70 }} >
				08
			</Title>
			<Title fz={{ lg: 30, md: 10 }} tt="uppercase">
				Socail and Engament
			</Title>

			<SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
				{cards}
			</SimpleGrid>
		</Stack>
	)
}

export const BillingAndEcommerce = () => {
	const cards = Array.from( { length: 7 } ).map( ( _, index ) => (
		<SizeCard key={index} {...data} />
	) )

	return (
		<Stack spacing={0} mb="lg" mt={0}>
			<Title fw="lighter" fz={{ lg: 100, md: 70 }} >
				09
			</Title>
			<Title fz={{ lg: 30, md: 10 }} tt="uppercase">
				Billing and Ecommerce
			</Title>

			<SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
				{cards}
			</SimpleGrid>
		</Stack>
	)
}

export const AdminFeedbackAndAnalytics = () => {
	const cards = Array.from( { length: 8 } ).map( ( _, index ) => (
		<SizeCard key={index} {...data} />
	) )

	return (
		<Stack spacing={0} mb="lg" mt={0}>
			<Title fw="lighter" fz={{ lg: 100, md: 70 }} >
				10
			</Title>
			<Title fz={{ lg: 30, md: 10 }} tt="uppercase">
				Admin, Feedback and Analytics
			</Title>

			<SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
				{cards}
			</SimpleGrid>
		</Stack>
	)
}

export const ExternalAPISAndIntergrationHours = () => {
	const cards = Array.from( { length: 4 } ).map( ( _, index ) => (
		<SizeCard key={index} {...data} />
	) )

	return (
		<Stack spacing={0} mb="lg" mt={0}>
			<Title fw="lighter" fz={{ lg: 100, md: 70 }} >
				11
			</Title>
			<Title fz={{ lg: 30, md: 10 }} tt="uppercase">
				Admin, Feedback and Analytics
			</Title>

			<SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
				{cards}
			</SimpleGrid>
		</Stack>
	)
}

export const SecurityHours = () => {
	const cards = Array.from( { length: 3 } ).map( ( _, index ) => (
		<SizeCard key={index} {...data} />
	) )

	return (
		<Stack spacing={0} mb="lg" mt={0}>
			<Title fw="lighter" fz={{ lg: 100, md: 70 }} >
				12
			</Title>
			<Title fz={{ lg: 30, md: 10 }} tt="uppercase">
				Security Hours
			</Title>

			<SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
				{cards}
			</SimpleGrid>
		</Stack>
	)
}

export const AppSpecificDevelopment = () => {
	const cards = Array.from( { length: 1 } ).map( ( _, index ) => (
		<SizeCard key={index} {...data} />
	) )

	return (
		<Stack spacing={0} mb="lg" mt={0}>
			<Title fw="lighter" fz={{ lg: 100, md: 70 }} >
				13
			</Title>
			<Title fz={{ lg: 30, md: 10 }} tt="uppercase">
				App Specific Development
			</Title>

			<SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
				{cards}
			</SimpleGrid>
		</Stack>
	)
}
