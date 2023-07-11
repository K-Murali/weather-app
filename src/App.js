import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Content from './components/Content'
import Heading from './components/Heading'
import { AppDataProvider } from './Api/context'
import Search from './components/Search'

const App = () => {
  return (
    <div>

    <AppDataProvider>
      <Navbar />
      <Heading />
      <Search/>
      <Content />
    </AppDataProvider>
    </div>
  );
}

export default App
