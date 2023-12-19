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
        },
        error : {
          25: '#FFFBFA',
          50: '#FEF3F2',
          100: '#FEE4E2',
          200: '#FECDCA',
          300: '#FDA29B',
          400: '#F97066',
          500: '#F04438',
          600: '#D92D20',
          700: '#B42318',
          800: '#912018',
          900: '#7A271A',
        }

      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1' },
        },
        slideUpAndFade: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 0.3s linear',
      },
    },
  },
  plugins: [],
}
export default config

/**
 * 1. Quando começamos a ter casos muitos especifícos da minha aplicação eu posso extender o tema do tailwind ou definir valores arbitrários
 * 2. Quando eu quero adicionar um novo plugin eu posso adicionar aqui
 * 
 *  * Keyframes
 * Keyframes é usado para determinar como a animação deve se comportar durante um ciclo de animação, detremina as propriedades que devem ser animadas e seus valores iniciais e finais.
 * 
 * * Animation
 * Animation é usado para determinar como a animação deve se comportar durante um ciclo de animação, determina quais keyframes devem ser aplicados durante o ciclo de animação, determina a duração da animação e como ela deve ser atrasada antes de começar.
 */
