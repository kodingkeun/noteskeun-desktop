import { DropdownProfile } from "@/components/dropdown-profile";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Fragment } from "react";
import { Link } from "react-router-dom";

interface BreadcrumbItemInterface {
  label: string;
  to?: string;
}

type Props = {
  breadcrumbs?: BreadcrumbItemInterface[];
};

export default function Header({ breadcrumbs }: Props) {
  return (
    <div className="flex justify-between shrink-0 items-center gap-2 border-b px-2">
      <div className="flex h-10 items-center gap-2 px-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs?.map((item, i) => (
              <Fragment key={item.label + i}>
                {breadcrumbs.length > 1 && i > 0 && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                  {item.to ? (
                    <BreadcrumbLink asChild>
                      <Link to={item.to}>{item.label}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage
                      className={
                        breadcrumbs.length - 1 !== i
                          ? "text-muted-foreground"
                          : ""
                      }
                    >
                      {item.label}
                    </BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="inline-flex space-x-1">
        <ModeToggle />
        <DropdownProfile />
      </div>
    </div>
  );
}
