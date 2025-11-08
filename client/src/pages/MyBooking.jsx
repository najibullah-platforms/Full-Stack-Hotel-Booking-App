import React, { use, useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBooking = () => {

    const [bookings, setBookings] = useState(userBookingsDummyData);

    return (
        <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
            <Title title='my booking' subTitle='lorem elsi mane ou past  curen and umpoe hotle resertion in on pleas pla you trui somelest with just fa few clients' align='left' />

            <div className='max-w-6xl mt-8 w-full text-gray-800'>

                <div className='hidden md:grid md:grid-cols-[3fr_3fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
                    <div className='w-1/3'>Hotel</div>
                    <div className='w-1/3'>Date & Timings</div>
                    <div className='w-1/3'>Payment</div>
                </div>

                {bookings.map((bookings) => (
                    <div key={bookings._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t'>
                        {/* hotle details */}
                        <div className='flex flex-col md:flex-row'>
                            <img src={bookings.room.images[0]} alt="hotel-img" className='min-md:w-44 rounded shadow object-cover' />
                            <div className='flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4'>
                                <p className='font-playfair text-2xl'>{bookings.hotel.name}
                                    <span className='font-inter text-sm'>({bookings.room.roomType})</span>
                                </p>
                                <div className='flex items-center gap-1 text-sm text-gray-500'>
                                    <img src={assets.locationIcon} alt="location-icon" />
                                    <span>{bookings.hotel.address}</span>
                                </div>
                                <div className='flex items-center gap-1 text-sm text-gray-500'>
                                    <img src={assets.guestsIcon} alt="gutestes-icon" />
                                    <span>Guestes: {bookings.guests}</span>
                                </div>
                                <p className='text-base'>Totle: ${bookings.totalPrice}</p>
                            </div>
                        </div>

                        {/* hotle details */}
                        <div className='flex flex-row md:items-center md:gap-12 mt-3 gap-8'>
                            <div>
                                <p>Chec-In</p>
                                <p className='text-gray-500 text-sm'>
                                    {new Date(bookings.checkInDate).toDateString()}
                                </p>
                            </div>
                            <div>
                                <p>Chec-Out</p>
                                <p className='text-gray-500 text-sm'>
                                    {new Date(bookings.checkOutDate).toDateString()}
                                </p>
                            </div>
                        </div>

                        {/* hotle details */}
                        <div className='flex flex-col items-start justify-center pt-3'>
                            <div className='flex items-center gap-2'>
                                <div className={`h-3 w-3 rounded-full ${bookings.isPaid ? "bg-green-500" : "bg-red-500"}`}></div>
                                <p className={`text-sm ${bookings.isPaid ? "text-green-500" : "text-red-500"}`}>{bookings.isPaid ? "Paid" : "Unpaid"}</p>
                            </div>
                             {!bookings.isPaid && (
                                <button className='px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover hover:bg-gray-50 transition-all cursor-pointer'>Pay Now</button>
                             )}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default MyBooking
