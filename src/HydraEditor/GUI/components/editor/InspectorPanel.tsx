import { useEngineStore } from "../../stores/engineStore";

export function Transform() {
  return (
    <div className="mb-4">
      <div className="bg-gray-700 rounded-t px-3 py-1.5 text-sm font-medium flex items-center justify-between">
        <span>Transform</span>
        <button className="opacity-60 hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      <div className="bg-gray-750 rounded-b p-3 space-y-2 border border-gray-600 border-t-0">
        <div className="flex items-center">
          <span className="text-xs w-16 text-gray-400">Position</span>
          <div className="flex space-x-1 flex-1">
            <div className="flex items-center space-x-1">
              <span className="text-xs text-red-400">X</span>
              <input
                type="number"
                className="bg-gray-900 text-white px-2 py-1 rounded text-xs w-14 border border-gray-700"
                value="0"
                onChange={() => {}}
              />
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-xs text-green-400">Y</span>
              <input
                type="number"
                className="bg-gray-900 text-white px-2 py-1 rounded text-xs w-14 border border-gray-700"
                value="0"
                onChange={() => {}}
              />
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-xs text-blue-400">Z</span>
              <input
                type="number"
                className="bg-gray-900 text-white px-2 py-1 rounded text-xs w-14 border border-gray-700"
                value="0"
                onChange={() => {}}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-xs w-16 text-gray-400">Scale</span>
          <div className="flex space-x-1 flex-1">
            <div className="flex items-center space-x-1">
              <span className="text-xs text-red-400">X</span>
              <input
                type="number"
                className="bg-gray-900 text-white px-2 py-1 rounded text-xs w-14 border border-gray-700"
                value="1"
                onChange={() => {}}
              />
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-xs text-green-400">Y</span>
              <input
                type="number"
                className="bg-gray-900 text-white px-2 py-1 rounded text-xs w-14 border border-gray-700"
                value="1"
                onChange={() => {}}
              />
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-xs text-blue-400">Z</span>
              <input
                type="number"
                className="bg-gray-900 text-white px-2 py-1 rounded text-xs w-14 border border-gray-700"
                value="1"
                onChange={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const InspectorPanel = () => {
  const { selectedIndex, engine } = useEngineStore();

  return (
    <div className="bg-gray-800 text-gray-200 h-full flex flex-col w-full">
      <div className="bg-gray-900 text-white p-2 flex items-center justify-between border-b border-gray-700">
        <h2 className="text-sm font-semibold flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          Inspector:{" "}
          {selectedIndex !== null ? engine?.getObjects[selectedIndex].name : "Select an object"}
        </h2>
      </div>
      <div className="overflow-auto flex-1 p-3">
        <div className="mb-4">
          <div className="bg-gray-700 rounded-t px-3 py-1.5 text-sm font-medium flex items-center justify-between">
            <span>Sprite Renderer</span>
            <button className="opacity-60 hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <div className="bg-gray-750 rounded-b p-3 space-y-2 border border-gray-600 border-t-0">
            <div className="flex items-center">
              <span className="text-xs w-16 text-gray-400">Texture</span>
              <select className="bg-gray-900 text-white px-2 py-1 rounded text-xs flex-1 border border-gray-700">
                <option>f-texture.png</option>
                <option>pixel.png</option>
              </select>
            </div>
            <div className="flex items-center">
              <span className="text-xs w-16 text-gray-400">Color</span>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-white border border-gray-600 rounded"></div>
                <input
                  type="text"
                  className="bg-gray-900 text-white px-2 py-1 rounded text-xs w-24 border border-gray-700"
                  value="#FFFFFF"
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 w-full py-1.5 rounded text-sm font-medium transition-colors flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Add Component
        </button>
      </div>
    </div>
  );
};
