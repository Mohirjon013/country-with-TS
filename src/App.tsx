
import './App.css'
import CountriesList from './components/CountriesList'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header title='All Countries' extraStyle='px-3' />
      <CountriesList/>
    </>
  )
}

export default App
