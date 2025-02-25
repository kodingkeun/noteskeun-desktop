import AppLayout from "@/components/layouts/layout";

const breadcrumbs = [
  {
    label: "Home",
  },
];

function Home() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className="p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
        aliquam accusamus impedit, perspiciatis similique laudantium tempore
        voluptas quae repellendus excepturi suscipit quidem delectus
        reprehenderit vel maxime quibusdam dicta vitae!
      </div>
    </AppLayout>
  );
}

export default Home;
