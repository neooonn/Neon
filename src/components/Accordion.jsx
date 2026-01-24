import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function GoalSection({trigger, content}) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className={"text-zinc-500 flex flex-row justify-start"}>{trigger}</AccordionTrigger>
        <AccordionContent className={"text-zinc-500"}>
          {content}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}


export default GoalSection;