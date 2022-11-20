import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'


function Home() {
  return (
    <div className='home'>
      <Banner />  
      <div className='home__section'>
            <Card
                src="https://i.pinimg.com/736x/5b/76/d8/5b76d8a482d18cb412fcbf4442b83ace--office-meeting-meeting-rooms.jpg"
                title="Seminar Rooms "
                description="Good place to Learn"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Auditoriums"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Board / Meeting Rooms"
                description="Comfortable private places, to have a meeting."
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="Event Labs"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Fun activity area"
                description="Enjoy the amazing sights of London with this stunning penthouse"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="Meetnig rooms"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
            />
            </div>

    </div>
  )
}

export default Home
