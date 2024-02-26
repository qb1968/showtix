import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createScreen } from "../../redux/action/screenAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theaterName = [
  "Liberty Showcase ",
  "Reidsville Showcase"
];

const CreateScreen = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [selectedShowtimes, setSelectedShowtimes] = useState(["7pm"]);
  const [theater, setTheater] = useState("");
  const [hall, setHall] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [seats, setSeats] = useState(0);
  const [screenDate, setScreenDate] = useState("");
  const movies = useSelector((state) => state.movies.movies);

  const availableShowtimes = ["7pm"];

  const handleShowtimeToggle = (showtime) => {
    setSelectedShowtimes((prevSelected) => {
      if (prevSelected.includes(showtime)) {
        return prevSelected.filter((item) => item !== showtime);
      } else {
        return [...prevSelected, showtime];
      }
    });
  };

  const isShowtimeSelected = (showtime) => selectedShowtimes.includes(showtime);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const screenData = {
      name,
      showtimes: selectedShowtimes,
      hall,
      theaterName: theater,
      ticketPrice,
      seats,
      screenDate,
    };

    try {
      const response = await dispatch(createScreen(screenData));
      setName("");
      setSelectedShowtimes(["10am-1pm"]);
      setTheater("");
      setTicketPrice("Gold Tables: 50.00","VIP: 50.00 ", "Balc VIP: 50.00", "Balc House: 50.00", "House: 50.00");
      setSeats(0);
      setScreenDate("");
      setHall("");

      if (response) {
        toast.success("Screen Created Successfully");
      }
    } catch (error) {
      toast.error("An error occurred: " + error.message);
    }
  };

  return (
    <div className="w-[90%] 800px:w-[50%] bg-white shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center text-black">
        Create Screen
      </h5>
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2 text-black">
            Choose Show <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 border h-[35px] rounded-[5px] cursor-pointer"
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
            <option value="">Select a show</option>
            {movies.map((movie) => (
              <option value={movie.title} key={movie._id}>
                {movie.title}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <label className="pb-2 text-black">
            Show date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="screendate"
            id="screendate"
            value={screenDate}
            className="mt-2 text-black appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setScreenDate(e.target.value)}
          />
        </div>
        <br />

        {/* Hall */}
        {/* <div>
          <label className="pb-2 text-black">
            Hall No<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="hall"
            id="hall"
            value={hall}
            className="mt-2 text-black appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setHall(e.target.value)}
          />
        </div>
        <br /> */}

        {/* Showtime */}
        <div>
          <label className="pb-2 text-black">
            Showtime <span className="text-red-500">*</span>
          </label>
          {availableShowtimes.map((showtime) => (
            <label key={showtime} className="block mt-2 text-black">
              <input
                type="checkbox"
                value={showtime}
                checked={isShowtimeSelected(showtime)}
                onChange={() => handleShowtimeToggle(showtime)}
              />
              <span className="ml-2">{showtime}</span>
            </label>
          ))}
        </div>
        <br />

        {/* Theater */}
        <div>
          <label className="pb-2 text-black">
            Choose Theatre <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 border h-[35px] rounded-[5px] cursor-pointer"
            value={theater}
            onChange={(e) => setTheater(e.target.value)}
          >
            <option value="Choose theater">Choose theater</option>
            {theaterName &&
              theaterName.map((i) => (
                <option value={i} key={i}>
                  {i}
                </option>
              ))}
          </select>
        </div>
        <br />

        {/* Ticket Price */}
        <div>
          <label className="pb-2 text-black">
            Ticket Price (BDT) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="ticketPrice"
            value={ticketPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setTicketPrice(e.target.value)}
            placeholder="Enter ticket price..."
          />
        </div>
        <br />

        {/* Seats */}
        <div>
          <label className="pb-2 text-black">
            Seats <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="seats"
            value={seats}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setSeats(parseInt(e.target.value))}
            placeholder="Enter total number of seats"
          />
        </div>
        <br />

        <div>
          <input
            type="submit"
            value="Create"
            className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateScreen;
