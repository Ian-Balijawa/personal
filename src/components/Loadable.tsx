import { Box, Flex } from '@mantine/core'
import { Suspense } from 'react'

export const Loadable = <P extends object>( WrappedComponent: React.FunctionComponent<P> ) => {
	const Component: React.FC<P> = props => {
		return (
			<Suspense
				fallback={
					<Flex align="center" justify="center" h="100vh">
						<Box className="loader" />
					</Flex>
				}
			>
				<WrappedComponent {...props} />
			</Suspense>
		)
	}
	return Component
}
