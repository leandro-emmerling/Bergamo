function App() {
  return (
    <React.Fragment>
      <TopBar />
      <Hero />
      <Marquee />
      <Lineup />
      <Bergomarks />
      <Bars />
      <Anfahrt />
      <Footer />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
