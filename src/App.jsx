import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import KsKunnskap from './pages/KsKunnskap';
import Mjospromenaden from './pages/Mjospromenaden';
import Om from './pages/Om';
import Smart from './pages/Smart';
import Storebrand from './pages/Storebrand';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/om" element={<Om />} />
        <Route path="/ks-kunnskap" element={<KsKunnskap />} />
        <Route path="/mjospromenaden" element={<Mjospromenaden />} />
        <Route path="/smart" element={<Smart />} />
        <Route path="/storebrand" element={<Storebrand />} />

        {/* Gamle .html-adresser er delt og indeksert — behold dem som redirects. */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        {/* Kontaktsiden ble til om-siden; kontaktinfoen ligger nå i footeren. */}
        <Route path="/kontakt" element={<Navigate to="/om" replace />} />
        <Route path="/kontakt.html" element={<Navigate to="/om" replace />} />
        <Route path="/ks-kunnskap.html" element={<Navigate to="/ks-kunnskap" replace />} />
        <Route path="/mjospromenaden.html" element={<Navigate to="/mjospromenaden" replace />} />
        <Route path="/smart.html" element={<Navigate to="/smart" replace />} />
        <Route path="/storebrand.html" element={<Navigate to="/storebrand" replace />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
