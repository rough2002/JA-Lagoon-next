// import { Button } from "@/components/ui/button";
import { outfit } from "@/app/font";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b flex items-center px-4 z-10">
      <div className="flex items-center space-x-4 flex-1">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8.2C3 5.1 5.1 3 8.2 3H15.8C18.9 3 21 5.1 21 8.2V15.8C21 18.9 18.9 21 15.8 21H8.2C5.1 21 3 18.9 3 15.8V8.2Z"
                fill="#0F766E"
              />
              <path
                d="M6 12C6 8.7 8.7 6 12 6C15.3 6 18 8.7 18 12C18 15.3 15.3 18 12 18C8.7 18 6 15.3 6 12Z"
                fill="white"
              />
            </svg>
          </div>
          <span
            className={`${outfit.className} font-bold text-3xl text-teal-800 `}
          >
            Lagoon
          </span>
        </div>
        <h1 className="text-3xl font-normal p-2">Untitled file</h1>
      </div>
      {/* <div className="flex items-center space-x-4">
        <Button variant="outline" size="lg">
          Export
        </Button>
        <Button size="lg">Share</Button>
      </div> */}
      <div className="ml-auto">
        {/* Avatar for user */}
        <Avatar className="inline-block h-10 w-10 rounded-full ring-2 ring-teal-800">
          <AvatarImage
            src={`https://randomuser.me/api/portraits/men/${1}.jpg`}
            alt="User Avatar"
            className="rounded-full"
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
