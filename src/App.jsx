import './App.css'
import CardComponent from './cardComponent'

function App() {
  return (
    <div className="pb-10">
      <div className='mt-9 sm:mt-10'>
        <p className='text-white font-semibold mobile:text-[2.5rem] text-[2rem] px-2 text-center leading-tight sm:w-[30rem] sm:mr-auto sm:ml-auto'>Quality feedbacks for your SaaS products</p>
        <p className='text-center text-[#9DA3AE] font-regular mt-4'>The blocks & components you need</p>
      </div>
      <CardComponent/>
    </div>
  )
}

export default App
