import {useState, useEffect} from 'react'

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log('CALL THE API...');
  }, []);
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5){
    console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("i run when counter", counter);
  }, [counter]);
  useEffect(() => {
    console.log("i run when keyword & counter");
  }, [keyword, counter]);
  return (
    <div>
      <input
      value={keyword}
      onChange={onChange}
      type="text"
      placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
}

export default App;
 