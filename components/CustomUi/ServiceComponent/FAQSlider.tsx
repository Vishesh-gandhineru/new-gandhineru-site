import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
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
      answer: "Yes. It comes with default styles that matches the other components' aesthetic.",
    },
    {
      question: "Is it animated?",
      answer: "Yes. It's animated by default, but you can disable it if you prefer.",
    },
  ]

    return (
      <Accordion type="single" collapsible className="flex border-b-0 overflow-x-scroll whitespace-nowrap items-start justify-start">
        {FAQData.map((data, index) => {
            return(
            <AccordionItem key={index} value={`item-${index}`} className="border-b-0 py-2 px-6  border-[1px] rounded-[20px]">
                 <AccordionTrigger className="text-base text-left">{data.question}</AccordionTrigger>
          <AccordionContent className="text-base w-[400px] text-wrap">
            {data.answer}
          </AccordionContent>
            </AccordionItem>
            )
        })}            
   
      </Accordion>
    )
  }
  