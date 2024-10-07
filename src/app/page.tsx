import { CandidateTable } from "@/components/features/CandidateDashboard/CandidateTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Share, Share2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pagination } from "@/components/common/Pagination";
import TeamMembersDropdown from "@/components/features/CandidateDashboard/TeamMembers";

export default function Home() {
  const candidates = [
    // {
    //   id: 1,
    //   name: "Albert Flores",
    //   timestamp: "23 August, 12:00PM",
    //   score: 95,
    //   status: "Shortlisted",
    //   resume: "Resume.pdf",
    //   domainScores: {
    //     "Domain Knowledge": 4,
    //     "Technical Skills": 5,
    //     "Communication": 4,
    //     "Problem Solving": 5,
    //     "Team Work": 3
    //   }
    // },
    // {
    //   id: 2,
    //   name: "Wade Warren",
    //   timestamp: "23 August, 12:00PM",
    //   score: 88,
    //   status: "Shortlisted",
    //   resume: "Resume.pdf",
    //   domainScores: {
    //     "Domain Knowledge": 4,
    //     "Technical Skills": 5,
    //     "Communication": 4,
    //     "Problem Solving": 5,
    //     "Team Work": 3
    //   }
    // },
    // {
    //   id: 3,
    //   name: "Ronald Richards",
    //   timestamp: "23 August, 12:00PM",
    //   score: 92,
    //   status: "Shortlisted",
    //   resume: "Resume.pdf",
    //   domainScores: {
    //     "Domain Knowledge": 4,
    //     "Technical Skills": 5,
    //     "Communication": 4,
    //     "Problem Solving": 5,
    //     "Team Work": 3
    //   }
    // },
    // {
    //   id: 4,
    //   name: "Courtney Henry",
    //   timestamp: "23 August, 12:00PM",
    //   score: 79,
    //   status: "Waitlisted",
    //   resume: "Resume.pdf",
    //   domainScores: {
    //     "Domain Knowledge": 4,
    //     "Technical Skills": 5,
    //     "Communication": 4,
    //     "Problem Solving": 5,
    //     "Team Work": 3
    //   }
    // },
    // {
    //   id: 5,
    //   name: "Jerome Bell",
    //   timestamp: "23 August, 12:00PM",
    //   score: 86,
    //   status: "Shortlisted",
    //   resume: "Resume.pdf",
    //   domainScores: {
    //     "Domain Knowledge": 4,
    //     "Technical Skills": 5,
    //     "Communication": 4,
    //     "Problem Solving": 5,
    //     "Team Work": 3
    //   }
    // },
    // {
    //   id: 6,
    //   name: "Jacob Jones",
    //   timestamp: "23 August, 12:00PM",
    //   score: 72,
    //   status: "Rejected",
    //   resume: "Resume.pdf",
    //   domainScores: {
    //     "Domain Knowledge": 4,
    //     "Technical Skills": 5,
    //     "Communication": 4,
    //     "Problem Solving": 5,
    //     "Team Work": 3
    //   }
    // },
    // {
    //   id: 7,
    //   name: "Albert Flores",
    //   timestamp: "23 August, 12:00PM",
    //   score: 91,
    //   status: "Shortlisted",
    //   resume: "Resume.pdf",
    //   domainScores: {
    //     "Domain Knowledge": 4,
    //     "Technical Skills": 5,
    //     "Communication": 4,
    //     "Problem Solving": 5,
    //     "Team Work": 3
    //   }
    // },
    // {
    //   id: 8,
    //   name: "Albert Flores",
    //   timestamp: "23 August, 12:00PM",
    //   score: 84,
    //   status: "Waitlisted",
    //   resume: "Resume.pdf",
    // },
    // {
    //   id: 9,
    //   name: "Albert Flores",
    //   timestamp: "23 August, 12:00PM",
    //   score: 89,
    //   status: "Shortlisted",
    //   resume: "Resume.pdf",
    // },
    // {
    //   id: 10,
    //   name: "Albert Flores",
    //   timestamp: "23 August, 12:00PM",
    //   score: 76,
    //   status: "Rejected",
    //   resume: "Resume.pdf",
    // },
    // Add more mock data to demonstrate scrolling
    ...Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      name: `Candidate ${i + 1}`,
      timestamp: "23 August, 12:00PM",
      score: Math.floor(Math.random() * 30) + 70,
      status: ["Shortlisted", "Waitlisted", "Rejected"][
        Math.floor(Math.random() * 3)
      ],
      resume: "Resume.pdf",
      domainScores: {
        "Domain Knowledge": 4,
        "Technical Skills": 5,
        Communication: 4,
      },
      objectiveAnswers: [
        {
          question: "Why should we hire you?",
          options: [
            [
              "Well, I believe that you should hire me because I am the best candidate for this position.",
              true,
            ],
            [
              "Well, I believe that you should hire me because I have the skills and experience you're looking for.",
              false,
            ],
            [
              "Well, I believe that you should hire me because I am passionate about this field and eager to contribute.",
              false,
            ],
          ],
        },
        {
          question: "Why do you want to work with us?",
          options: [
            [
              "I want to work with your company because of its excellent reputation in the industry.",
              true,
            ],
            [
              "I'm excited about the opportunity to contribute to innovative projects at your company.",
              false,
            ],
            [
              "Your company's values align closely with my own, and I believe I can thrive in this environment.",
              false,
            ],
          ],
        },
        {
          question: "From your point of view, React or svelte?",
          options: [
            [
              "I prefer React due to its large ecosystem and widespread adoption.",
              false,
            ],
            [
              "Svelte's simplicity and performance make it my preferred choice.",
              false,
            ],
            [
              "Both have their strengths, and the choice depends on the specific project requirements.",
              true,
            ],
          ],
        },
        {
          question: "What excites you about this role?",
          options: [
            [
              "The opportunity to work on cutting-edge technologies excites me about this role.",
              false,
            ],
            [
              "I'm excited about the potential for growth and learning in this position.",
              true,
            ],
            [
              "The chance to solve complex problems and make a real impact is what excites me most.",
              false,
            ],
          ],
        },
      ],
    })),
  ];

  return (
    <div className="p-4 flex flex-col space-y-4">
      <div className="flex justify-between w-full h-14 pt-4">
        <div className="flex gap-4">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-3 text-gray-400"
              size={20}
            />
            <Input
              placeholder="Candidates with 3+yrs of exp..."
              className="pl-10 pr-4 py-2 w-72"
            />
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="shortlisted">Shortlisted</SelectItem>
              <SelectItem value="waitlisted">Waitlisted</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-2">0-2 years</SelectItem>
              <SelectItem value="3-5">3-5 years</SelectItem>
              <SelectItem value="5+">5+ years</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Degree" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bachelors">Bachelor&apos;s</SelectItem>
              <SelectItem value="masters">Master&apos;s</SelectItem>
              <SelectItem value="phd">PhD</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Hard Skills" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="nodejs">Node.js</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex space-x-4">
          <TeamMembersDropdown />
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="default"
              className="flex items-center space-x-2 text-base"
            >
              <Share size={18} />
              <span>Export</span>
            </Button>
            <Button
              size="default"
              className="bg-teal-800 flex items-center space-x-2 text-base"
            >
              <span>Share</span>
              <Share2 size={18} />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <CandidateTable candidates={candidates} />
      </div>
      <Pagination />
    </div>
  );
}
