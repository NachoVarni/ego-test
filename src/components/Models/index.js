import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from '../Navbar'
import Hero from '../Hero'  
import {FieldProvider} from '../context/FieldContext'

function Models() {
  
  const [products, setProducts] = useState([])
  const [buttons, setButtons] = useState([])
  // const [showOrder, setShowOrder] = useState(false)
  
  // function showOrderMenu() {
  //   setShowOrder((prevState) => !prevState)
  //   console.log('click')
  // }
  
  async function fetchData() {
    const data = await axios.get('https://challenge.agenciaego.tech/models')
    
    setProducts(() => data.data)
    const allSegments = ['Todos', ...new Set(data.data.map(car => car.segment))]
    setButtons(allSegments)  
  }

  
  useEffect(() => {
    fetchData()
    
  }, [])


  const fieldData = {
    products,
    buttons,
    
  }
  
  return(
    <FieldProvider value={fieldData}>
      <Navbar />
      <Hero />
    </FieldProvider>
  )
}

export default Models