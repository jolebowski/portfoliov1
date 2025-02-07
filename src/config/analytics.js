import ReactGA from 'react-ga4'

export const initGA = () => {
  ReactGA.initialize('G-9JVXN8WVTG')
}

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
}
