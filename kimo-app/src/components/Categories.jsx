import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/action';
import { AiOutlineArrowRight } from "react-icons/ai";

function Categories() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.categories);
  const loading = useSelector((state) => state.categories.loading);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="w-full md:w-1/2 justify-between m-auto md:m-0">
      <div className="h-[80px] flex items-center">
        <p className="heading">Categories</p>
      </div>
      <div className="w-full category">
        {categories.map((elem, index) => (
          <div
            key={index}
            className="w-full flex justify-between p-[24px] rounded-[8px] bg-white"
          >
            <div className="heading font-normal">{elem.name}</div>
            <div>
              <AiOutlineArrowRight className="justify-self-end self-end icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
