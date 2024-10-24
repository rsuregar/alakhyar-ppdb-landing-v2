import BlurFade from '@/components/magicui/blur-fade'
import SparklesText from '@/components/magicui/sparkles-text'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useFirebase } from '@/hooks/useFirebase'
import { remoteConfigs } from '@/types/firebase'

export const FaqComponent = () => {
  const { value: faqs } = useFirebase(remoteConfigs?.PPDB_FAQ) as any

  return (
    <BlurFade key={'faq'} delay={0.08 * 0.05} inView duration={1}>
      <div className="w-full mt-8 mb-8 px-4 z-40 bg-transparent pt-8 md:pt-0 text-center">
        <span className="inline-block py-3 px-6 mb-4 text-lg leading-5 text-sky-700 bg-sky-50 font-bold rounded-full shadow-sm">
          Paling sering ditanyakan
        </span>
        <SparklesText
          className="text-2xl md:text-4xl leading-tight font-bold tracking-tighter"
          text="Frequently Asked Questions (FAQ)"
        />
      </div>
      <Accordion
        type="single"
        collapsible
        className="md:container w-full border-b border-dashed pb-10"
      >
        {faqs &&
          faqs?.slice(0, 10)?.map((faq: any, index: number) => (
            <AccordionItem
              value={`${faq.title}`}
              key={index}
              className="border my-1 px-4 rounded-lg mx-2 md:mx-0"
            >
              <AccordionTrigger className="text-base font-bold hover:no-underline hover:text-sky-600 data-[state=open]:text-sky-600 text-left">
                <div className="px-1">{faq.title}</div>
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className="md:text-base mr-4 bg-gray-50 dark:bg-gray-800/80 py-3 px-4 rounded-lg"
                  dangerouslySetInnerHTML={{ __html: faq.content }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
    </BlurFade>
  )
}
