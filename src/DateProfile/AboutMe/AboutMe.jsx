import { useState } from "react";
export default function AboutMe({ idx, itemSelected, setItemSelected }) {
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
        itemSelected === idx ? "bg-gray-50" : null
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

function PencilIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
    </svg>
  );
}
