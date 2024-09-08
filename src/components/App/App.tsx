import React from 'react';

import About from '../About/About.component';
import Cases from '../Cases/Cases.component';
import Footer from '../Footer/Footer.component';
import Hero from '../Hero/Hero.component';

function App() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Cases />
      </main>
      <Footer />
    </>
  );
}

export default App;
