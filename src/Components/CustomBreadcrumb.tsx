import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem as ShadcnBreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import { Separator } from "./ui/separator";
import { Slash } from "lucide-react";

interface BreadcrumbProps {
  items: {
    label: string;
    href: string;
  }[];
}

const CustomBreadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className='mb-4'>
      <nav aria-label="breadcrumb">
        <BreadcrumbList className='text-base'>
          {items.map((item, index) => (
            <React.Fragment key={item.href}>
              <ShadcnBreadcrumbItem>
                {index < items.length - 1 ? (
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                ) : ( <>
                  <span aria-current="page" className="text-black font-semibold">{item.label}</span>
                  </>
                )}
              </ShadcnBreadcrumbItem>
              {index < items.length - 1 && (
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </nav>
      <Separator />
    </div>
  );
};


export default CustomBreadcrumb;
