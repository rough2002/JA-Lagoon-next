import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";

export function CandidateFilters() {
  return (
    <>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="shortlisted">Shortlisted</SelectItem>
          <SelectItem value="waitlisted">Waitlisted</SelectItem>
          <SelectItem value="rejected">Rejected</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Experience" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0-2">0-2 years</SelectItem>
          <SelectItem value="3-5">3-5 years</SelectItem>
          <SelectItem value="5+">5+ years</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Degree" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="bachelors">Bachelor&apos;s</SelectItem>
          <SelectItem value="masters">Master&apos;s</SelectItem>
          <SelectItem value="phd">PhD</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Hard Skills" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="javascript">JavaScript</SelectItem>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="nodejs">Node.js</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
