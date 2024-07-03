import { useState, useEffect } from "react";
import axios from "axios";

const Track = () => {
  const [timer, setTimer] = useState(null);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [srNo, setSrNo] = useState(0);
  const [inTime, setInTime] = useState("");
  const [timeStr, setTimeStr] = useState("00:00:00");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    // The Timer will reset after midnight
    const checkMidnight = setInterval(() => {
      const now = new Date();
      if (
        now.getHours() === 0 &&
        now.getMinutes() === 0 &&
        now.getSeconds() === 0
      ) {
        resetTimer();
      }
    }, 1000);

    return () => clearInterval(checkMidnight);
  }, []);

  const startTimer = async () => {
    if (!timer) {
      const today = new Date();
      setInTime(formatTime(today));

      const newTimer = setInterval(() => {
        setSec((prevSec) => {
          if (prevSec + 1 === 60) {
            setMin((prevMin) => (prevMin + 1 === 60 ? 0 : prevMin + 1));
            if (prevSec === 59 && min === 59) {
              setHour((prevHour) => prevHour + 1);
            }
            return 0;
          } else {
            return prevSec + 1;
          }
        });
      }, 1000);
      setTimer(newTimer);
      setIsRunning(true);

      try {
        await axios.post("http://localhost:8000/start_screenshot");
        console.log("Screenshot taking started");
      } catch (error) {
        console.error("Error starting screenshot taking:", error);
      }
    }
  };

  const stopTimer = async () => {
    clearInterval(timer);
    setTimer(null);
    setIsRunning(false);
    insertElement();

    try {
      await axios.post("http://localhost:8000/stop_screenshot");
      console.log("Screenshot taking stopped");
    } catch (error) {
      console.error("Error stopping screenshot taking:", error);
    }
  };

  const resetTimer = () => {
    clearInterval(timer);
    setTimer(null);
    setSec(0);
    setMin(0);
    setHour(0);
    setTimeStr("00:00:00");
    setIsRunning(false);
  };

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const insertElement = () => {
    setSrNo((prevSrNo) => prevSrNo + 1);

    const date = new Date();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    const today = new Date();
    const outTime = formatTime(today);

    const table = document.getElementById("myTable");
    const row = table.insertRow(-1);

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    cell1.innerHTML = srNo + 1;
    cell2.innerHTML = `${day}-${month}-${year}`;
    cell3.innerHTML = inTime;
    cell4.innerHTML = outTime;
  };

  useEffect(() => {
    const secStr = sec < 10 ? "0" + sec : sec;
    const minStr = min < 10 ? "0" + min : min;
    const hourStr = hour < 10 ? "0" + hour : hour;

    setTimeStr(`${hourStr}:${minStr}:${secStr}`);
  }, [sec, min, hour]);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Timer */}
      <div className="w-1/3 flex flex-col justify-center items-center h-1/3 mt-16">
        {/* Time */}
        <div className="flex justify-center items-center text-center w-full p-5 text-[#f3f3f3] bg-[#202f5e] rounded-t-lg text-3xl">
          {timeStr}
        </div>
        {/* Buttons */}
        <div className="flex justify-center items-center gap-10 text-center p-5 bg-[#EBF4F6] rounded-b-lg w-full">
          <button
            className={`border border-black ${isRunning && 'opacity-50'} rounded-sm px-2`}
            onClick={startTimer}
            disabled={isRunning}
          >
            Start
          </button>
          <button
            className={`border border-black ${!isRunning && 'opacity-50'} rounded-sm px-2`}
            onClick={stopTimer}
            disabled={!isRunning}
          >
            Stop
          </button>
        </div>
      </div>
      {/* Table */}
      <table id="myTable" className="mt-16 w-11/12">
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Date</th>
            <th>In Time</th>
            <th>Out Time</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Track;
