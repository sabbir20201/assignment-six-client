const RightSide = () => {
  return (
    <div className="border fixed">
      <div className="border rounded-md">
        <ul className="list-none text-black w-full">
          <li
            className="hover:bg-indigo-500 rounded-sm pl-3 pr-[233px] py-3 transform cursor-pointer mb-2 
           transition-all duration-300 ease-in-out hover:translate hover:text-wh"
          >
            Home
          </li>
          <li
            className="hover:bg-indigo-500 rounded-sm p-3 transform cursor-pointer mb-2 
           transition-all duration-300 ease-in-out hover:translate hover:text-white"
          >
            Podcast
          </li>
          <li
            className="hover:bg-indigo-500 rounded-sm p-3 transform cursor-pointer mb-2 
           transition-all duration-300 ease-in-out hover:translate hover:text-white"
          >
            Videos
          </li>
          <li
            className="hover:bg-indigo-500 rounded-sm p-3 transform cursor-pointer mb-2 
           transition-all duration-300 ease-in-out hover:translate hover:text-white"
          >
            Tags
          </li>
          <li
            className="hover:bg-indigo-500 rounded-sm p-3 transform cursor-pointer mb-2 
           transition-all duration-300 ease-in-out hover:translate hover:text-white"
          >
            About
          </li>
          <li
            className="hover:bg-indigo-500 rounded-sm p-3 transform cursor-pointer mb-2 
           transition-all duration-300 ease-in-out hover:translate hover:text-white"
          >
            Contact
          </li>
          <br />
          <li
            className="hover:bg-indigo-500 rounded-sm p-3 transform cursor-pointer mb-2 
           transition-all duration-300 ease-in-out hover:translate hover:text-white"
          >
            Others
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSide;
