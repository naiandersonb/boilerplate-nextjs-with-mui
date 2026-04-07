import { useDevice } from "@/hooks/use-device";
import Link from "next/link";
import { Logo } from "../Logo";

export const AppBarLogo = () => {
  const { isMobile } = useDevice();
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center" }}>
      <Logo {...(isMobile && { width: 89, height: 30 })} />
    </Link>
  );
};
