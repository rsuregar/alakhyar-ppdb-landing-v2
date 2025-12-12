import OfficialWebCard from '@/app/components/OfficialWebsiteCard'
import CallToAction from '@/app/components/CallToAction'
import JenjangPageContent from './JenjangPageContent'
// import { Separator } from '@/components/ui/separator'

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params

  return (
    <div className="p-0 sm:p-12">
      <JenjangPageContent slug={slug} />

      <div className="my-16"></div>
      <OfficialWebCard />
      <div className="-mt-5 sm:mt-10"></div>
      <CallToAction rounded />
    </div>
  )
}

export default Page
