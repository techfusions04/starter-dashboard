// "use client";

// import * as React from "react";

// import {
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/shadcnui/sidebar";
// import Image from "next/image";

// export function TeamSwitcher({ teams }: {}) {
//   // const { isMobile } = useSidebar();
//   const [activeTeam, setActiveTeam] = React.useState(teams[0]);

//   if (!activeTeam) {
//     return null;
//   }

//   return (
//     <SidebarHeader>
//       <SidebarMenu>
//         <SidebarMenuItem>
//           <SidebarMenuButton size="lg">
//             <a href="/">
//               <div className="grid place-items-center justify-center">
//                 <Image
//                   src="/emi.png"
//                   alt="Emi Management Logo"
//                   width={80}
//                   height={80}
//                   // priority // 2. Add priority to ensure the logo loads immediately
//                   // className="aspect-square object-contain"
//                 />
//               </div>

//               <div className="flex flex-col gap-0.5 leading-none">
//                 <span className="text-foreground font-semibold">
//                   Emi Management
//                 </span>
//               </div>
//             </a>
//           </SidebarMenuButton>
//         </SidebarMenuItem>
//       </SidebarMenu>
//     </SidebarHeader>
//   );
// }
