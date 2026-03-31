import { useState } from 'react'
import './App.css'
import Baner from './component/Baner'
import Baners from './component/Baners'
import Banner from './component/Banner'
import Bannerers from './component/Bannerers'
import Main from './component/Main'
import Modelse from './component/Modelse'
import NavBar from './component/NavBar'
import Futter from './Futter'
import Card from './component/Card'




const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}

const modelPromis = getModels()
function App() {
  const [actibTab, setActibTab] = useState("products")
  const [cards,setCards]= useState([])
  return (
    <>
      <NavBar />
      <Main />
      <Banner />
      <div className='max-w-[1600px] max-h-[196px] mx-auto mt-20'>
        <div className='text-center space-y-2'>
          <h1 className='font-bold text-4xl'>Premium Digital Tools</h1>
          <p className='font-semibold text-gray-400'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
          <div className="tabs tabs-box justify-center bg-transparent">
            <input type="radio" name="my_tabs_1" className="tab w-40 rounded-full" aria-label="Products" defaultChecked
              onClick={() => setActibTab("products")} />
            <input type="radio" name="my_tabs_1" className="tab w-40 rounded-full" aria-label={`Cart (${cards.length})`} 
              onClick={() => setActibTab("card")}
            />
          </div>
        </div>
      </div>
      {actibTab === "products" && <Modelse modelPromis={modelPromis} cards={cards} setCards={setCards}/>}
      {actibTab === "card" && <Card cards={cards} setCards={setCards}/>}
      <Baner />
      <Baners />
      <Bannerers />
      <Futter />
    </>
  )
}

export default App
