import { Routes, Route } from 'react-router-dom'
import pages from './pages'
import { PageInterface } from './interfaces'
import { SideMenu } from './components'


function App() {

  return (
    <div className='w-screen h-screen'>
      <SideMenu />

      <Routes>
        {
          pages?.map((page: PageInterface, i: number) => (
            <Route path={page.pathname} element={<page.element />} key={i} />
          ))
        }
      </Routes>
    </div>
  )
}

export default App
