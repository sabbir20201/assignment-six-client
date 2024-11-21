import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import Link from "next/link";

import { userSiteConfig } from "@/src/config/site";

const UserSidebar = () => {
  return (
    <div>
      <ul className="h-screen">
        {userSiteConfig.navItems.map((item) => (
          <div key={item.href} className="">
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "rounded-lg w-full px-2 py-2 font-medium hover:bg-indigo-600",
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UserSidebar;
