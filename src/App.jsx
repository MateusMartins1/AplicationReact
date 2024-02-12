import { Section } from './components/Section'
import { Nav } from './components/Nav'

function App() {

  return (
    <div className='Flex bg-black'> 
       <Nav/>
       <br />
       <div className='flex justify-center gap-60'>
        <Section/>
        <Section/>
        <Section/>
       </div>
       
    </div>
  )
}

export default App