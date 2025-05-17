import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function SiteHeader() {
  return (
    // <header
    //   className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
    //   <div className="flex w-full items-center text-center gap-1 px-4 lg:gap-2 lg:px-6">
    //     <SidebarTrigger className="-ml-1" />
    //     <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
    //     <h1 className="text-medium font-medium text-center">Articles</h1>
    //   </div>
    // </header>
    <header
  className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center border-b transition-[width,height] ease-linear"
>
  <div className="flex w-full items-center justify-between px-4 lg:px-6">
    <div className="flex items-center gap-2">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
    </div>
    <h1 className="text-medium font-medium text-center mx-auto">Articles</h1>
    <div className="w-[64px]" /> {/* Invisible spacer to balance layout */}
  </div>
</header>

  );
}
