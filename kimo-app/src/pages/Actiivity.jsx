//import necessary dependencies
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivity } from "../redux/action";
import { useParams } from 'react-router-dom';

//create a functional component for displaying activities
export default function Activity() {
  //initialize activity type by extracting from the URL
  const {activityType} = useParams()
  
  //initialize dispatch and state for loading and error
  const dispatch = useDispatch();
  const obj = useSelector((state) => state.activity);
  const loading = useSelector((state) => state.activity.loading);
  const error = useSelector((state) => state.activity.error);

  //fetch activities from API on component mount and when activityType changes
  useEffect(() => {
    dispatch(fetchActivity(activityType));
  }, [dispatch, activityType]);

  //render the activity section with appropriate information based on state
  return (
    <div className="bg-[#E6F2F2] min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-3xl px-4 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 font-IBM-Plexo">Activities for {activityType}</h1>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error.message}</p>
        ) : obj ? (
          <div className="space-y-4">
            <p className="font-IBM-Plexo">{obj.description}</p>
            {obj.activities && obj.activities.length > 0 ? (
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {obj.activities.map((activity, index) => (
                  <li
                    key={index}
                    className="bg-white rounded-lg shadow-md px-4 py-2 flex flex-col justify-between"
                  >
                    <h3 className="text-lg font-semibold mb-2 font-IBM-Plexo">{activity.name}</h3>
                    <p className="text-gray-500 font-IBM-Plexo">{activity.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center">No activities found.</p>
            )}
          </div>
        ) : (
          <p className="text-center">No activities found.</p>
        )}
      </div>
    </div>
  );
}
