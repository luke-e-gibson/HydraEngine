import { useEffect, useState } from "react";

function DebugLog(props: { message: string }) {
  return (
    <div className="flex">
      <span className="text-blue-400 mr-2">[debug]</span>
      <span> {props.message}</span>
    </div>
  );
}

function InfoLog(props: { message: string }) {
  return (
    <div className="flex">
      <span className="text-green-400 mr-2">[info]</span>
      <span> {props.message}</span>
    </div>
  );
}

function WarnLog(props: { message: string }) {
  return (
    <div className="flex">
      <span className="text-yellow-400 mr-2">[warn]</span>
      <span> {props.message}</span>
    </div>
  );
}

function Error(props: { message: string }) {
  return (
    <div className="flex">
      <span className="text-red-400 mr-2">[error]</span>
      <span> {props.message}</span>
    </div>
  );
}

export const ConsolePanel = () => {
  const [logs, setLogs] = useState([])
  
  useEffect(() => {
    //Attach to console.log api
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;
    console.log = (...args: any[]) => {
      const logMessage = args.join(" ");
      setLogs((prevLogs) => [...prevLogs, <InfoLog message={logMessage} />]);
      originalLog(...args);
    };
    console.error = (...args: any[]) => {
      const logMessage = args.join(" ");
      setLogs((prevLogs) => [...prevLogs, <Error message={logMessage} />]);
      originalError(...args);
    }
    console.warn = (...args: any[]) => {
      const logMessage = args.join(" ");
      setLogs((prevLogs) => [...prevLogs, <WarnLog message={logMessage} />]);
      originalWarn(...args);
    }
  }, [setLogs])

  return (
    <>
      <div className="bg-gray-900 text-gray-200 h-full flex flex-col w-full">
        <div className="bg-gray-800 text-white p-2 flex items-center justify-between border-b border-gray-700">
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
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Console
          </h2>
          <div className="flex space-x-1">
            <button className="p-1 hover:bg-gray-700 rounded" title="Clear Console" onClick={() => setLogs([])}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
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
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="overflow-y-auto flex-1 p-2 font-mono text-xs space-y-1 max-h-[calc(100vh-8rem)] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          {logs.map((log, index) => (
            <div key={index}>
              {log}
            </div>
          ))}
        </div>
        <div className="bg-gray-800 p-2 border-t border-gray-700 flex">
          <input
            type="text"
            placeholder="Type command..."
            className="bg-gray-900 text-white px-3 py-1.5 rounded-l text-xs flex-1 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-r text-xs">
            Run
          </button>
        </div>
      </div>
    </>
  );
};
