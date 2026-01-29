import { Route, Routes } from 'react-router'
import { AppLayout } from './components/AppLayout'
import { Dashboard } from './components/Dashboard'
import { PlaceholderPage } from './components/PlaceholderPage'

import './styles/index.scss';

export const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/cases' element={<PlaceholderPage title={'Cases'} />} />
      </Route>

    </Routes>
  )
}