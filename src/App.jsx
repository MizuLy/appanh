import Mainlayout from "./layouts/Mainlayout";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    AOS.refresh();
  }, []);

  return (
    <>
      <Mainlayout />
    </>
  );
}
