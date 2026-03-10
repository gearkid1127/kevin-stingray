"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 120,
      easing: "ease-out-cubic",
      startEvent: "DOMContentLoaded",
    });
    AOS.refresh();
  }, []);

  return null;
}
