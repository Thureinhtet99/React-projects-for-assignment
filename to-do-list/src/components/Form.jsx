import React from "react";

const Form = () => {
  return (
    <>
      <section className="flex justify-center items-center my-5">
        <div className="px-2 py-1 border-b-2 rounded">
          <i className="fa-solid fa-magnifying-glass mx-2"></i>
          <input
            type="search"
            className="border-0 rounded px-2 py-1 text-md "
            placeholder="Search note....."
            style={{ minWidth: "30vw" }}
          />
        </div>
      </section>
    </>
  );
};

export default Form;
