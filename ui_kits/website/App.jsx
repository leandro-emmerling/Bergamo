function App() {
  return (
    <React.Fragment>
      <TopBar />
      <Hero />
      <Marquee />
      <About />
      <Lineup />
      <Versorgung />
      <Impressionen />
      <Anfahrt />
      <Footer />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
