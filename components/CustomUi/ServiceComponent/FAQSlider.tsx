"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useDragScroll from "@/hooks/useDragScroll";
import { useRef } from "react";

export function FAQSection() {
  const FAQData = [
    {
      question: "Experience seamless synergy with our synergy?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Experience seamless synergy with our synergy?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Experience seamless synergy with our synergy?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Experience seamless synergy with our synergy?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Is it styled?",
      answer:
        "Yes. It comes with default styles that matches the other components' aesthetic.",
    },
    {
      question: "Is it animated?",
      answer:
        "Yes. It's animated by default, but you can disable it if you prefer.",
    },
  ];

  const containerRef = useDragScroll<HTMLDivElement>();

  return (
    <Accordion
      ref={containerRef}
      type="single"
      collapsible
      className="faqSection flex flex-col gap-4 md:gap-0 md:flex-row border-b-0 md:overflow-x-scroll whitespace-nowrap items-start justify-start cursor-grab active:cursor-grabbing"
    >
      {FAQData.map((data, index) => {
        return (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b-0 py-2 px-6  border-[1px] rounded-[20px] w-full"
          >
            <AccordionTrigger className="text-base text-left">
              {data.question}
            </AccordionTrigger>
            <AccordionContent className="text-base w-[400px] text-wrap">
              {data.answer}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
