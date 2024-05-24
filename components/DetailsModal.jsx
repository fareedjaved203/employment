import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DetailsModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-[#E7E7E7] rounded-md mb-2 w-full"
          style={{ color: "black" }}
        >
          View more details
        </Button>
      </DialogTrigger>
      <DialogContent
        className="w-[90vw] sm:max-w-[550px] text-sm"
        style={{ backgroundColor: "white" }}
      >
        <DialogHeader className={`flex justify-center items-center py-4 pt-8`}>
          <DialogTitle>Job Seeker's Detail</DialogTitle>
        </DialogHeader>
        <div className="overflow-x-auto px-4 mb-3">
          <div className="shadow-xl">
            <div className="flex flex-row border-b border-gray-300">
              <div
                className="w-full md:w-1/2 p-3 bg-pinkColor"
                style={{ color: "white" }}
              >
                PID
              </div>
              <div className="w-full md:w-1/2 p-3" style={{ color: "#999999" }}>
                #123
              </div>
            </div>
            <div className="flex flex-row border-b border-gray-300">
              <div
                className="w-full md:w-1/2 p-3 bg-pinkColor"
                style={{ color: "white" }}
              >
                Name
              </div>
              <div className="w-full md:w-1/2 p-3">Aisha Ali</div>
            </div>
            <div className="flex flex-row border-b border-gray-300">
              <div
                className="w-full md:w-1/2 p-3 bg-pinkColor"
                style={{ color: "white" }}
              >
                Ph. no/Watsapp
              </div>
              <div className="w-full md:w-1/2 p-3 ">0515571816</div>
            </div>
            <div className="flex flex-row border-b border-gray-300">
              <div
                className="w-full md:w-1/2 p-3 bg-pinkColor"
                style={{ color: "white" }}
              >
                Nationality
              </div>
              <div className="w-full md:w-1/2 p-3">Pakistani</div>
            </div>
            <div className="flex flex-row border-b border-gray-300">
              <div
                className="w-full md:w-1/2 p-3 bg-pinkColor"
                style={{ color: "white" }}
              >
                Place of Residence
              </div>
              <div className="w-full md:w-1/2 p-3">Mecca</div>
            </div>
            <div className="flex flex-row border-b border-gray-300">
              <div
                className="w-full md:w-1/2 p-3 bg-pinkColor"
                style={{ color: "white" }}
              >
                NOTTP
              </div>
              <div className="w-full md:w-1/2 p-3">0</div>
            </div>
            <div className="flex flex-row border-b border-gray-300">
              <div
                className="w-full md:w-1/2 p-3 bg-pinkColor"
                style={{ color: "white" }}
              >
                Remaining Period of Stay
              </div>
              <div className="w-full md:w-1/2 p-3">3 years and 8 months</div>
            </div>
            <div className="flex flex-row">
              <div
                className="w-full md:w-1/2 p-3 bg-pinkColor"
                style={{ color: "white" }}
              >
                Occupation
              </div>
              <div className="w-full md:w-1/2 p-3">House keeper</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsModal;
