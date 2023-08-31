import Header from '@components/header/Header'
import './App.scss'
import Footer from '@components/footer/Footer'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router-dom';
import Games from '@pages/games/Games';
import Game from '@pages/game/Game';
import { useEffect } from 'react';
import { IGameId } from 'types/games.types';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: undefined,
      paper: 'black',
    },
  },
});

interface obj {
  time: string
  data: IGameId
}


function App() {

  useEffect(() => {
    setInterval(() => {
      const timeNow = Date.now()
      const key = 'game'

      if (localStorage.getItem(key) != null) {

        const item = localStorage.getItem(key) as string
        const value: obj = JSON.parse(item)
        const differenceTime = timeNow - Number(value.time)

        if (differenceTime >= 10000) {
          localStorage.removeItem('game')
        }
      }
    }, 1000)
  }, [])

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className="app">
          <Header />
          <Routes>
            <Route path='/' element={<Games />} />
            <Route path='/game/:id' element={<Game />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
