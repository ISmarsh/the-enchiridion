import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { CreditsPage } from './pages/CreditsPage';
import { EpisodesPage } from './pages/EpisodesPage';
import { CharactersPage } from './pages/CharactersPage';
import { StorylinesPage } from './pages/StorylinesPage';
import { SongsPage } from './pages/SongsPage';
import { ThemeShowcasePage } from './pages/ThemeShowcasePage';

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/episodes" element={<EpisodesPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/storylines" element={<StorylinesPage />} />
          <Route path="/songs" element={<SongsPage />} />
          <Route path="/credits" element={<CreditsPage />} />
          <Route path="/themes" element={<ThemeShowcasePage />} />
        </Route>
      </Routes>
      <Toaster position="bottom-center" />
    </>
  );
}
