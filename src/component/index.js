"use client";

import { useEffect } from "react";

export default function RegisterServiceWorker() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(() => {
          console.log("Service Worker Registered");
        })
        .catch((err) => {
          console.error("Registration failed:", err);
        });
    }
  }, []);

  return null;
}