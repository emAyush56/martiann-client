function AboutMe({ idx, itemSelected, setItemSelected }) {
  const itemToggler = (idx) => {
    if (itemSelected === idx) return setItemSelected(null);
    setItemSelected(idx);
  };

  const [textAreaValue, setTextAreaValue] = useState("");
  const [textAreaCharLimit, setTextAreaCharLimit] = useState(300);

  function handleTextAreaChange(event) {
    // height change logic on adding new line
    setTextAreaValue(event.target.value);
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  }

  const [focusSelected, setIsFocusSelected] = useState(false);

  function handleTextAreaOnFocus() {
    setIsFocusSelected(true);
  }

  return (
    <div
      className={`about-me mt-4 cursor-pointer overflow-hidden rounded-3xl p-6 transition-all hover:bg-gray-50 ${
        itemSelected === idx ? "bg-gray-50/70" : null
      }`}
    >
      <div
        onClick={() => itemToggler(idx)}
        className="about-me-heading group flex items-center hover:cursor-pointer"
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
          itemSelected === idx ? "max-h-96" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="mt-6">
          <textarea
            placeholder="A little bit about you..."
            value={textAreaValue}
            onChange={(event) => handleTextAreaChange(event)}
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
              {/* <span
                className={`${
                  textAreaCharLimit <= 50 ? "text-red-500" : "text-gray-400"
                }`}
              >
                {textAreaCharLimit} left
              </span> */}
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
