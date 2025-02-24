"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4 text-center text-white">
      <p suppressHydrationWarning>
        &copy; {new Date().getFullYear()} Water Tracker. All rights reserved.
      </p>
    </footer>
  );
}
