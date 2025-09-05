import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAccentClass } from './hooks/useAccentClass';
import { cn } from './utils/helper';
import { Header } from './components/Header';
import { AnimatedRoutes } from './Routes/AnimatedRoutes';
import { Footer } from './components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';
import { RootState } from './store/store';

function App() {
const {theme} = useSelector((s: RootState) => s.theme);
  const accent = useAccentClass();
  useEffect(() => { document.documentElement.setAttribute("data-theme", theme); }, [theme]);
  return (
    <div className={cn("app", accent)}>
      <Header />
      <main><AnimatedRoutes /></main>
      <Footer />
      <Analytics />
      <Toaster position="top-center" gutter={12} containerStyle={{margin: "8px"}} toastOptions={{
        success:{
          duration: 3000,
        },
        error: {
          duration: 5000
        },
        style: {
          fontSize: "16px",
          maxWidth: "500px",
          padding: "16px 24px",
          backgroundColor: "var(--color-grey-0)",
          color: "var(--color-grey-700)"
        }
      }} />
    </div>
    
  )
}

export default App
