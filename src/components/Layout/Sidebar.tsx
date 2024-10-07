"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import {
  Menu,
  ChevronLeft,
  Target,
  GraduationCap,
  Briefcase,
  Users,
  BarChart2,
  List,
  Settings,
} from "lucide-react";
import { useSidebar } from "@/contexts/sidebarContext";
import { useState } from "react";

export function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const [experienceRange, setExperienceRange] = useState<[number, number]>([
    0, 10,
  ]);
  return (
    <div
      className={`fixed left-0 top-20 h-[calc(100vh-8rem)] bg-white border-y border-r flex flex-col transition-all duration-300 ${
        isSidebarOpen ? "w-80" : "w-16 shadow-lg rounded"
      }`}
    >
      {isSidebarOpen ? (
        <div className="p-4 pt-8 overflow-y-auto flex-1 text-lg">
          {" "}
          {/* Increase font size */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-medium ">Filters</h2>
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          {/* Additional Filters */}
          <Input placeholder="Add spike" className="mb-4" />
          {/* B.Tech Filter */}
          <div className="flex items-center space-x-2 mb-4">
            <Checkbox id="b-tech" />
            <label htmlFor="b-tech">B.Tech</label>
          </div>
          {/* 3+ yrs Filter */}
          <div className="flex items-center space-x-2 mb-4">
            <Checkbox id="3-yrs" />
            <label htmlFor="3-yrs">3+ yrs</label>
          </div>
          {/* Selected as must-have */}
          <p className="text-sm text-green-600 mb-4">Selected as must have</p>
          <Accordion type="single" collapsible className="w-full">
            {/* Educational Qualification Filter */}
            <AccordionItem value="educational-qualification">
              <AccordionTrigger className="text-lg">
                Educational Qualification
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="high-school" />
                    <label htmlFor="high-school">High School</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="bachelor" />
                    <label htmlFor="bachelor">Bachelor&apos;s Degree</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="master" />
                    <label htmlFor="master">Master&apos;s Degree</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="phd" />
                    <label htmlFor="phd">PhD</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="diploma" />
                    <label htmlFor="diploma">Diploma</label>
                  </div>
                  <p className="mt-4">Specify Other Qualifications:</p>
                  <Input placeholder="Other qualifications" className="mb-4" />
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Work Experience Filter */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="work-experience">
                <AccordionTrigger className="text-lg">
                  Work Experience
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">Range (in Years)</p>

                  {/* Display range selected */}
                  <div className="flex justify-between text-sm text-gray-700 mb-2">
                    <span>{experienceRange[0]} yrs</span>
                    <span>{experienceRange[1]} yrs</span>
                  </div>

                  {/* Slider with displayed range */}
                  <Slider
                    value={experienceRange}
                    onValueChange={(value: [number, number]) =>
                      setExperienceRange(value)
                    }
                    max={20}
                    step={1}
                    className="mb-4"
                    // Custom classes to style the slider and thumbs
                    // thumbClassName="h-4 w-4 bg-teal-600 rounded-full"
                    // trackClassName="bg-gray-200 h-2"
                    // rangeTrackClassName="bg-teal-200 h-2"
                  />

                  <p className="mb-2">Job Role</p>
                  <Input placeholder="Product manager" className="mb-4" />
                  <p className="mb-2">Company Name</p>
                  <Input placeholder="Goldman Sachs" className="mb-4" />
                  <p className="mb-2">Company Tier</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="tier-1" />
                      <label htmlFor="tier-1">Tier-1</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="tier-2" />
                      <label htmlFor="tier-2">Tier-2</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="tier-3" />
                      <label htmlFor="tier-3">Tier-3</label>
                    </div>
                  </div>
                  {/* <p className="mt-4 mb-2">Employee Stickiness</p>
                  <Slider defaultValue={[0, 5]} max={10} step={1} /> */}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Additional Filters - Skills */}
            <AccordionItem value="skills">
              <AccordionTrigger className="text-lg">Skills</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Required Skills</p>
                <Input
                  placeholder="JavaScript, React, Node.js"
                  className="mb-4"
                />
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="skill-1" />
                    <label htmlFor="skill-1">Frontend</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="skill-2" />
                    <label htmlFor="skill-2">Backend</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="skill-3" />
                    <label htmlFor="skill-3">Full Stack</label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Additional Filters - Location */}
            <AccordionItem value="location">
              <AccordionTrigger className="text-lg">Location</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Preferred Location</p>
                <Input placeholder="New York, San Francisco" className="mb-4" />
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="location-remote" />
                    <label htmlFor="location-remote">Remote</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="location-onsite" />
                    <label htmlFor="location-onsite">On-site</label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ) : (
        <div className="flex flex-col items-center py-4 space-y-6">
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <Menu className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Target className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <GraduationCap className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Briefcase className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Users className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <BarChart2 className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <List className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-6 w-6" />
          </Button>
        </div>
      )}
    </div>
  );
}
