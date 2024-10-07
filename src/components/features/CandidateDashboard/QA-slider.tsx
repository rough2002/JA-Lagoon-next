"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface ObjectiveAnswer {
  question: string;
  options: string[];
}

interface ObjectiveAnswersProps {
  answers: ObjectiveAnswer[];
}

export function ObjectiveAnswers({ answers }: ObjectiveAnswersProps) {
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([]);

  const toggleQuestion = (question: string) => {
    setExpandedQuestions((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question]
    );
  };

  return (
    <div className="space-y-4">
      {answers.map((answer, index) => (
        <div key={index} className="border rounded-lg p-4 shadow-md">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleQuestion(answer.question)}
          >
            <h3 className="font-medium text-lg text-teal-800">
              {answer.question}
            </h3>
            <span>
              {expandedQuestions.includes(answer.question) ? "−" : "+"}
            </span>
          </div>
          <div
            className={`mt-2 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
              expandedQuestions.includes(answer.question)
                ? "max-h-96"
                : "max-h-0"
            }`}
          >
            {answer.options.map((option, optionIndex) => {
              console.log(option[1]);
              return (
                <div key={optionIndex} className="flex items-center space-x-2">
                  <Checkbox
                    id={`option-${index}-${optionIndex}`}
                    checked={option[1] == true}
                  />
                  <label
                    htmlFor={`option-${index}-${optionIndex}`}
                    className="text-sm"
                  >
                    {option[0]}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
