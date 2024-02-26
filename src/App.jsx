import { Parallax } from 'react-parallax'
import './App.css'
import './bootstrap.min.css'
import Home from './components/Home'

function App() {

  
  const image1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1200px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg"
  const image2 = "https://image.jimcdn.com/app/cms/image/transf/none/path/s2217cd0bb1220415/image/i3e16325c88b18aa9/version/1683967469/chitchen-itza-temple.jpg"
  const image3 = "https://www.fodors.com/wp-content/uploads/2022/07/HERO-shutterstock_1283692720.jpg"
 const image4 = "https://gdb.voanews.com/64be4562-1c02-48f1-9016-21dfcaa3e4ad_cx14_cy1_cw60_w1080_h608.jpg"
 const image5 = "https://cdn.britannica.com/24/153524-050-BA9D084B/Al-Dayr-Petra-Jordan.jpg"
 const image6="https://www.futurity.org/wp/wp-content/uploads/2021/08/how-old-is-Machu-Picchu-age-1600.jpg"
 const image7 ="https://assets.editorial.aetnd.com/uploads/2009/11/gettyimages-1081719544.jpg"
  return (
    <div >
            <Home />

      <div className="div">
      <Parallax  strength={100} bgImage={image1} blur={{ min: -2, max:2 }} >
      <div style={{height:'100vh'}}>
      <h1 className='d-flex align-items-center justify-content-center' style={{height:'75vh'}}>Great wall of china</h1>
 </div>
    </Parallax>
      </div>
      <div className="div ">
      <Parallax
       bgImage={image2} 
       blur={{min:-2,max:2}} >
      <div style={{height:'100vh',width:'100%'}}>
      <h1 className='d-flex align-items-center justify-content-center 'style={{height:'75vh'}}>Chichén Itzá</h1>
<p>Mexico</p>
      </div>
    </Parallax>
      </div>
      <div className="div">
      <Parallax bgImage={image3} strength={200}blur={{min:-1,max:2}} >
      <div style={{height:'100vh'}}>
      <h1 className='d-flex align-items-center justify-content-center 'style={{height:'75vh'}}>Christ the Redeemer</h1>

      </div>
    </Parallax>

      </div>
      <div className="row">
        <div className="col-lg6">
        <div className="div">
      <Parallax bgImage={image4} strength={100}blur={{min:-1,max:1}} >
      <div style={{height:'100vh'}}>
      <h1 className='d-flex align-items-center justify-content-center 'style={{height:'75vh'}}>Taj mahal</h1>
<p>Agra, India</p>
      </div>
    </Parallax>

      </div>

        </div>

        <div className="col-lg6">
        <div className="div">
      <Parallax bgImage={image5} strength={100}blur={{min:-1,max:2}} >
      <div style={{height:'100vh'}}>
      <h1 className='d-flex align-items-center justify-content-center 'style={{height:'75vh'}}>petra</h1>
<p>Maan, Jordan</p>
      </div>
    </Parallax>

      </div>

        </div>

        <div className="col-lg6">
        <div className="div">
      <Parallax bgImage={image6} strength={100}blur={{min:-1,max:2}} >
      <div style={{height:'100vh'}}>
      <h1 className='d-flex align-items-center justify-content-center 'style={{height:'75vh'}}>Machu Picchu</h1>
<p>Cuzco Region, Peru</p>
      </div>
    </Parallax>

      </div>

        </div>
        <div className="col-lg6">
        <div className="div">
      <Parallax  bgImage={image7} strength={200}blur={{min:-1,max:2}} >
      <div style={{height:'100vh'}}>
      <h1 className='d-flex align-items-center justify-content-center 'style={{height:'75vh'}}>Colosseum</h1>
    <p>Rome, Italy</p>
      </div>
    </Parallax>

      </div>

        </div>

      </div>
    </div>
    
  )
}

export default App
