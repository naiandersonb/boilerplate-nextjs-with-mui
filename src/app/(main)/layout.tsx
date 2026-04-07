import { Header } from "@/components/layout/Header";
import { Actions } from "@/components/layout/Actions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header actions={<Actions />} />
      {children}
    </>
  );
}
