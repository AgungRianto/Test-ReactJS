import {useState} from "react";
import ClickCounterButton from "./ButtonClick";
import JavascriptFunction from "./JavascriptFunction";
import Tabs from "./Tabs";
import Modals from "./Modals";
import Tables from "./Tables";

export default function MyApp() {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <div>
        <h1>Welcome to my app</h1>
          <p>Soal 1.</p>
        <ClickCounterButton />
          <p>Soal 2.</p>
          <JavascriptFunction />
          <p>Soal 3.</p>
          <Tabs />
          <p>Soal 4.</p>
          <div className="h-screen flex flex-col justify-center items-center">
              <button
                  onClick={() => setIsOpen(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                  Open Modal
              </button>

              {isOpen && (
                  <Modals title="Modal Title" onClose={() => setIsOpen(false)}>
                      <p>This is the modal content. You can add any content here.</p>
                  </Modals>
              )}
          </div>
          <p>Soal 5.</p>
          <div className="h-screen flex justify-center items-center">
              <Tables />
          </div>
      </div>
  );
}