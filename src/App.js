import './App.css';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Data from './Components/Data';

function App() {
  const cardElements = Data.map((items)=>{
    return (
      <Card 
        // img = {items.img}
        // starImg = {items.starImg}
        // rating = {items.rating}
        // reviewCount = {items.reviewcount}
        // country = {items.country}
        // title = {items.title}
        // price = {items.price}

        {...items}
      />
    )
  })
  return (
    <>
      <Header/>
      <HeroSection/>

      <div className='flex px-5 md:px-10 overflow-x-scroll card'>
          {cardElements}
      </div>

      <Footer/>
    </>
  );
}


export default App;