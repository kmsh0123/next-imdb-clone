"use client";

import { ThemeProvider } from "next-themes";

const DarkProvider = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
            <div className="dark:bg-black dark:text-gray-200 text-black transition-colors duration-300 min-h-screen select-none">
                    {children}
            </div>
    </ThemeProvider>

  )
}

export default DarkProvider