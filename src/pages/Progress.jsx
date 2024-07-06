import axios from "axios";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

const Progress = () => {
  const [progressData, setProgressData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchProgressData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/getUserDetails",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = response.data.user.progress;

        setProgressData(data);
        setFilteredData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProgressData();
  }, [token]);

  useEffect(() => {
    if (searchTerm) {
      setFilteredData(
        progressData.filter((item) => item.date.includes(searchTerm))
      );
    } else {
      setFilteredData(progressData);
    }
  }, [searchTerm, progressData]);

  const totalHours = filteredData.reduce(
    (acc, item) => acc + item.totalWork,
    0
  );
  const completedTasks = filteredData.filter(
    (item) => item.totalWork >= 9
  ).length;

  if (loading)
    return (
      <div className="flex justify-center items-center">
        <div className="custom-loader"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6 rounded-3xl">
      <header className="bg-green-600 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-white">Your Progress</h1>
      </header>

      <main className="mt-6">
        {/* summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Total Work Hours
              </h2>
              <p className="text-2xl font-bold text-gray-900">
                {totalHours} hours
              </p>
            </div>
            <div>
              <span className="text-green-500 text-3xl">🕒</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Completed Tasks
              </h2>
              <p className="text-2xl font-bold text-gray-900">
                {completedTasks}
              </p>
            </div>
            <div>
              <span className="text-green-500 text-3xl">
                <AiOutlineCheck />
              </span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Total Entries
              </h2>
              <p className="text-2xl font-bold text-gray-900">
                {filteredData.length}
              </p>
            </div>
            <div>
              <span className="text-blue-500 text-3xl">📅</span>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-6">
          <div className="flex items-center bg-white p-2 rounded-lg shadow-md border border-gray-200 w-full md:w-1/3">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search by date..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 border-b border-gray-300">
                <th className="py-3 px-4 text-center text-gray-600 font-semibold">
                  #
                </th>
                <th className="py-3 px-4 text-center text-gray-600 font-semibold">
                  Date
                </th>
                <th className="py-3 px-4 text-center text-gray-600 font-semibold">
                  Total Work Hours
                </th>
                <th className="py-3 px-4 text-center text-gray-600 font-semibold">
                  Completed
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-100 transition-colors duration-200 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="py-3 px-4 text-gray-700">{index + 1}</td>
                  <td className="py-3 px-4 text-gray-700">{item.date}</td>
                  <td className="py-3 px-4 text-gray-700">{item.totalWork}</td>
                  <td className="py-3 px-4 text-gray-700">
                    {item.totalWork >= 9 ? (
                      <span className="text-green-500 flex justify-center items-center">
                        <AiOutlineCheck />
                      </span>
                    ) : (
                      <span className="text-red-500 flex justify-center items-center">
                        <AiOutlineClose />
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Progress;
