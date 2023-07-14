import { useState } from "react";
import { Tab } from "@headlessui/react";
import Sp1 from "./Sp1";
import Sp2 from "./Sp2";
import Sp3 from "./Sp3";
import { TabPanel } from "@material-tailwind/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

let Dummy = [
  {
    name: Sp1,
    label : "one"
  },
  {
    name: Sp2,
    label : "two"
  },
  {
    name: Sp3,
    label : "three"
  },
];

export default function HeadlessTab() {
  const [selectTab, setSelectTab] = useState(Dummy[0].name);

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Dummy.map((el, i) => (
            <Tab
              key={i}
              onClick={() => setSelectTab(el.name)}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-orange-400",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {el.label}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Dummy.map((el, i) => <Tab.Panel key={i}>{el.name}</Tab.Panel>)}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
