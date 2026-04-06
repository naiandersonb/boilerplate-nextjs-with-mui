import { Header } from "@/components/layout/Header";
import { ActionButtons } from "@/components/layout/ActionButtons";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header actions={<ActionButtons />} />
      {children}
    </>
  );
}
