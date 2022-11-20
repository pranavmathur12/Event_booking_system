package com.pranav.bookingsystem.Service;

import com.pranav.bookingsystem.model.Booking;

import java.util.List;

public interface BookingService {
    public Booking saveBooking(Booking booking);
    public List<Booking> getAllBooking();
}
