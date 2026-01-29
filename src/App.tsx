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
        <Route path='/legal-search' element={<PlaceholderPage title={'Legal Search'} />} />
        <Route path='/smart-review' element={<PlaceholderPage title={'Smart Review'} />} />
        <Route path='/compliance-view' element={<PlaceholderPage title={'Compliance View'} />} />
        <Route path='/legal-forms' element={<PlaceholderPage title={'Legal Forms'} />} />
        <Route path='/team' element={<PlaceholderPage title={'Team'} />} />
        <Route path='/integrations' element={<PlaceholderPage title={'Integrations'} />} />
        <Route path='/settings' element={<PlaceholderPage title={'Settings'} />} />
        <Route path='/support' element={<PlaceholderPage title={'Support Center'} />} />
      </Route>

    </Routes>
  )
}