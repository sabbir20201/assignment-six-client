import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { dashboardSiteConfig } from "@/src/config/site";
import Link from "next/link";
export const DashboardNavbar = () => {


    return (

        <ul className="h-screen w-56">
            {dashboardSiteConfig.navItems.map((item) => (
                <div key={item.href} className="">
                    <Link

                        className={clsx(
                            linkStyles({ color: "foreground" }),
                            "data-[active=true]:text-slate-950 data-[active=true]:font-medium rounded-lg w-full px-2 py-2 font-medium hover:bg-sky-700",
                        )}
                        color="foreground"
                        href={item.href}
                    >
                        {item.label}
                    </Link>
                </div>
            ))}
        </ul>

    );
};
