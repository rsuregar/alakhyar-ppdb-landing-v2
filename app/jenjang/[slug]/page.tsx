export async function generateStaticParams() {
  return [
    { slug: 'tkit' },
    { slug: 'sdit' },
    { slug: 'smpit' },
    { slug: 'smait' },
  ];
}

const Page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  return (
    <div>
      <h1>Static Page for: {slug}</h1>
    </div>
  );
};

export default Page;
