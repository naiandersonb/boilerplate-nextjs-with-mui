import { SearchAppBar } from "@/components/layout/SearchAppBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SearchAppBar />
      {children}
    </>
  );
}
