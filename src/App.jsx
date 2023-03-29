import { useState } from 'react'
import './App.css'
import ContainerInfo from './components/ContainerInfo'
import db from "./db/db.json"


const images = ["bg1","bg2","bg3","bg4"]

function App() {
 
  const getRamdomItem = (listItems) => {
    const randonIndex = Math.floor(Math.random() * listItems.length)
    return listItems[randonIndex]
  }

  const [quote, setQuote] = useState(getRamdomItem(db))
   
  const [bgImages, setBgImages] = useState(getRamdomItem(images))


  const handleNewQuote = () => {
    setQuote(getRamdomItem(db))
    setBgImages(getRamdomItem(images))
  }
 

  return (
    <div className={`App ${bgImages}`}>

    <ContainerInfo quote={quote} handleNewQuote={handleNewQuote} />

   
     
    </div>
  )
}
 
export default App
