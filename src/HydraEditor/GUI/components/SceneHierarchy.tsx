export const SceneHierarchy = () => (
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
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        Hierarchy
      </h2>
      <div className="flex space-x-1">
        <button className="p-1 hover:bg-gray-700 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
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
        </button>
      </div>
    </div>
    <div className="overflow-auto flex-1 p-1">
      <div className="mb-1 px-2 py-1 text-sm hover:bg-blue-600 hover:bg-opacity-25 rounded cursor-pointer font-medium">
        Main Camera
      </div>
      <div className="mb-1 px-2 py-1 text-sm hover:bg-blue-600 hover:bg-opacity-25 rounded cursor-pointer font-medium text-blue-300">
        Player
      </div>
      <div className="mb-1 pl-6 px-2 py-1 text-sm hover:bg-blue-600 hover:bg-opacity-25 rounded cursor-pointer">
        Sprite
      </div>
      <div className="mb-1 px-2 py-1 text-sm hover:bg-blue-600 hover:bg-opacity-25 rounded cursor-pointer font-medium">
        Background
      </div>
    </div>
  </div>
);