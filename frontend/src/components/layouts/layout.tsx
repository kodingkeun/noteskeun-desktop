import type { ReactNode } from "react";

import { AppSidebar } from "@/components/layouts/sidebar";
import Header from "./header";

interface BreadcrumbItemInterface {
  label: string;
  to?: string;
}

type Props = {
  children: ReactNode;
  breadcrumbs?: BreadcrumbItemInterface[];
};

const AppLayout = ({ children, breadcrumbs }: Props) => {
  return (
    <>
      <AppSidebar />
      <main className="w-full">
        <Header breadcrumbs={breadcrumbs} />
        {children}
      </main>
    </>
  );
};

export default AppLayout;
