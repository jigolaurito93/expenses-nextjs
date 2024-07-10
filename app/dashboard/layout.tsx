import PageHeader from "@/components/page-header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageHeader className="mt-8" />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}
