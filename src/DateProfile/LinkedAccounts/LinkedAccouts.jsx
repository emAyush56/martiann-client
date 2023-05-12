export default function LinkedAccounts({ idx, itemSelected, setItemSelected }) {
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
