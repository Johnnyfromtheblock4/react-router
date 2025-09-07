function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Defaultlayout />}>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" Component={Products}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
