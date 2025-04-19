import { useEffect, useRef } from "react";
import { useEngineStore } from "../../stores/engineStore";
import Hydra from "@hydra/engine";

export const SceneRenderer = () => {
  const { engine, createEngine, hasLoaded, setHasLoaded: sethasLoaded } = useEngineStore();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) throw new Error("Canvas not found");
    createEngine(canvas);
    window.Hydra.loadGameFromFile("games/keyboardTest.json").then(() => {
      sethasLoaded(true);
    })
  }, []);

  function handlePlay() {
    if (!engine) throw new Error("Engine not found");
    engine.start();
  }

  function handleResize() {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = canvas.getBoundingClientRect().width;
      canvas.height = canvas.getBoundingClientRect().height;
      canvas.dispatchEvent(new Event("resize"));
    }
  }

  return (
    <div className="relative w-full h-full bg-black flex-1">
      <canvas
        className="w-full h-full"
        aria-label="Scene Canvas"
        onResize={handleResize}
        ref={canvasRef}
      />
      <div className="absolute top-2 right-2 bg-gray-900 bg-opacity-70 rounded p-1 flex space-x-1">
        <button
          onClick={handlePlay}
          className="p-1.5 hover:bg-gray-700 hover:bg-opacity-70 rounded"
          title="Play"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3l14 9-14 9V3z"
            />
          </svg>
        </button>
        <button
          className="p-1.5 hover:bg-gray-700 hover:bg-opacity-70 rounded"
          title="Pan"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
            />
          </svg>
        </button>
        <button
          className="p-1.5 hover:bg-gray-700 hover:bg-opacity-70 rounded"
          title="Move"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        </button>
        <button
          className="p-1.5 hover:bg-gray-700 hover:bg-opacity-70 rounded"
          title="Rotate"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-green-400"
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
        <button
          className="p-1.5 hover:bg-gray-700 hover:bg-opacity-70 rounded"
          title="Scale"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
            />
          </svg>
        </button>
      </div>
      <div className="absolute bottom-2 left-2 bg-gray-900 bg-opacity-70 rounded px-2 py-1">
        <span className="text-xs text-gray-300">FPS: {}</span>
      </div>
    </div>
  );
};
