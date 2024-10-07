import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export function Pagination() {
  return (
    <div className="flex items-center justify-between mt-4 h-14">
      <p className="text-sm text-gray-500">Showing 1 to 10 of 430 entries</p>
      <div className="flex gap-2">
        <Button variant="outline" size="icon">
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button variant="outline" className="bg-teal-800 text-white">
          1
        </Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
