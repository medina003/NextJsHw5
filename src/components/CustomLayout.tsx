import Link from "next/link";
import { ReactNode } from "react";
import { CustomNav } from "./CustomNav";
import { usePathname } from "next/navigation";

interface Props {
  children: ReactNode;
}

function CustomLayout({ children }: Props) {
  const pathname = usePathname();
  const setActive = (href: string) => {
    if (pathname === href) {
      return "active";
    } else {
      return "";
    }
  };

  return (
    <div>
      <CustomNav>
        <li className={setActive("/events")}>
          <Link href="/events">Events</Link>
        </li>
        <li className={setActive("/home")}>
          <Link href="/home">Home</Link>
        </li>
      </CustomNav>
      {children}
    </div>
  );
}

export default CustomLayout;
