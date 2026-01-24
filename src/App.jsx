import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Tab1 from './pages/tab1/tab1_temp.jsx'
import Tab2 from './pages/tab2/tab2.jsx'
import Tab3 from './pages/tab3/tab3.jsx'
import Tab4 from './pages/tab4/Tab4'
import Tab5 from './pages/tab5/Tab5'


const App = () => {
  return (
    <BrowserRouter>

      <Layout>

          <Routes>
                <Route path="/" element={<Tab1 />} />
                <Route path="/tab2" element={<Tab2 />} />
                <Route path="/tab3" element={<Tab3 />} />
            {/* <Route path="/tab4" element={<Tab4 />} />*/}
                
          </Routes>

      </Layout>

    </BrowserRouter>
  )
}

export default App
