import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moodData from "../moodData";

const Feeds = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const selectedMoodData = moodData.find((item) =>
    new Date(item.date).toDateString() === selectedDate.toDateString()
  );

  const defaultMoodData = [
        {mood: "😠", percentage: 90 },
        { mood: "😄", percentage: 40 },
        { mood: "😢", percentage: 50 },
        { mood: "😭", percentage: 14 },
        { mood: "😡", percentage: 45 },
        { mood: "😔", percentage: 25 }
  ];

  const minDate = new Date("2024-06-07");
  const maxDate = new Date("2024-06-12");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Feeds</h1>
      <div className="mb-4">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select a date"
          className="px-4 py-2 border border-gray-300 rounded"
          minDate={minDate}
          maxDate={maxDate}
        />
      </div>
      <div>
        {selectedMoodData ? (
          <ul>
            {selectedMoodData.moods.map((mood, index) => (
              <li key={index} className="flex items-center mb-2">
                <span className="mr-2">{mood.mood}</span>
                <div className="w-48 h-4 bg-gray-200 rounded-full mr-2">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${mood.percentage}%` }}
                  ></div>
                </div>
                <span>{mood.percentage}%</span>
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {defaultMoodData.map((mood, index) => (
              <li key={index} className="flex items-center mb-2">
                <span className="mr-2">{mood.mood}</span>
                <div className="w-48 h-4 bg-gray-200 rounded-full mr-2">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${mood.percentage}%` }}
                  ></div>
                </div>
                <span>{mood.percentage}%</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Feeds;
