package com.pranav.bookingsystem.controller;

import com.pranav.bookingsystem.Service.BookingService;
import com.pranav.bookingsystem.model.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/booking")
@CrossOrigin(origins = "http://localhost:3000")
public class bookingController {
    @Autowired

    private BookingService bookingService;
    @PostMapping("/add")

    public String add(@RequestBody Booking booking){
        bookingService.saveBooking(booking);
        return "New booking done";
    }

    @GetMapping("/getAll")

    public List<Booking> getAllBooking(){
        return bookingService.getAllBooking();
    }
}
