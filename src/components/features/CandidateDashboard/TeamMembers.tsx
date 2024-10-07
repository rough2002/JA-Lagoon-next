import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipArrow } from "@radix-ui/react-tooltip";

interface TeamMember {
  name: string;
  avatar: string;
  isOnline?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: "Charlie Layne",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Tatum Paolo",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Mislav Abha",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Anjali Wanda",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Jody Hekla",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    isOnline: true,
  },
  {
    name: "Additional Member 1",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "Additional Member 2",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

export default function TeamMembersDropdown() {
  const visibleMembers = teamMembers.slice(0, 4);
  const additionalMembersCount = Math.max(0, teamMembers.length - 4);

  return (
    <TooltipProvider>
      <Popover>
        <PopoverTrigger asChild>
          <button className="flex items-center space-x-1 bg-white rounded-md p-1 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <div className="flex -space-x-2 overflow-hidden">
              {visibleMembers.map((member) => (
                <Tooltip key={member.name}>
                  <TooltipTrigger asChild>
                    <Avatar className="inline-block h-8 w-8 rounded-full ring-2 ring-white">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    <TooltipArrow className="fill-black" />
                    <p>{member.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
            {additionalMembersCount > 0 && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-500 text-white text-xs font-medium">
                    +{additionalMembersCount}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {additionalMembersCount} more team member
                    {additionalMembersCount > 1 ? "s" : ""}
                  </p>
                </TooltipContent>
              </Tooltip>
            )}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-2">
          <div className="space-y-2">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-gray-700">
                  {member.name}
                </span>
                {member.isOnline && (
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                )}
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </TooltipProvider>
  );
}
