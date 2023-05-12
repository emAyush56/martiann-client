import { useState } from "react";

export default function MyProfilePrompts({
  idx,
  itemSelected,
  setItemSelected,
}) {
  const itemToggler = (idx) => {
    if (itemSelected === idx) return setItemSelected(null);
    setItemSelected(idx);
  };

  const promptItemsOptions = [
    {
      id: 1,
      title: "I'm hoping you...",
      data: "love watching movies",
    },
    {
      id: 2,
      title: "After work you can find me...",
      data: "hanging out with my bois",
    },
    {
      id: 3,
      title: "It's meant to be if...",
      data: "the universe wants it to be",
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div
      className={`profile-prompts mt-6 rounded-3xl p-6 transition-all hover:bg-gray-50 ${
        itemSelected === idx ? "bg-gray-50" : null
      }`}
    >
      <div
        onClick={() => itemToggler(idx)}
        className="profile-prompts-heading group flex items-center hover:cursor-pointer"
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
        <div className="mt-6 space-y-3 pb-2">
          {promptItemsOptions.map((item) => {
            return (
              <Prompt
                key={item.id}
                promptTitle={item.title}
                promptData={item.data}
              />
            );
          })}
          <div className="add-a-prompt">
            <button
              onClick={() => setModalIsOpen(true)}
              className="group flex w-full items-center rounded-full border border-gray-300/70 bg-white px-5 py-2 transition-all hover:border-gray-300 hover:bg-transparent"
            >
              <div className="icon">
                <PlusIcon className={`h-5 w-5 stroke-[3] text-gray-400`} />
              </div>
              <span className="ml-2 font-medium">Add a prompt</span>
            </button>
            <ModalPopUp
              isOpen={modalIsOpen}
              onClose={() => setModalIsOpen(false)}
            >
              <div className="w-96 text-center">
                <span className="block text-2xl font-medium">Add a prompt</span>
                <div className="inputs mt-6 space-y-3">
                  <input
                    type="text"
                    placeholder="Prompt title"
                    className="w-full rounded-full border border-gray-300 px-5 py-2 outline-none"
                  />
                  <textarea
                    placeholder="A little bit about you..."
                    className="text-area-scroll min-h-[80px] w-full resize-none rounded-3xl border border-gray-300/70 px-4 py-3 outline-none transition-all focus:border-gray-400/60 focus:bg-gray-50/70"
                  />
                </div>
                <div className="save mt-5">
                  <button className="rounded-full bg-theme-purple px-6 py-2 font-medium text-white transition-all hover:bg-violet-500">
                    Save
                  </button>
                </div>
              </div>
            </ModalPopUp>
          </div>
        </div>
      </div>
    </div>
  );
}

function Prompt({ promptTitle, promptData }) {
  return (
    <div className="prompt flex justify-between rounded-3xl border border-gray-300/70 bg-white px-5 py-5">
      <div className="prompt-content">
        <span className="prompt-title block text-sm font-semibold text-theme-purple">
          {promptTitle}
        </span>
        <span className="prompt-data mt-2 block">{promptData}</span>
      </div>
      <div className="prompt-action-edit cursor-pointer">
        <PencilIcon className="h-5 w-5 text-gray-300 transition-all hover:text-gray-500" />
      </div>
    </div>
  );
}

function ModalPopUp({ isOpen, onClose, children }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center backdrop-blur-sm transition-all ${
        isOpen ? "visible bg-black/50" : "invisible"
      }`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`rounded-xl bg-white p-8 shadow transition-all ${
          isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

// Icons

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
