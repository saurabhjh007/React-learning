import './App.css'

function App() {

  function handlechange(event){
    console.log("the current value is:", event.target.value)
  }
  

  return (
    <div>
      <input type="text" onChange={handlechange} />
    </div>
  )
}

export default App
