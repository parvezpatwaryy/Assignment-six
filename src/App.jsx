import './App.css'
import Banner from './component/Banner'
import Main from './component/Main'
import NavBar from './component/NavBar'


function App() {


  return (
    <>
  <NavBar/>
  <Main/>
  <Banner/>
  <div className='max-w-[1600px] max-h-[196px] mx-auto mt-20'>
      <div className='text-center space-y-2'>
        <h1 className='font-bold text-4xl'>Premium Digital Tools</h1>
        <p className='font-semibold text-gray-400'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
        <div className='flex items-center gap-3 pl-[650px]'>
          <p className='bg-[#9514FA] rounded-full p-5 w-40 text-white font-semibold'>Products</p>
          <p className=' rounded-full p-5 w-40 font-semibold'>Cart (2)</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
