import { HomeAppBar } from "@/components/layout/HomeAppBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HomeAppBar />
      {children}
    </>
  );
}
