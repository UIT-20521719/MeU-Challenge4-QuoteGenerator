import QuotePage from './pages/QuotePage';
import AuthorPage from './pages/AuthorPage';
import './scss/index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<QuotePage />} />
        <Route path="/:authorSlug" element={<AuthorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
