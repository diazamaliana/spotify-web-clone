import { extendTheme,    theme as defaultTheme } from '@chakra-ui/react'
import { brand, dark } from './colors'
  
  const Input = {
    defaultProps: {
      variant: "filled",
    },
  }
  
  const Button = {
    baseStyle: {
      borderRadius: '5px',
    },
  }
  
  const theme = extendTheme(
    {
      components: {
        Input,
        Button,
      },
      fonts: {
        body: `'Inter', ${defaultTheme.fonts.body}`,
        heading: `'Inter', ${defaultTheme.fonts.heading}`,
      },
      colors: { brand, dark },
      styles: {
        global: () => ({
          html: {
            scrollBehavior: 'smooth',
          },
          body: {
            bg: "dark.300",
            color: "dark.900"
          }
        }),
      },
    },
    // withDefaultColorScheme({ colorScheme: 'brand' })
  )
  
  export default theme