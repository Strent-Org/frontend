import React from "react";
import { Features } from "./data";
import { ChevronDown, Upload } from "lucide-react";
const Posting = () => {
  const [active, setActive] = React.useState("1");
  const [images, setImages] = React.useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);
  };
  return (
    <div className="">
      <div className="flex items-center gap-4 justify-center mb-10">
        <section
          className={`h-14 w-14 rounded-full flex items-center justify-center ${
            active === "1"
              ? "bg-[#4B3DFE] text-white"
              : "bg-white text-[#212529]"
          }`}
        >
          1
        </section>
        <hr className="h-0.5 w-40 bg-gray-200 border-0" />
        <section
          className={`h-14 w-14 rounded-full flex items-center justify-center ${
            active === "2"
              ? "bg-[#4B3DFE] text-white"
              : "bg-white text-[#212529]"
          }`}
        >
          2
        </section>
        <hr className="h-0.5 w-40 bg-gray-200 border-0" />
        <section
          className={`h-14 w-14 rounded-full flex items-center justify-center ${
            active === "3"
              ? "bg-[#4B3DFE] text-white"
              : "bg-white text-[#212529]"
          }`}
        >
          3
        </section>
      </div>
      {active === "3" ? (
        <div>
          <h1 className="text-2xl font-sora font-semibold mb-2">
            Upload pictures for 6NQYM
          </h1>
          <p className="mb-2">
            2 bedroom Commercial Property for rent Abua-Odual Rivers
          </p>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-sora font-semibold mb-2">
            Tell us more about this listing
          </h1>
          <p className="mb-2">
            We will be more than happy to assist you. Please contact our support
            team if you have any issues during your listing creation.
          </p>
        </div>
      )}
      <div className="flex justify-between">
        <section className="w-[68%]">
          {active === "1" && (
            <div className="space-y-4 w-full">
              <section className="flex flex-col gap-2 bg-white py-8 px-4 rounded-2xl">
                <label htmlFor="title" className="text-xl font-semibold">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="e.g Newly built 4 bedroom Duplex in a serene Neighbourhood"
                  className="rounded border py-1 px-4 font-semibold border-neutral2 "
                />
              </section>
              <section className="flex flex-col gap-2 bg-white py-8 px-4 rounded-2xl">
                <h3 className="text-xl font-semibold">Purpose</h3>
                <div className="space-x-4">
                  <button className="rounded border py-2 w-[200px] font-bold text-xs border-neutral2 ">
                    {" "}
                    For Rent{" "}
                  </button>
                  <button className="rounded te border py-2 w-[200px] font-bold text-xs border-neutral2 ">
                    {" "}
                    Shortlet{" "}
                  </button>
                </div>
              </section>
              <div className="bg-white py-8 px-4 rounded-2xl space-y-4">
                <section className="flex flex-col gap-2 ">
                  <h3 className="text-xl font-semibold">Select a Location</h3>
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-1 w-[30%]">
                      <label htmlFor="state">State</label>
                      <select
                        name="state"
                        id="state"
                        className="py-1 border rounded border-neutral2 px-4"
                      >
                        <option value="select">Select</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1 w-[30%]">
                      <label htmlFor="locality">Locality</label>
                      <select
                        name="locality"
                        id="locality"
                        className="py-1 border rounded border-neutral2 px-4"
                      >
                        <option value="select">Select</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1 w-[30%]">
                      <label htmlFor="area">Area</label>
                      <select
                        name="area"
                        id="area"
                        className="py-1 border rounded border-neutral2 px-4"
                      >
                        <option value="choosearea">Choose Area</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 bg-white rounded-2xl">
                    <label htmlFor="title" className="text-xl font-semibold">
                      Street / Estate / Neighbourhood
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="rounded border py-1 px-4 font-semibold border-neutral2 "
                    />
                  </div>
                </section>
                <section className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">Property Type</h3>
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-1 w-[48%]">
                      <label htmlFor="property">Type of property</label>
                      <select
                        name="property"
                        id="property"
                        className="py-1 border rounded border-neutral2 px-4"
                      >
                        <option value="select">Select</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1 w-[48%]">
                      <label htmlFor="subproperty">Sub type of property</label>
                      <select
                        name="subproperty"
                        id="subproperty"
                        className="py-1 border rounded border-neutral2 px-4"
                      >
                        <option value="select">Select</option>
                      </select>
                    </div>
                  </div>
                </section>
                <section className="text-center mt-4">
                  <button
                    onClick={(e) => e.preventDefault()}
                    className="bg-[#4B3DFE] text-white rounded-lg py-2 px-4 w-[200px]"
                  >
                    Add Bustop
                  </button>
                </section>
              </div>
              <section className="text-right mt-4">
                <button
                  onClick={() => setActive("2")}
                  className="bg-[#4B3DFE] text-white rounded-lg py-2 px-4 w-[200px]"
                >
                  Next
                </button>
              </section>
            </div>
          )}
          {/* 2nd page */}
          {active === "2" && (
            <div className="space-y-4 w-full">
              <div className="bg-white py-8 px-4 rounded-2xl space-y-4">
                <section className="flex flex-col gap-2 ">
                  <h3 className="text-xl font-semibold">Pricing</h3>
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-1 w-[48%]">
                      <label htmlFor="price">Price</label>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className="py-1 border rounded border-neutral2 px-4"
                        placeholder="e.g 3000000 (comma is added for you)"
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-[48%]">
                      <label htmlFor="denomination">Denomination</label>
                      <select
                        name="denomination"
                        id="denomination"
                        className="py-1 border rounded border-neutral2 px-4"
                      >
                        <option value="naira">Naira</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="installment"
                      className="flex items-center gap-2 text-sm"
                    >
                      <input type="checkbox" />
                      <span>Installmental Payment</span>
                    </label>
                  </div>
                  <div className="flex flex-col gap-2 bg-white rounded-2xl">
                    <label htmlFor="title" className="text-xl font-semibold">
                      Append to
                    </label>
                    <select
                      name="title"
                      id="title"
                      className="rounded border py-1 px-4 border-neutral2 "
                    >
                      <option value="select">Select</option>
                    </select>
                  </div>
                </section>
              </div>
              <div className="bg-white py-8 px-4 rounded-2xl space-y-4">
                <section className="flex flex-col gap-2 ">
                  <h3 className="text-xl font-semibold">Type</h3>
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-1 w-[30%]">
                      <label htmlFor="bedroom">Bedrooms</label>
                      <select
                        name="bedroom"
                        id="bedroom"
                        className="py-1 border rounded border-neutral2 px-4"
                      >
                        <option value="select">Select</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1 w-[30%]">
                      <label htmlFor="bathrooms">Bathrooms</label>
                      <select
                        name="bathrooms"
                        id="bathrooms"
                        className="py-1 border rounded border-neutral2 px-4"
                      >
                        <option value="select">Select</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1 w-[30%]">
                      <label htmlFor="toilets">Toilets</label>
                      <select
                        name="toilets"
                        id="toilets"
                        className="py-1 border rounded border-neutral2 px-4"
                      >
                        <option value="select">Select</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 bg-white rounded-2xl">
                    <label htmlFor="title" className="text-xl font-semibold">
                      Area Size
                    </label>
                    <div className="w-full">
                      <input
                        type="text"
                        name="areasize"
                        id="areasize"
                        placeholder="e.g 1"
                        className="rounded-l border py-1 px-4 w-[90%] border-neutral2 "
                      />
                      <span className="text-sm text-[#565658] w-full py-2 px-4 bg-[#E9E9E9]">
                        SQM
                      </span>
                    </div>
                  </div>
                  <div className="space-x-4 flex">
                    <label
                      htmlFor="installment"
                      className="flex items-center gap-2 text-sm"
                    >
                      <input type="checkbox" />
                      <span>Furnished</span>
                    </label>
                    <label
                      htmlFor="installment"
                      className="flex items-center gap-2 text-sm"
                    >
                      <input type="checkbox" />
                      <span>Serviced</span>
                    </label>
                    <label
                      htmlFor="installment"
                      className="flex items-center gap-2 text-sm"
                    >
                      <input type="checkbox" />
                      <span>Newly Built</span>
                    </label>
                  </div>
                </section>
              </div>
              <div className="bg-white py-8 px-4 rounded-2xl space-y-4">
                <div className="">
                  <h3 className="text-xl font-sora font-semibold">
                    Description
                  </h3>
                  <div className="mt-2">
                    <label htmlFor="organisation">
                      <textarea
                        name="organisation"
                        id="organisation"
                        className="resize-none border rounded border-neutral2 w-full p-4 lg:h-[112px]"
                        placeholder="Describe your property..."
                      ></textarea>
                    </label>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-sora font-semibold">Features</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {Features.map((item, i) => (
                      <label
                        htmlFor={item}
                        key={i}
                        className="flex items-center gap-2 text-sm"
                      >
                        <input type="checkbox" />
                        <span>{item}</span>
                      </label>
                    ))}
                    <p className="flex gap-2 items-center text-[#4B3DFE] cursor-pointer">
                      see more{" "}
                      <span>
                        <ChevronDown size={16} className="mt-1" />
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="youtube">Youtube Video</label>
                  <input
                    type="text"
                    name="youtube"
                    id="youtube"
                    placeholder="Link to your youtube video"
                    className="py-2 border rounded border-neutral2 px-4 "
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  className="bg-[#4B3DFE] text-white rounded-lg py-2 px-4 w-[200px]"
                  onClick={() => setActive("1")}
                >
                  Previous steps
                </button>
                <button
                  className="bg-[#4B3DFE] text-white rounded-lg py-2 px-4 w-[200px]"
                  onClick={() => setActive("3")}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* 3rd part */}
          {active === "3" && (
            <div className="space-y-4 w-full">
              <section className="p-4 bg-[#EDECFF]">
                <p className="text-sm">
                  You can now choose multiple images at once
                </p>
              </section>
              <section>
                <div className="flex flex-col gap-6">
                  {/* Giant Upload Button */}
                  <label
                    htmlFor="image-upload"
                    className="w-full max-w-[240px] bg-white shadow-md h-64 p-4 border-dashed border-gray-400 rounded-2xl cursor-pointer hover:border-blue-500 transition"
                  >
                    <div className="flex flex-col bg-[#EFEFEF] border border-neutral2 items-center justify-center h-full">
                      <Upload className="w-10 h-10 text-gray-500 mb-2" />
                      <span className="text-gray-600 font-medium">
                        Upload Images
                      </span>
                      <input
                        id="image-upload"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </div>
                  </label>

                  {/* Preview */}
                  {images.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {images.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`Upload ${i}`}
                          className="w-full h-40 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </section>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setActive("2")}
                  className="bg-[#4B3DFE] text-white rounded-lg py-2 px-4 w-[200px]"
                >
                  Previous Steps
                </button>
                <button
                  onClick={(e) => e.preventDefault()}
                  className="bg-[#4B3DFE] text-white rounded-lg py-2 px-4 w-[200px]"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </section>
        <section className="w-[30%] shadow-md bg-white h-fit p-4 space-y-3 rounded-2xl">
          <div>
            <h3 className="text-xl font-semibold">Support & Enquiries</h3>
          </div>
          <div>
            <p>
              Please contact our support team and we are more than happy to help
            </p>
          </div>
          <div>
            <p className="font-bold">
              Opening Hours Mondays - Fridays: 10am - 6pm
            </p>
          </div>
          <div>
            <p>support@strent.ng</p>
            <p>+234 913 456 7890</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Posting;
