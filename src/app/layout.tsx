import { AppSidebar } from "@/components/app-sidebar";
import SideTigger from "@/components/Providers/SideTigger";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import {
  SidebarInset,
  SidebarProvider
} from "@/components/shadcnui/sidebar";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { ReactNode } from "react";
import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    // <html
    //   lang="en"
    //   suppressHydrationWarning>
    //   <body>
    //     <ThemeProvider
    //       attribute="class"
    //       defaultTheme="dark"
    //       enableSystem={false}>
    //       <SidebarProvider
    //         style={
    //           {
    //             "--sidebar-width": "17rem",
    //             "--sidebar-width-mobile": "20rem",
    //           } as React.CSSProperties // Add this "as" clause
    //         }>
    //         <AppSidebar />


    //         <SidebarInset >
    //           <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
    //             <SidebarTrigger />
    //             <ThemeToggleButton />
    //           </header>

    //           <main className="mx-auto w-full px-6 py-4">{children}</main>
    //         </SidebarInset>
    //       </SidebarProvider>
    //     </ThemeProvider>
    //   </body>
    // </html>  

    // now color part start 

    <html lang="en" suppressHydrationWarning>
      <body className="">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={false}>
          <SidebarProvider
            style={
              {
                "--sidebar-width": "17rem",
                "--sidebar-width-mobile": "20rem",
              } as React.CSSProperties
            }
          >
            {/* Sidebar */}
            <AppSidebar />

            {/* Main Content */}
            <SidebarInset className="relative">
              {/* Header */}
              <header
                className="
                  flex h-14 shrink-0 items-center gap-2 px-4 
  "
              >
                {/* <SidebarTrigger asChild>
                  <button className="p-2 rounded-md hover:bg-white/10 transition">
                    <span>
                      <HardDriveUpload size={28} />
                    </span>
                  </button>
                </SidebarTrigger> */}

                <SideTigger />

                <ThemeToggleButton />

              </header>

              {/* Page Content */}
              <main className="mx-auto w-full px-6 py-4  
                  backdrop-blur-xl
                  border-b border-white/15
                  shadow-lg shadow-blue-900/30">
                {children}
              </main>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>


  );
};

export default RootLayout;
