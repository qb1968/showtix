import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="w-full h-[420px] bg-white rounded-lg shadow-sm p-3 relative  mt-10 ">
        <Link to={`/movie/${movie._id}`}>
          <img
            src={movie?.poster?.url}
            alt="poster"
            className="w-full h-[170px] object-contain"
          />
        </Link>
        <div>
         
          <h4 className="font-bold text-[18px] text-[#0a0a0a] font-Roboto py-1 ">
            {" "}
            {movie.title?.length > 20
              ? movie.title.slice(0, 20) + "..."
              : movie.title}
          </h4>
          
          
        </div>
        <div className="pt-5 rounded-lg cursor-pointer">
          <Link to={`/movie/${movie._id}`}>
            <h5 className="border border-black rounded-md text-center font-bold text-[18px] text-[black] font-Roboto  py-2 hover:bg-black hover:text-white transition duration-300 ease-in-out">
              Book Now
            </h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;

// import React from "react";
// import { Link } from "react-router-dom";

// const MovieCard = ({ movie }) => {
//   return (
//     <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer mt-10">
//       <div className="flex justify-end"></div>
//       <Link to={`/movie/${movie._id}`}>
//         <img
//           src={movie.poster.url}
//           alt={movie.title}
//           className="w-full h-[170px] object-contain"
//         />
//       </Link>

//       <Link to={`/movie/${movie._id}`}>
//         <h4 className="pb-3 font-[500]">{movie.title}</h4>
//         <div className="flex">{movie.genre}</div>
//         <div className="flex">{movie.duration} hours</div>
//       </Link>
//       <Link to={`${movie.trailer}`}>
//         <button className="pt-3 text-[15px] text-blue-400 pb-3">
//           Watch Trailer
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default MovieCard;
