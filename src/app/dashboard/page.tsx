import { Button } from "@/components/shadcnui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/shadcnui/collapsible";
import { ChevronRight, FolderIcon } from "lucide-react";

const page = () => {
    return (
        <>
            <div className="space-y-1">

                {/* Dashboard */}
                <Collapsible>
                    <CollapsibleTrigger asChild>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="group w-full justify-start gap-3"
                        >

                            <FolderIcon />
                            <div className="group flex justify-start gap-24"><span>Dashboard</span>
                                <ChevronRight className="transition-transform group-data-[state=open]:rotate-90" /></div>

                        </Button>
                    </CollapsibleTrigger>




                    <CollapsibleContent className="ml-10 space-y-1">
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                            History
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                            Starred
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                            Settings
                        </Button>
                    </CollapsibleContent>
                </Collapsible>

                {/* Payment (no collapsible) */}
                <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start gap-4"
                >
                    <span>₹</span>
                    <span>Payment</span>
                </Button>

                {/* Documentation */}
                <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start gap-4"
                >
                    <span>📘</span>
                    <span>Documentation</span>
                </Button>

                {/* Settings */}
                <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start gap-4"
                >
                    <span>⚙️</span>
                    <span>Settings</span>
                </Button>
            </div >
        </>
    );
}

export default page;