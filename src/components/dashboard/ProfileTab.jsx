import React from "react";

const ProfileTab = () => {
  const [activeTab, setActiveTab] = React.useState("profile");
  const [img, setImg] = React.useState("/img-placeholder.png");
  const [name, setName] = React.useState("Oluchi Onyekpa");
  const [number, setNumber] = React.useState("09124244247");
  const [email, setEmail] = React.useState("oluchionyekpa96@gmail.com");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image file (jpg, png, jpeg, etc.)");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result); // set base64 image string as preview
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="">
      <h3 className="text-xl font-sora font-semibold rounded-t-">Profile</h3>
      <div className="font-inter text-sm flex gap-2 font-semibold">
        <p
          className={`${
            activeTab === "profile" ? "bg-white" : "bg-[#F7F8FA]"
          } cursor-pointer max-w-[150px] w-full text-center shadow-md p-4 rounded-t-2xl`}
          onClick={() => setActiveTab("profile")}
        >
          My Profile
        </p>
        <p
          className={`${
            activeTab === "specialist" ? "bg-white" : "bg-[#F7F8FA]"
          } cursor-pointer max-w-[150px] w-full text-center shadow-md p-4 rounded-t-2xl`}
          onClick={() => setActiveTab("specialist")}
        >
          Area Specialist
        </p>
        <p
          className={`${
            activeTab === "edit" ? "bg-white" : "bg-[#F7F8FA]"
          } cursor-pointer max-w-[150px] w-full text-center shadow-md p-4 rounded-t-2xl`}
          onClick={() => setActiveTab("edit")}
        >
          Edit Profile
        </p>
      </div>
      {/* My profile */}
      {activeTab === "profile" && (
        <div className="px-4 py-8 rounded-b-2xl rounded-tr-2xl bg-white shadow-md">
          <section className="space-y-4">
            <p className="text-xl font-sora font-semibold">
              Verified Member Since Jul 2025
            </p>
            <p className="text-[#1E1E1E]">
              Free Website Setup Powered by propertypro.ng
            </p>
            <p className="text-[#1E1E1E]">oluchi-onyekpa.realtornigeria.com</p>
            <div className="flex">
              <label htmlFor="email" className="flex max-h-[40px] h-fit">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value="oluchi-onyekpa"
                  className="p-4 border border-neutral2 text-sm"
                />
                <p className=" bg-[#EEEEEE] font-semibold text-[#565658] py-2 px-4">
                  .realtornigeria.com
                </p>
              </label>
              <button className="bg-[#4B3DFE] w-[160px] text-white font-semibold rounded-r-lg">
                Submit
              </button>
            </div>
          </section>
          <hr className="my-6 border-t border-neutral2" />
          <section className="space-y-4">
            <div>
              <h3 className="text-xl font-sora font-semibold">
                Verified Member Since Jul 2025
              </h3>
            </div>
            <div className="flex justify-between w-[80%]">
              <section className="space-y-2">
                <p className="text-[#1E1E1E]">{name}</p>
                <p className="text-[#1E1E1E]">{number}</p>
                <p className="text-[#1E1E1E]">Dial code: 234</p>
                <p className="text-[#1E1E1E]">{email}</p>
              </section>
              <section className="flex items-center gap-6">
                <div>
                  <img src={img} alt="profile-pic" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="img" className="text-[#000000] text-sm">
                    change logo
                  </label>
                  <input
                    type="file"
                    name="img"
                    id="img"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="border font-semibold border-neutral2 "
                  />
                </div>
              </section>
            </div>
          </section>
          <hr className="my-6 border-t border-neutral2" />

          <section>
            <div className="py-3">
              <h3 className="text-xl font-sora font-semibold">
                Uploaded Files
              </h3>
            </div>
            <p>Govt. Issued ID:</p>
            <p>No uploaded document yet</p>
          </section>
          <hr className="my-6 border-t border-neutral2" />
          <section>
            <p>Upload a Selfie Photo:</p>
            <p>No uploaded document yet</p>
          </section>
          <hr className="my-6 border-t border-neutral2" />
          <section>
            <p>Business CAC Document:</p>
            <p>No uploaded document yet</p>
          </section>
          <hr className="my-6 border-t border-neutral2" />
          <section>
            <p>Business Name:</p>
            <p>Business Address:</p>
          </section>
        </div>
      )}
      {/* specialist */}
      {activeTab === "specialist" && (
        <div className="bg-white rounded-b-2xl space-y-4 rounded-tr-2xl shadow-md py-8 px-4">
          <h3 className="text-xl font-sora font-semibold">Area Specialist</h3>
          <div>
            <table className="w-full border border-neutral2 text-left text-[#565658] font-bold text-xs">
              <tr>
                <th className="border border-neutral2 px-4 py-4 ">
                  Area Specialist photo
                </th>
                <th className="border border-neutral2 px-4 py-4">
                  Area Specialist
                </th>
                <th className="border border-neutral2 px-4 py-4">Location</th>
                <th className="border border-neutral2 px-4 py-4">Action</th>
              </tr>
            </table>
          </div>
        </div>
      )}
      {activeTab === "edit" && (
        <div className="bg-white rounded-b-2xl space-y-4 rounded-tr-2xl shadow-md py-8 px-4">
          <div className="space-y-2 pb-4">
            <h3 className="text-xl font-sora font-semibold">My Profile</h3>
            <section className=" flex items-center justify-between">
              <div className="flex flex-col w-[48%]">
                <label htmlFor="contactname">Contact Name *</label>
                <input
                  type="text"
                  name="contactname"
                  id="contactname"
                  className="px-4 py-2 rounded border border-neutral2 text-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-[48%]">
                <label htmlFor="businessname">Business Name *</label>
                <input
                  type="text"
                  name="businessname"
                  className="px-4 py-2 rounded border  border-neutral2 text-sm"
                  id="businessname"
                  value={"e.g Properties Limited"}
                />
              </div>
            </section>
            <section className="flex flex-col gap-1">
              <label htmlFor="logo">Logo</label>
              <input
                type="file"
                name="logo"
                id="logo"
                accept="image/*"
                onChange={handleImageChange}
                className="w-[48%] rounded border font-semibold border-neutral2 "
              />
            </section>
          </div>
          <hr className="my-40 border-t border-neutral2" />

          <div className="space-y-4 py-4">
            <h3 className="text-xl font-sora font-semibold">
              Enter password only if you are changing it
            </h3>
            <div className="flex justify-between">
              <section className="w-[48%] flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="py-1 border px-4 rounded border-neutral2 "
                />
              </section>
              <section className="w-[48%] flex flex-col">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  className="py-1 px-4 border rounded border-neutral2 "
                />
              </section>
            </div>
          </div>
          <hr className="my-6 border-t border-neutral2" />
          <div className="py-4">
            <h3 className="text-xl font-sora font-semibold">Contact</h3>
            <div className="space-y-2">
              <section className="flex justify-between">
                <div className="flex flex-col w-[30%] gap-1">
                  <label htmlFor="countrycode">Country Code</label>
                  <select
                    name="countrycode"
                    id="countrycode"
                    className="py-1 px-4 border rounded border-neutral2"
                  >
                    <option value="nigeria">Nigeria (+234)</option>
                  </select>
                </div>
                <div className="flex flex-col w-[30%] gap-1">
                  <label htmlFor="number">Phone Number (Digits Only)</label>
                  <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="py-1 px-4 border rounded border-neutral2 "
                  />
                </div>
                <div className="flex flex-col w-[30%] gap-1">
                  <label htmlFor="whatsappnumber">
                    Whatsapp Number (Digits Only)
                  </label>
                  <input
                    type="number"
                    className="py-1 border rounded border-neutral2 px-4 "
                  />
                </div>
              </section>
              <section>
                <div className="flex flex-col">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="py-1 border w-[30%] rounded border-neutral2 px-4 "
                  />
                </div>
              </section>
            </div>
          </div>
          <hr className="my-6 border-t border-neutral2" />
          <div className="py-4">
            <h3 className="text-xl font-sora font-semibold">Address</h3>
            <div className="space-y-3">
              <section className="flex justify-between">
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="officestate">Office State</label>
                  <select
                    name="officestate"
                    id="officestate"
                    className="py-1 border rounded border-neutral2 px-4 "
                  >
                    <option value="nigeria">Select</option>
                  </select>
                </div>
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="officelga">Office Lga</label>
                  <select
                    name="officelga"
                    id="officelga"
                    className="py-1 border rounded border-neutral2 px-4 "
                  >
                    <option value="nigeria">Select</option>
                  </select>
                </div>
              </section>
              <section>
                <div className="flex flex-col">
                  <label htmlFor="officeaddress">Your Office Address</label>
                  <input
                    type="text"
                    name="officeaddress"
                    id="officeaddress"
                    value={"e.g No 28 Tosin Street, Ikeja"}
                    className="py-1 border rounded border-neutral2 px-4 "
                  />
                </div>
              </section>
            </div>
          </div>
          <hr className="my-6 border-t border-neutral2" />
          <div className="py-4">
            <h3 className="text-xl font-sora font-semibold">
              About Your Organisation
            </h3>
            <div className="mt-4">
              <label htmlFor="organisation">
                <textarea
                  name="organisation"
                  id="organisation"
                  className="resize-none border rounded border-neutral2 w-full p-4 lg:h-[112px]"
                  placeholder="Describe your Organization"
                ></textarea>
              </label>
            </div>
          </div>
          <hr className="my-6 border-t border-neutral2" />
          <div className="py-4">
            <h3 className="text-xl font-sora font-semibold">
              Services your organization provides
            </h3>
            <div>
              <label htmlFor="organisationservices">
                <textarea
                  name="organisationservices"
                  id="organisationservices"
                  placeholder="e.g facility management"
                  className="lg:h-[112px] resize-none border rounded border-neutral2 w-full p-4"
                ></textarea>
              </label>
            </div>
          </div>
          <hr className="my-6 border-t border-neutral2" />
          <div className="py-4">
            <h3 className="text-xl font-sora font-semibold">Address</h3>
            <div className="flex justify-between">
              <div className="flex flex-col gap-1 w-[30%]">
                <label htmlFor="businesstate">Business State</label>
                <select
                  name="businesstate"
                  id="businesstate"
                  className="py-1 border rounded border-neutral2 px-4"
                >
                  <option value="nigeria">Select</option>
                </select>
              </div>
              <div className="flex flex-col gap-1 w-[30%]">
                <label htmlFor="businesaxis">Business Axis</label>
                <select
                  name="businesaxis"
                  id="businesaxis"
                  className="py-1 border rounded border-neutral2 px-4"
                >
                  <option value="nigeria">Select</option>
                </select>
              </div>
              <div className="flex flex-col gap-1 w-[30%]">
                <label htmlFor="businescategory">Business Category</label>
                <select
                  name="businescategory"
                  id="businescategory"
                  className="py-1 border rounded border-neutral2 px-4"
                >
                  <option value="nigeria">Select</option>
                </select>
              </div>
            </div>
          </div>
          <hr className="my-6 border-t border-neutral2" />
          <div className="space-y-2">
            <h3 className="text-xl font-sora font-semibold">Uploaded Files</h3>
            <label htmlFor="governmentid" className="space-y-1">
              <p>Govt. Issued ID:</p>
              <input
                type="file"
                name="governmentid"
                id="governmentid"
                accept="image/*"
                className="border font-semibold border-neutral2 "
              />
              <p>Click to upload</p>
            </label>
          </div>
          <hr className="my-6 border-t border-neutral2" />
          <div className="">
            <label htmlFor="selfiephoto" className="space-y-1">
              <p>Selfie Photo:</p>
              <input
                type="file"
                name="selfiephoto"
                id="selfiephoto"
                accept="image/*"
                className="border font-semibold border-neutral2 "
              />
              <p>Click to upload</p>
            </label>
          </div>
          <hr className="my-6 border-t border-neutral2" />
          <div>
            <label htmlFor="businesscac" className="space-y-1">
              <p>Business CAC Document:</p>
              <input
                type="file"
                name="businesscac"
                id="businesscac"
                accept="image/*"
                className="border font-semibold border-neutral2 "
              />
              <p>Click to upload</p>
            </label>
          </div>
          <hr className="my-6 border-t border-neutral2" />
          <div>
            <h3 className="text-xl font-sora font-semibold">Uploaded Files</h3>
            <section className="flex justify-between">
              <div className="flex flex-col">
                <label htmlFor="facebook">Facebook</label>
                <input
                  type="text"
                  value={"Facebook.com/johndoe"}
                  className="py-1 px-4 border font-semibold border-neutral2 rounded "
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="facebook">Twitter</label>
                <input
                  type="text"
                  value={"Twitter.com/johndoe"}
                  className="py-1 px-4 border font-semibold border-neutral2 rounded "
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="facebook">LinkedIn</label>
                <input
                  type="text"
                  value={"LinkedIn.com/johndoe"}
                  className="py-1 px-4 border font-semibold border-neutral2 rounded "
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="facebook">Instagram</label>
                <input
                  type="text"
                  value={"Instagram.com/johndoe"}
                  className="py-1 px-4 border font-semibold border-neutral2 rounded "
                />
              </div>
            </section>
          </div>
          <br />
          <div className="text-center mt-4">
            <button
              onClick={(e) => e.preventDefault()}
              className="bg-[#4B3DFE] text-white rounded-lg py-2 px-4 w-[200px]"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileTab;
