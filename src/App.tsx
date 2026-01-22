import { MyLinks } from "./components";

import "@/global-styles/global.css";

const App = () => {
  return (
    <>
      <MyLinks />
      <div className="px-md py-40 w-screen flex flex-col gap-md items-center text-center">
        <div className=" mx-auto text-3xl font-bold text-white">
          HIGHWAY TO STEAM <span className="text-primary">2026</span>
        </div>
        <div className="text-gray-300">
          Fund budget: <span className="text-white">60$</span>
        </div>
        <div className="flex flex-col gap-sm">
          <span className="text-white">Members:</span>
          <ul className="flex gap-2 justify-center">
            <li className="text-sm">tom_ahawk, </li>
            <li className="text-sm">aliery, </li>
            <li className="text-sm">augenblick</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
