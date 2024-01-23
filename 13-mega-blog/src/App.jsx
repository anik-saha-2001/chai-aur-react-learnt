function App() {
  const handleClick = () => {
    console.log(import.meta.env.VITE_REACT_APP_APPWRITE_URL);
  };

  return (
    <>
      <h1 onClick={handleClick}>A blog app with Appwirte</h1>
    </>
  );
}

export default App;
