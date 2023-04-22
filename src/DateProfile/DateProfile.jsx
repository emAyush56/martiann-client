import { useState } from "react";
import UserPhoto from "../_assets/user-profile-photo.jpg";
import "./DateProfile.css";

function DateProfile() {
  const user = {
    name: "Ayush",
    age: 21,
  };

  const [itemSelected, setItemSelected] = useState(null);

  return (
    <div className="wrapper h-full w-full">
      <div className="date-profile mx-auto h-full max-w-lg px-4 py-10">
        <ProfileHeader user={user} />
        {/* <ProfileUserPhotos /> */}
        <ProfileUserPhotos2 />
        <MyProfilePrompts
          idx={1}
          itemSelected={itemSelected}
          setItemSelected={setItemSelected}
        />
        <AboutMe
          idx={2}
          itemSelected={itemSelected}
          setItemSelected={setItemSelected}
        />
        <MyWorkAndEducation
          idx={3}
          itemSelected={itemSelected}
          setItemSelected={setItemSelected}
        />
        <MyBasics
          idx={4}
          itemSelected={itemSelected}
          setItemSelected={setItemSelected}
        />
        <LinkedAccounts
          idx={5}
          itemSelected={itemSelected}
          setItemSelected={setItemSelected}
        />
      </div>
    </div>
  );
}

function ProfileHeader({ user }) {
  return (
    <div className="profile-header flex flex-col items-center">
      <img
        src={UserPhoto}
        alt="user-photo"
        className="h-24 w-24 cursor-pointer rounded-xl transition-all hover:scale-105"
      />
      <span className="ff-taviraj text-theme-purpleX mt-5 inline-block text-2xl font-semibold">{`${user.name.toLowerCase()}, ${
        user.age
      }`}</span>
    </div>
  );
}

function ProfileUserPhotos() {
  return (
    <div className="profile-user-photos mt-8">
      <div className="grid h-[480px] grid-cols-2 grid-rows-2 gap-3">
        <div className="user-photo group rounded-xl border border-gray-200 p-2 transition-all hover:border-gray-300">
          <div className="h-full w-full rounded-xl bg-gray-50 group-hover:cursor-pointer">
            <label
              className="flex h-full w-full cursor-pointer items-center justify-center"
              htmlFor="user-photo-upload"
            >
              <PlusIcon className="h-6 w-6 text-gray-400 transition-all group-hover:text-gray-500" />
              <input
                type="file"
                name="user-photo-upload"
                id="user-photo-upload"
                className="sr-only"
              />
            </label>
          </div>
        </div>
        <div className="user-photo group rounded-xl border border-gray-200 p-2 transition-all hover:border-gray-300">
          <div className="h-full w-full rounded-xl bg-gray-50 group-hover:cursor-pointer">
            <label
              className="flex h-full w-full cursor-pointer items-center justify-center"
              htmlFor="user-photo-upload"
            >
              <PlusIcon className="h-6 w-6 text-gray-400 transition-all group-hover:text-gray-500" />
              <input
                type="file"
                name="user-photo-upload"
                id="user-photo-upload"
                className="sr-only"
              />
            </label>
          </div>
        </div>
        <div className="user-photo group rounded-xl border border-gray-200 p-2 transition-all hover:border-gray-300">
          <div className="h-full w-full rounded-xl bg-gray-50 group-hover:cursor-pointer">
            <label
              className="flex h-full w-full cursor-pointer items-center justify-center"
              htmlFor="user-photo-upload"
            >
              <PlusIcon className="h-6 w-6 text-gray-400 transition-all group-hover:text-gray-500" />
              <input
                type="file"
                name="user-photo-upload"
                id="user-photo-upload"
                className="sr-only"
              />
            </label>
          </div>
        </div>
        <div className="user-photo group rounded-xl border border-gray-200 p-2 transition-all hover:border-gray-300">
          <div className="h-full w-full rounded-xl bg-gray-50 group-hover:cursor-pointer">
            <label
              className="flex h-full w-full cursor-pointer items-center justify-center"
              htmlFor="user-photo-upload"
            >
              <PlusIcon className="h-6 w-6 text-gray-400 transition-all group-hover:text-gray-500" />
              <input
                type="file"
                name="user-photo-upload"
                id="user-photo-upload"
                className="sr-only"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileUserPhotos2() {
  return (
    <div className="profile-user-photos mt-8">
      <div className="grid h-[300px] grid-cols-3 grid-rows-2 gap-3">
        <div className="user-photo group rounded-xl border border-gray-200 p-2 transition-all hover:border-gray-300">
          <div className="h-full w-full rounded-lg bg-gray-50 group-hover:cursor-pointer">
            <label
              className="flex h-full w-full cursor-pointer items-center justify-center"
              htmlFor="user-photo-upload"
            >
              <PlusIcon className="h-6 w-6 text-gray-400 transition-all group-hover:text-gray-500" />
              <input
                type="file"
                name="user-photo-upload"
                id="user-photo-upload"
                className="sr-only"
              />
            </label>
          </div>
        </div>
        <div className="user-photo group rounded-xl border border-gray-200 p-2 transition-all hover:border-gray-300">
          <div className="h-full w-full rounded-lg bg-gray-50 group-hover:cursor-pointer">
            <label
              className="flex h-full w-full cursor-pointer items-center justify-center"
              htmlFor="user-photo-upload"
            >
              <PlusIcon className="h-6 w-6 text-gray-400 transition-all group-hover:text-gray-500" />
              <input
                type="file"
                name="user-photo-upload"
                id="user-photo-upload"
                className="sr-only"
              />
            </label>
          </div>
        </div>
        <div className="user-photo group rounded-xl border border-gray-200 p-2 transition-all hover:border-gray-300">
          <div className="h-full w-full rounded-lg bg-gray-50 group-hover:cursor-pointer">
            <label
              className="flex h-full w-full cursor-pointer items-center justify-center"
              htmlFor="user-photo-upload"
            >
              <PlusIcon className="h-6 w-6 text-gray-400 transition-all group-hover:text-gray-500" />
              <input
                type="file"
                name="user-photo-upload"
                id="user-photo-upload"
                className="sr-only"
              />
            </label>
          </div>
        </div>
        <div className="user-photo group rounded-xl border border-gray-200 p-2 transition-all hover:border-gray-300">
          <div className="h-full w-full rounded-lg bg-gray-50 group-hover:cursor-pointer">
            <label
              className="flex h-full w-full cursor-pointer items-center justify-center"
              htmlFor="user-photo-upload"
            >
              <PlusIcon className="h-6 w-6 text-gray-400 transition-all group-hover:text-gray-500" />
              <input
                type="file"
                name="user-photo-upload"
                id="user-photo-upload"
                className="sr-only"
              />
            </label>
          </div>
        </div>
        <div className="user-photo group rounded-xl border border-gray-200 p-2 transition-all hover:border-gray-300">
          <div className="h-full w-full rounded-lg bg-gray-50 group-hover:cursor-pointer">
            <label
              className="flex h-full w-full cursor-pointer items-center justify-center"
              htmlFor="user-photo-upload"
            >
              <PlusIcon className="h-6 w-6 text-gray-400 transition-all group-hover:text-gray-500" />
              <input
                type="file"
                name="user-photo-upload"
                id="user-photo-upload"
                className="sr-only"
              />
            </label>
          </div>
        </div>
        <div className="user-photo group rounded-xl border border-gray-200 p-2 transition-all hover:border-gray-300">
          <div className="h-full w-full rounded-lg bg-gray-50 group-hover:cursor-pointer">
            <label
              className="flex h-full w-full cursor-pointer items-center justify-center"
              htmlFor="user-photo-upload"
            >
              <PlusIcon className="h-6 w-6 text-gray-400 transition-all group-hover:text-gray-500" />
              <input
                type="file"
                name="user-photo-upload"
                id="user-photo-upload"
                className="sr-only"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyProfilePrompts({ idx, itemSelected, setItemSelected }) {
  const itemToggler = (idx) => {
    if (itemSelected === idx) return setItemSelected(null);
    setItemSelected(idx);
  };

  const promptItemsOptions = [
    "I'm hoping you...",
    "After work you can find me...",
    "It's meant to be if...",
  ];

  return (
    <div
      className={`profile-prompts group mt-6 cursor-pointer rounded-3xl p-6 transition-all hover:bg-gray-50 ${
        itemSelected === idx ? "bg-gray-50/70" : null
      }`}
    >
      <div
        onClick={() => itemToggler(idx)}
        className="profile-prompts-heading flex items-center group-hover:cursor-pointer"
      >
        <h4 className="text-xl font-medium ">My Profile Prompts</h4>
        <div className="ml-auto">
          <ChevronDownIcon
            className={`h-5 w-5 stroke-[3] text-gray-400 transition-all duration-200 group-hover:text-gray-500 ${
              itemSelected === idx ? "rotate-180 " : null
            }`}
          />
        </div>
      </div>

      <div
        className={`profile-prompts-items transition-all duration-200 ${
          itemSelected === idx ? "max-h-96" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="mt-6">
          <div className="prompt-1">
            <button>clickme</button>
            <div className="content">something</div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <select
  className="w-full bg-transparent outline-none"
  name="promptItems"
  id="promptItems"
>
  {promptItemsOptions.map((option, idx) => (
    <option key={idx} value={option}>
      {option}
    </option>
  ))}
</select>; */
}

function AboutMe({ idx, itemSelected, setItemSelected }) {
  const itemToggler = (idx) => {
    if (itemSelected === idx) return setItemSelected(null);
    setItemSelected(idx);
  };

  const [textAreaValue, setTextAreaValue] = useState("");

  function handleTextAreaOnChange(event) {
    const inputValue = event.target.value;
    if (inputValue.length <= 300) {
      setTextAreaValue(inputValue);

      // height change logic on adding new line
      event.target.style.height = "auto";
      event.target.style.height = event.target.scrollHeight + "px";
    }
  }

  const [focusSelected, setIsFocusSelected] = useState(false);

  function handleTextAreaOnFocus() {
    setIsFocusSelected(true);
  }

  return (
    <div
      className={`about-me mt-4 overflow-hidden rounded-3xl p-6 transition-all hover:bg-gray-50 ${
        itemSelected === idx ? "bg-gray-50/70" : null
      }`}
    >
      <div
        onClick={() => itemToggler(idx)}
        className="about-me-heading group flex cursor-pointer items-center"
      >
        <h4 className="text-xl font-medium ">About Me</h4>
        <div className="ml-auto">
          <ChevronDownIcon
            className={`h-5 w-5 stroke-[3] text-gray-400 transition-all duration-200 group-hover:text-gray-500 ${
              itemSelected === idx ? "rotate-180" : null
            }`}
          />
        </div>
      </div>

      <div
        className={`about-me-items transition-all duration-200 ${
          itemSelected === idx ? "max-h-[100rem]" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="mt-6">
          <textarea
            placeholder="A little bit about you..."
            value={textAreaValue}
            onChange={handleTextAreaOnChange}
            onFocus={() => handleTextAreaOnFocus()}
            className="text-area-scroll min-h-[80px] w-full resize-none rounded-3xl border border-gray-300/70 px-4 py-3 outline-none transition-all focus:border-gray-400/60 focus:bg-gray-50/70"
          />
          {focusSelected ? (
            <div className="actions mt-1.5 flex items-center justify-between">
              <button
                onClick={() => setIsFocusSelected((prev) => !prev)}
                className="rounded-full bg-transparent px-6 py-2 font-medium text-theme-purple transition-all hover:bg-gray-100/80"
              >
                Cancel
              </button>
              <span className={`text-gray-400`}>
                {textAreaValue.length === 300
                  ? "That's it!"
                  : `${textAreaValue.length} of 300`}
              </span>
              <button className="rounded-full bg-theme-purple px-6 py-2 font-medium text-white transition-all hover:bg-violet-500">
                Save
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function MyWorkAndEducation({ idx, itemSelected, setItemSelected }) {
  const itemToggler = (idx) => {
    if (itemSelected === idx) return setItemSelected(null);
    setItemSelected(idx);
  };

  return (
    <div
      className={`profile-prompts group mt-4 cursor-pointer rounded-3xl p-6 transition-all hover:bg-gray-50 ${
        itemSelected === idx ? "bg-gray-50/70" : null
      }`}
    >
      <div
        onClick={() => itemToggler(idx)}
        className="profile-prompts-heading flex items-center group-hover:cursor-pointer"
      >
        <h4 className="text-xl font-medium ">My Work & Education</h4>
        <div className="ml-auto">
          <ChevronDownIcon
            className={`h-5 w-5 stroke-[3] text-gray-400 transition-all duration-200 group-hover:text-gray-500 ${
              itemSelected === idx ? "rotate-180" : null
            }`}
          />
        </div>
      </div>
      <div
        className={`profile-prompts-items transition-all duration-200 ${
          itemSelected === idx ? "max-h-96" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          possimus labore pariatur fugit adipisci eaque sed officia laboriosam
          error fugiat.
        </div>
      </div>
    </div>
  );
}

function MyBasics({ idx, itemSelected, setItemSelected }) {
  const itemToggler = (idx) => {
    if (itemSelected === idx) return setItemSelected(null);
    setItemSelected(idx);
  };

  return (
    <div
      className={`profile-prompts group mt-4 cursor-pointer rounded-3xl p-6 transition-all hover:bg-gray-50 ${
        itemSelected === idx ? "bg-gray-50/70" : null
      }`}
    >
      <div
        onClick={() => itemToggler(idx)}
        className="profile-prompts-heading flex items-center group-hover:cursor-pointer"
      >
        <h4 className="text-xl font-medium ">My Basics</h4>
        <div className="ml-auto">
          <ChevronDownIcon
            className={`h-5 w-5 stroke-[3] text-gray-400 transition-all duration-200 group-hover:text-gray-500 ${
              itemSelected === idx ? "rotate-180" : null
            }`}
          />
        </div>
      </div>
      <div
        className={`profile-prompts-items transition-all duration-200 ${
          itemSelected === idx ? "max-h-96" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          possimus labore pariatur fugit adipisci eaque sed officia laboriosam
          error fugiat.
        </div>
      </div>
    </div>
  );
}

function LinkedAccounts({ idx, itemSelected, setItemSelected }) {
  const itemToggler = (idx) => {
    if (itemSelected === idx) return setItemSelected(null);
    setItemSelected(idx);
  };

  return (
    <div
      className={`profile-prompts group mt-4 cursor-pointer rounded-3xl p-6 transition-all hover:bg-gray-50 ${
        itemSelected === idx ? "bg-gray-50/70" : null
      }`}
    >
      <div
        onClick={() => itemToggler(idx)}
        className="profile-prompts-heading flex items-center group-hover:cursor-pointer"
      >
        <h4 className="text-xl font-medium ">Linked Accounts</h4>
        <div className="ml-auto">
          <ChevronDownIcon
            className={`h-5 w-5 stroke-[3] text-gray-400 transition-all duration-200 group-hover:text-gray-500 ${
              itemSelected === idx ? "rotate-180" : null
            }`}
          />
        </div>
      </div>
      <div
        className={`profile-prompts-items transition-all duration-200 ${
          itemSelected === idx ? "max-h-96" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          possimus labore pariatur fugit adipisci eaque sed officia laboriosam
          error fugiat.
        </div>
      </div>
    </div>
  );
}

// Icons

function PlusIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}

function ChevronDownIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default DateProfile;
