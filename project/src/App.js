import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Rooms from './Components/Rooms';
import Features from './Components/Features';
import Booking from './Components/Booking';
import Register from './Components/Register';

const data = [
  {
    imgurl:"url('/images/familyDeluxe.jpg')",
    roomType:"Family Deluxe",
    pic_1:"/images/familyDeluxe.jpg",
    pic_2:"/images/familyDeluxe.jpg",
    pic_3:"/images/familyDeluxe.jpg",
    guests:"4",
    price:"599",
    desc: "Our Kaprun suite offers you a traditional austrian flair with stone-pine interior, a generous common sleeping and living area with 1 double bed and 2 sofa beds. Bathroom with shower and bathtube, separate toilet, TV, telephone, minibar, safe, Wifi, desk and balcony (5-6 persons)."

  },
  {
    imgurl:"url('/images/DoubleDeluxe.jpg')",
    roomType:"Double Deluxe",
    pic_1:"/images/DoubleDeluxe.jpg",
    pic_2:"/images/DoubleDeluxe.jpg",
    pic_3:"/images/DoubleDeluxe.jpg",
    guests:"2",
    price:"430",
    desc: "Our traditional stone-pine double rooms feature plenty of natural light, living area with sofa bed, minibar, TV, telephone, Wifi, safe, bathroom, separate toilet and balcony with mountain view."

  },
  {
    imgurl:"url('/images/singleDeluxe.jpg')",
    roomType:"Single Deluxe",
    pic_1:"/images/singleDeluxe.jpg",
    pic_2:"/images/singleDeluxe.jpg",
    pic_3:"/images/singleDeluxe.jpg",
    guests:"1",
    price:"310",
    desc: "Our traditional attic rooms with stone-pine interior feature a minibar, TV, telephone, Wifi, safe, bathroom and toilet and a roof window. "

  },
  {
    imgurl:"url('/images/single.jpg')",
    roomType:"Single Room",
    pic_1:"/images/single.jpg",
    pic_2:"/images/single.jpg",
    pic_3:"/images/single.jpg",
    guests:"1",
    price:"299",
    desc: "Our traditional attic rooms with stone-pine interior feature a Wifi, safe, bathroom and toilet and a roof window. "

  },
  {
    imgurl:"url('/images/Double.jpg')",
    roomType:"Double Room",
    pic_1:"/images/Double.jpg",
    pic_2:"/images/Double.jpg",
    pic_3:"/images/Double.jpg",
    guests:"2",
    price:"359",
    desc: "Our traditional stone-pine double rooms feature plenty of natural light, living area with TV, telephone, Wifi, safe, bathroom, separate toilet and balcony with mountain view."

  },
  {
    imgurl:"url('/images/Triple.jpg')",
    roomType:"Triple Room",
    pic_1:"/images/Triple.jpg",
    pic_2:"/images/Triple.jpg",
    pic_3:"/images/Triple.jpg",
    guests:"3",
    price:"469",
    desc: "Our traditional attic rooms with stone-pine interior feature a Wifi, safe, bathroom and toilet and a roof window. "

  },
  {
    imgurl:"url('/images/family.jpg')",
    roomType:"Family Room",
    pic_1:"/images/family.jpg",
    pic_2:"/images/family.jpg",
    pic_3:"/images/family.jpg",
    guests:"6",
    price:"529",
    desc: "Our suite offers you a traditional austrian flair with stone-pine interior, a generous common sleeping and living area with 1 double bed and 2 sofa beds. Bathroom with shower and bathtube, separate toilet, TV, telephone, minibar, safe, Wifi, desk and balcony (4-6 persons). "

  },
]

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Rooms' element={<Rooms/>}/>
        
        <Route path='/Features/FamilyDeluxe' 
        element={<Features pic_1={data[0].pic_1} pic_2={data[0].pic_2} pic_3={data[0].pic_3} 
        guests={data[0].guests} price={data[0].price} roomType={data[0].roomType} imgurl={data[0].imgurl} desc={data[0].desc}/>}/>

        <Route path='/Features/DoubleDeluxe'
        element={<Features pic_1={data[1].pic_1} pic_2={data[1].pic_2} pic_3={data[1].pic_3} 
        guests={data[1].guests} price={data[1].price} roomType={data[1].roomType} imgurl={data[1].imgurl} desc={data[1].desc}/>}/>
        
        <Route path='/Features/SingleDeluxe'
        element={<Features pic_1={data[2].pic_1} pic_2={data[2].pic_2} pic_3={data[2].pic_3} 
        guests={data[2].guests} price={data[2].price} roomType={data[2].roomType} imgurl={data[2].imgurl} desc={data[2].desc}/>}/>
        
        <Route path='/Features/Single'
        element={<Features pic_1={data[3].pic_1} pic_2={data[3].pic_2} pic_3={data[3].pic_3} 
        guests={data[3].guests} price={data[3].price} roomType={data[3].roomType} imgurl={data[3].imgurl} desc={data[3].desc}/>}/>
        
        <Route path='/Features/Double'
        element={<Features pic_1={data[4].pic_1} pic_2={data[4].pic_2} pic_3={data[4].pic_3} 
        guests={data[4].guests} price={data[4].price} roomType={data[4].roomType} imgurl={data[4].imgurl} desc={data[4].desc}/>}/>
        
        <Route path='/Features/Triple'
        element={<Features pic_1={data[5].pic_1} pic_2={data[5].pic_2} pic_3={data[5].pic_3} 
        guests={data[5].guests} price={data[5].price} roomType={data[5].roomType} imgurl={data[5].imgurl} desc={data[5].desc}/>}/>
        
        <Route path='/Features/Family'
        element={<Features pic_1={data[6].pic_1} pic_2={data[6].pic_2} pic_3={data[6].pic_3} 
        guests={data[6].guests} price={data[6].price} roomType={data[6].roomType} imgurl={data[6].imgurl} desc={data[6].desc}/>}/>

        <Route path='/Booking' element={<Booking guests={data[0].guests} price={data[0].price} roomType={data[0].roomType} imgurl={data[0].pic_1}/>}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}
 
export default App;
