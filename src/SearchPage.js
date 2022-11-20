import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'
import Button from '@mui/material/Button';


function SearchPage() {
  return (
    <div className='searchPage'>
      {/* <h1>book a room</h1> */}
        <div className='searchPage__info'>
                <p >5 Board Rooms · 26 august</p>
                <h1>Places Available </h1>
                <Button variant="outlined">Capacity</Button>
                <Button variant="outlined">Facility</Button>
                <Button variant="outlined">Ratings</Button>
                <Button variant="outlined">More filters</Button>
            </div>

            <SearchResult
                img="https://www.wework.com/ideas/wp-content/uploads/sites/4/2021/08/20201008-199WaterSt-2_fb.jpg"
                location="Board Room number 3"
                title=" Ganga Board Room "
                description="12 Seater · 1 Projector · 2 Sofa · Wifi"
                star={4.3}
                // price="£40 / night"
                // total="£157 total"
            />

            <SearchResult
                img="https://images.squarespace-cdn.com/content/v1/540f5515e4b06c4e8629c108/1600932097980-NHBGP5WD2F7YIK8ZFHRA/conference-room-boardroom-business-setup.jpg?format=2500w"
                location="Board Room number 4"
                title="Yamuna Board Room "
                description="8 Seater · 1 Projector · 1 Sofa · Wifi · 1 Television "
                star={3.8}
                // price="£35 / night"
                // total="£207 total"
            />
            <SearchResult
                img="https://officesnapshots.com/wp-content/uploads/2019/12/conference-room-design-1-700x467.jpg"
                location="Board Room number 2"
                title="Round Table Conference Room"
                description="7 Seater · 1 Projector · 1 Sofa · Wifi · 1 Television "
                star={4.5}
                // price="£55 / night"
                // total="£320 total"
            />
            <SearchResult
                img="https://devx.work/blog/wp-content/uploads/2021/12/meeting-room-delhi-featured.jpg"
                location="Board Room number 1"
                title="Brhamaputra Board Room "
                description="35 Seater · 2 Projector · 1 Sofa · Wifi · 2 Television "
                star={5.0}
                // price="£60 / night"
                // total="£450 total"
            />
            <SearchResult
                img="https://www.ledil.com/wp-content/uploads/2018/10/APPLICATION-EXAMPLE-office-meeting-room-lighting-with-DAISY.jpg"
                location="Board Room number 6"
                title="Meeting Room"
                description="5 Seater · 1 Projector ·  Wifi · 1 Television "
                star={4}
                // price="£65 / night"
                // total="£480 total"
            />

    </div>
  )
}

export default SearchPage
