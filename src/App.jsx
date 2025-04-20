import React from 'react'
import Drag from '../Motion/Drag'
import MyComponent from "../Motion/AnimatePresure/AnimatePresence"
import Slide from '../Motion/AnimatePresure/Slide'
import List from '../Motion/AnimatePresure/List'
import Drop from '../Motion/AnimatePresure/drop'

const App = () => {
  return (
    <>
  <MyComponent />
  <Slide />
  <List />
  <Drop />
    </>
  )
}

export default App