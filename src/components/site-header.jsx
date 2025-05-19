import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "./ui/button";

export function SiteHeader() {
  return (
    <div>
      <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center border-b transition-[width,height] ease-linear">
        <div className="flex w-full items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mx-2 data-[orientation=vertical]:h-4"
            />
          </div>
          <h1 className="text-medium font-medium text-center mx-auto">
            Articles
          </h1>
          <div className="w-[64px]" />{" "}
        </div>
      </header>

      <div className="flex justify-center  my-4">
        <Button className="hidden lg:inline" variant="outline" size="sm">
          <span className="hidden lg:inline">Generated Articles</span>
        </Button>
        <Button className="hidden lg:inline"  variant="outline" size="sm">
          <span className="hidden lg:inline">Published Articles</span>
        </Button>
        <Button className="hidden lg:inline"  variant="outline" size="sm">
          <span className="hidden lg:inline">Schduled Articles</span>
        </Button>
        <Button className="hidden lg:inline"  variant="outline" size="sm">
          <span className="hidden lg:inline">Archieved Articles</span>
        </Button>
      </div>
    </div>
  );
}
