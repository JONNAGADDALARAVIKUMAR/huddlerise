import "./App.css";

function App() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11];
  return (
    <div className="mainContainer">
      {array.map((item) => {
        return <div key={item} className="miniContainer" />;
      })}
    </div>
  );
}

export default App;
