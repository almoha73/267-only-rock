import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import uuid from "react-uuid";

const menuOptions = [
  { id: uuid(), href: "/photos", name: "Photos", active: false },
  { id: uuid(), href: "/videos", name: "Vidéos", active: false },
  { id: uuid(), href: "/audios", name: "Audios", active: false },
];

export default function MyListbox() {
  const location = useLocation();
  const [selectedPerson, setSelectedPerson] = useState(
    menuOptions.find((p) => p.active) || menuOptions[0]
  );
  const [open, setOpen] = useState(false);
  // Mettre à jour les options avec la propriété active en fonction de l'URL courante
  menuOptions.forEach((p) => {
    p.active = location.pathname === p.href;
  });

  const activeOptions = menuOptions.filter((p) => p.active);
  const isActive = activeOptions.length > 0;

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <div className="relative">
        <Listbox.Button
          onClick={() => setOpen(!open)}
          className={`hover:bg-gray-600 hover:text-white relative w-24 rounded-md shadow-sm p-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-blue-500 sm:text-sm ${
            isActive ? "text-gray-300" : "text-red-700"
          }`}
        >
          <span className="block truncate lg:text-xl ">Médias</span>
          <span className="absolute inset-y-0 right-0  flex items-center pr-2 pointer-events-none">
            <svg
              className={`h-5 w-5 ${open ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </Listbox.Button>
        <Listbox.Options className="absolute w-24 py-1 mt-1 bg-gray-800 text-red-600 rounded-lg shadow-lg text-left pl-1">
          {menuOptions.map((person) => (
            <Listbox.Option
              key={person.id}
              value={person}
              disabled={person.unavailable}
              onClick={() => (window.location.href = person.href)}
              className={`p-1 cursor-pointer hover:bg-gray-600 ${
                person.active ? "bg-gray-200" : ""
              }`}
            >
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
