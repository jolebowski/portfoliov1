import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col font-sans text-muted-mist bg-midnight overflow-x-hidden selection:bg-electric-violet/30 selection:text-white">

      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-electric-violet/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-ray/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="noise-overlay" />
      </div>

      <Header />

      <main className="relative z-10 flex-grow pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
