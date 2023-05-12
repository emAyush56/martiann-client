import { useState } from "react";

export default function MyWorkAndEducation({
  idx,
  itemSelected,
  setItemSelected,
}) {
  const itemToggler = (idx) => {
    if (itemSelected === idx) return setItemSelected(null);
    setItemSelected(idx);
  };
  const [jobModalIsOpen, setJobModalIsOpen] = useState(false);
  const [institutionModalIsOpen, setInstitutionModalIsOpen] = useState(false);

  return (
    <div
      className={`work-education mt-4 rounded-3xl p-6 transition-all hover:bg-gray-50 ${
        itemSelected === idx ? "bg-gray-50" : null
      }`}
    >
      <div
        onClick={() => itemToggler(idx)}
        className="work-education-heading group flex items-center hover:cursor-pointer"
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
        className={`work-education-items duration-400 transition-all ${
          itemSelected === idx ? "max-h-[40rem]" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="mt-3">
          <div className="job mt-4">
            <span className="text-gray-500 ">Your job</span>
            <div className="job-items mt-3 space-y-3">
              <div className="job-box flex cursor-default items-center gap-5 rounded-3xl border border-gray-300/70 bg-white px-5 py-5">
                <div className="job-icon">
                  <BriefCaseIcon
                    className={`h-7 w-7 rounded-full bg-theme-purple p-[5px] text-white`}
                  />
                </div>
                <div className="job-text">
                  <span className="block">UI Engineer</span>
                  <span className="block">iEYe India</span>
                </div>
                <div className="job-action-edit ml-auto cursor-pointer transition-all">
                  <PencilIcon className="h-5 w-5 text-gray-300 transition-all hover:text-gray-500" />
                </div>
              </div>
              <div className="job-box flex cursor-default items-center gap-5 rounded-3xl border border-gray-300/70 bg-white px-5 py-5">
                <div className="job-icon">
                  <BriefCaseIcon
                    className={`h-7 w-7 rounded-full bg-theme-purple p-[5px] text-white`}
                  />
                </div>
                <div className="job-text">
                  <span className="block">Developer Advocate Intern</span>
                  <span className="block">codedamn</span>
                </div>
                <div className="job-action-edit ml-auto cursor-pointer transition-all">
                  <PencilIcon className="h-5 w-5 text-gray-300 transition-all hover:text-gray-500" />
                </div>
              </div>
              <div className="add-a-job">
                <button
                  onClick={() => setJobModalIsOpen(true)}
                  className="group flex w-full items-center rounded-full border border-gray-300/70 bg-white px-5 py-2 transition-all hover:border-gray-300 hover:bg-transparent"
                >
                  <div className="icon">
                    <PlusIcon className={`h-5 w-5 stroke-[3] text-gray-400`} />
                  </div>
                  <span className="ml-2 font-medium">Add a job</span>
                </button>
                <ModalPopUp
                  isOpen={jobModalIsOpen}
                  onClose={() => setJobModalIsOpen(false)}
                >
                  <div className="w-96 text-center">
                    <span className="block text-2xl font-medium">
                      Add a job
                    </span>
                    <div className="inputs mt-6 space-y-3">
                      <input
                        type="text"
                        placeholder="Title"
                        className="w-full rounded-full border border-gray-300 px-5 py-2 outline-none focus:bg-gray-50/70"
                      />
                      <input
                        type="text"
                        placeholder="Company"
                        className="w-full rounded-full border border-gray-300 px-5 py-2 outline-none focus:bg-gray-50/70"
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
          <div className="education mt-6">
            <span className="text-gray-500 ">Your education</span>
            <div className="education-items mt-3 space-y-3">
              <div className="institution-box flex cursor-default items-center gap-5 rounded-3xl border border-gray-300/70 bg-white px-5 py-5">
                <div className="institution-icon">
                  <AcademicCapIcon
                    className={`h-7 w-7 rounded-full bg-theme-purple p-[5px] text-white`}
                  />
                </div>
                <div className="institution-text">
                  <span className="block">Techno International</span>
                  <span className="block">2023</span>
                </div>
                <div className="institution-action-edit ml-auto cursor-pointer transition-all">
                  <PencilIcon className="h-5 w-5 text-gray-300 transition-all hover:text-gray-500" />
                </div>
              </div>
              <div className="add-an-institution">
                <button
                  onClick={() => setInstitutionModalIsOpen(true)}
                  className="group flex w-full items-center rounded-full border border-gray-300/70 bg-white px-5 py-2 transition-all hover:border-gray-300 hover:bg-transparent"
                >
                  <div className="icon">
                    <PlusIcon className={`h-5 w-5 stroke-[3] text-gray-400`} />
                  </div>
                  <span className="ml-2 font-medium">Add an institution</span>
                </button>
                <ModalPopUp
                  isOpen={institutionModalIsOpen}
                  onClose={() => setInstitutionModalIsOpen(false)}
                >
                  <div className="w-96 text-center">
                    <span className="block text-2xl font-medium">
                      Add an institution
                    </span>
                    <div className="inputs mt-6 space-y-3">
                      <input
                        type="text"
                        placeholder="Institution"
                        className="w-full rounded-full border border-gray-300 px-5 py-2 outline-none focus:bg-gray-50/70"
                      />
                      <input
                        type="text"
                        placeholder="Graduation year"
                        className="w-full rounded-full border border-gray-300 px-5 py-2 outline-none focus:bg-gray-50/70"
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

function BriefCaseIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
      <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
    </svg>
  );
}

function AcademicCapIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
      <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
      <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
    </svg>
  );
}
