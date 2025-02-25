import AppLayout from "@/components/layouts/layout";

const breadcrumbs = [
  {
    label: "About",
    to: "",
  },
];

export default function About() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className="p-2">
        <h1 className="text-3xl font-bold">About</h1>
      </div>
    </AppLayout>
  );
}
