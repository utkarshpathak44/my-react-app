import { useState } from "react";
import React from "react";

const UploadFile: React.FC = () => {
  const [FileName, SetFileName] = useState<string>("");
  
  const [selectedOption, setSelectedOption] = useState<string>("");
  const options: string[] = ["Option 1", "Option 2", "Option 3"];
  const HandleClose=()=>{
    console.log("close the file upload popup")
  }

  return (
    <>
      <div className="hidden fixed w-auto h-auto border border-stone-300 rounded flex flex-col overflow-hidden shadow-[0_0_5000px_5000px_black]">
        <div className="border border-stone-400 flex justify-between">
          <div>
            <div>upload file</div>
          </div>
          <div onClick={HandleClose}>
            <img src="" alt="X" />
          </div>
          <p></p>
        </div>

        <div className="flex flex-row ">
          {/* file drag region */}
          <div></div>
          {/* file details region */}
          <div>
            <form action="">
              <label htmlFor=""></label>
              <input type="text" />
              <label htmlFor=""></label>
              <input type="text" />
              <label htmlFor="">choose an option</label>
              <select
                id="dropdown"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="px-4 py-2 border rounded-md"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </form>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default UploadFile;
