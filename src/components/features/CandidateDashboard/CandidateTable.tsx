"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Linkedin,
  Mail,
  Phone,
  Star,
  NotebookPen,
  Eye,
} from "lucide-react";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Checkbox } from "@/components/ui/checkbox";
import { SliderModal } from "@/components/common/slider-modal";
import { ObjectiveAnswers } from "./QA-slider";
import { useState } from "react";
import toast from "react-hot-toast";

interface Candidate {
  id: number;
  name: string;
  timestamp: string;
  score: number;
  status: string;
  resume: string;
  domainScores: object;
  objectiveAnswers: {
    question: string;
    options: any[];
  }[];
}

interface CandidateTableProps {
  candidates: Candidate[];
}

export function CandidateTable({ candidates }: CandidateTableProps) {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null
  );

  const handleIconClick = (type: string) => {
    toast.success(`${type} copied!`);
  };

  return (
    <div className="border rounded-md text-2xl">
      <div className="overflow-auto h-[calc(100vh-16rem)] relative">
        <Table>
          <TableHeader className="sticky top-0 bg-gray-100 z-10 text-lg text-black">
            <TableRow>
              <TableHead>
                <Checkbox />
              </TableHead>
              <TableHead className="text-black">Name</TableHead>
              <TableHead className="text-black">Timestamp</TableHead>
              <TableHead className="text-black">Score</TableHead>
              <TableHead className="text-black">Status</TableHead>
              <TableHead className="text-black">Resume</TableHead>
              <TableHead className="text-black">Notes</TableHead>
              <TableHead className="text-black">Objective Answers</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {candidates.map((candidate) => (
              <TableRow key={candidate.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">
                  <p className="text-base">{candidate.name}</p>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      onClick={() => handleIconClick("LinkedIn")}
                      className="p-1"
                    >
                      <Linkedin className="text-gray-500 fill-white stroke-white bg-gray-400 p-1" />
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => handleIconClick("Email")}
                      className="p-1"
                    >
                      <Mail className="text-gray-500 fill-gray-400 stroke-white" />
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => handleIconClick("Phone")}
                      className="p-1"
                    >
                      <Phone className="text-gray-500 fill-gray-400 stroke-white" />
                    </Button>
                  </div>
                </TableCell>
                <TableCell className="text-base">
                  {candidate.timestamp}
                </TableCell>
                <TableCell>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="w-10 h-10 text-white flex items-center justify-center">
                          <CircularProgress value={candidate.score} />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="w-80 p-0 z-20">
                        <TooltipArrow className="fill-gray-200" />
                        <div className=" rounded-lg shadow-lg p-4 bg-gray-200">
                          <h3 className="text-lg font-semibold text-black mb-3">
                            Candidate Score Card
                          </h3>
                          {Object.entries(candidate.domainScores).map(
                            ([domain, score]) => (
                              <div
                                key={domain}
                                className="flex justify-between items-center mb-2 bg-white h-10 rounded-lg px-2"
                              >
                                <span className="text-base font-medium text-gray-600">
                                  {domain}
                                </span>
                                <StarRating rating={score} />
                              </div>
                            )
                          )}
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-base ${
                      candidate.status === "Shortlisted"
                        ? "bg-green-100 text-green-800"
                        : candidate.status === "Waitlisted"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {candidate.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-base border px-4"
                  >
                    <FileText className="w-4 h-4" />
                    {candidate.resume}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" className="text-base border px-4">
                    <NotebookPen size={20} className="mr-2" />
                    <span>Add a note</span>
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    className="text-base border px-4"
                    onClick={() => setSelectedCandidate(candidate)}
                  >
                    <Eye size={20} className="mr-2" />
                    <span>View</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <SliderModal
        isOpen={!!selectedCandidate}
        onClose={() => setSelectedCandidate(null)}
        title="Objective Answers"
      >
        {selectedCandidate && (
          <ObjectiveAnswers answers={selectedCandidate.objectiveAnswers} />
        )}
      </SliderModal>
    </div>
  );
}

function CircularProgress({ value }: { value: number }) {
  const circumference = 2 * Math.PI * 20; // r = 20
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-16 h-16">
      <svg className="w-full h-full" viewBox="0 0 44 44">
        <circle
          className="text-green-100"
          strokeWidth="4"
          stroke="currentColor"
          fill="transparent"
          r="20"
          cx="22"
          cy="22"
        />
        <circle
          className="text-green-500"
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="20"
          cx="22"
          cy="22"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-green-700">
        {value}
      </span>
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
