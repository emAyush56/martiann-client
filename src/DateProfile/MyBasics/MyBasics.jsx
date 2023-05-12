import {
  AcademicCapIcon,
  AtSymbolIcon,
  BoltIcon,
  FireIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

export default function MyBasics({ idx, itemSelected, setItemSelected }) {
  const itemToggler = (idx) => {
    if (itemSelected === idx) return setItemSelected(null);
    setItemSelected(idx);
  };

  const myBasicsOptions = [
    {
      id: 1,
      icon: AtSymbolIcon,
      title: "Height",
    },
    {
      id: 2,
      icon: BoltIcon,
      title: "Exercise",
    },
    {
      id: 3,
      icon: AcademicCapIcon,
      title: "Education Level",
    },
    {
      id: 4,
      icon: FireIcon,
      title: "Drinking",
    },
    {
      id: 5,
      icon: LifebuoyIcon,
      title: "Smoking",
    },
  ];

  const myPlaces = [
    {
      id: 1,
      title: "Add where I live",
    },
    {
      id: 2,
      title: "Add where I'm from",
    },
  ];

  return (
    <div
      className={`my-basics mt-4 rounded-3xl p-6 transition-all hover:bg-gray-50 ${
        itemSelected === idx ? " bg-gray-50" : null
      }`}
    >
      <div
        onClick={() => itemToggler(idx)}
        className="my-basics-heading group flex items-center hover:cursor-pointer"
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
        className={`my-basics-items transition-all duration-200 ${
          itemSelected === idx ? "max-h-[50rem]" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="mt-3">
          <div className="my-basics-options mt-5 space-y-3">
            {myBasicsOptions.map((item) => {
              return (
                <MyBasicsSingleOption
                  key={item.id}
                  OptionIcon={item.icon}
                  optionTitle={item.title}
                />
              );
            })}
          </div>
          <div className="my-basics-places mt-6">
            <span className="text-gray-500">My places</span>
            <div className="my-places mt-3 space-y-3">
              {myPlaces.map((item) => {
                return <MyPlace key={item.id} title={item.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyBasicsSingleOption({ OptionIcon, optionTitle }) {
  return (
    <div className="my-basics-option">
      <button className="group flex w-full items-center rounded-full border border-gray-300/70 bg-white px-5 py-2 transition-all hover:border-gray-300 hover:bg-transparent">
        <OptionIcon className={`h-5 w-5 stroke-2 text-gray-400/60`} />
        <span className="text-gray ml-3">{optionTitle}</span>
        <div className="add-icon ml-auto">
          <PlusIcon
            className={`h-5 w-5 stroke-[3] text-gray-400/60 transition-all hover:text-gray-400`}
          />
        </div>
      </button>
    </div>
  );
}

function MyPlace({ title }) {
  return (
    <div className="my-place">
      <button className="group flex w-full items-center rounded-full border border-gray-300/70 bg-white px-5 py-2 transition-all hover:border-gray-300 hover:bg-transparent">
        <span>{title}</span>
        <div className="icon ml-auto">
          <PlusIcon
            className={`h-5 w-5 stroke-[3] text-gray-400/60 transition-all hover:text-gray-400`}
          />
        </div>
      </button>
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
