import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Quando começamos a ter casos muitos especifícos da minha aplicação eu posso extender o tema do tailwind ou definir valores arbitrários
    extend: {
      gridTemplateColumns: {
        app : 'minmax(18rem, 20rem) 1fr',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0 , 1fr)'
      },
      borderWidth : {
        6 : '6px'
      },
      colors: {
        violet: {
          25: '#fcfaff',
        }
      }
    },
  },
  plugins: [],
}
export default config

