import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from '../Navbar'
import Hero from '../Hero'  
import {FieldProvider} from '../context/FieldContext'

function Models() {
  
  const [products, setProducts] = useState([])
  const [buttons, setButtons] = useState([])
  const [showOrder, setShowOrder] = useState(false)
  const [prices, setPrices] = useState([])
  const [years, setYear] =  useState([])
  

  function showOrderMenu() {
    setShowOrder((prevState) => !prevState)
    console.log('click')
  }
  
  async function fetchData() {
    const data = await axios.get('https://challenge.agenciaego.tech/models')
    setProducts(data.data)
    const allSegments = ['Todos', ...new Set(data.data.map(car => car.segment))]
    const allPrices = [...data.data.map((car) => car.price)]
    const allYears = [...data.data.map((car) => car.year)]
    setButtons(allSegments)
    setPrices(allPrices)
    setYear(allYears)
    console.log(allPrices)
    console.log(allYears)
  }

  useEffect(() => {
    fetchData()
    
  }, [])


  const fieldData = {
    products,
    buttons,
    showOrder,
    showOrderMenu,
    prices,
    years
  }
  
  return(
    <FieldProvider value={fieldData}>
      <Navbar />
      <Hero />
    </FieldProvider>
  )
}

export default Models