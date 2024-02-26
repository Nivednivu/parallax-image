import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Carousel from 'react-bootstrap/Carousel';


function Home() {
  const vallue = "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
  const vallu2 = "https://wallpapers.com/images/featured/space-sjryfre8k8f6i3ge.jpg"
  // const vallu3 = "https://t3.ftcdn.net/jpg/00/46/44/02/360_F_46440268_HxTMxCec1EntidRNV0mrw1wMDtMcYk8g.jpg"

  return (
    <div>
      

      <Navbar className='nav '>
        <Container>
          <Navbar.Brand href="#home"className='text-white' style={{marginLeft:'900px'}}>Home</Navbar.Brand>
          <Navbar.Brand href="#home"className='text-white'>About</Navbar.Brand>
          <Navbar.Brand href="#home" className='text-white'style={{marginRight:'100px'}}><i class="fa-solid fa-user "></i></Navbar.Brand>
        </Container>
      </Navbar>


    <Carousel>
      <Carousel.Item>
    <img width={'100%'} src="https://wallpapers.com/images/hd/perfect-sunset-landscape-jd53jyxh63erpsje.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img width={'100%'} src="https://wallpaperbat.com/img/399795-space-full-8k-wallpaper-top-free-space-full-8k-background.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
     <img width={'100%'} src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
     <img width={'100%'} src="https://wallpaperfx.com/view_image/dark-red-night-1920x1200-wallpaper-7429.jpg" alt="" />
      </Carousel.Item>
    </Carousel>
    </div>

    
  )
}

export default Home
