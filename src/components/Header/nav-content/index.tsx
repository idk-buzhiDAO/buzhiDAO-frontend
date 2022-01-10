import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
// import Social from "./social";
import StakeIcon from "../../../assets/icons/stake.svg";
import BondIcon from "../../../assets/icons/bond.svg";
import WonderlandIcon from "../../../assets/icons/siu-nav-header.svg";
import DashboardIcon from "../../../assets/icons/dashboard.svg";
import { trim, shorten } from "../../../helpers";
import { useAddress } from "../../../hooks";
import useBonds from "../../../hooks/bonds";
import { Link } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import "./nav-content.scss";
import DocsIcon from "../../../assets/icons/stake.svg";
import GlobeIcon from "../../../assets/icons/wonderglobe.svg";
import classnames from "classnames";

function NavContent() {
    const [isActive] = useState();
    const address = useAddress();
    const { bonds } = useBonds();

    const checkPage = useCallback((location: any, page: string): boolean => {
        const currentPath = location.pathname.replace("/", "");
        if (currentPath.indexOf("dashboard") >= 0 && page === "dashboard") {
            return true;
        }
        if (currentPath.indexOf("stake") >= 0 && page === "stake") {
            return true;
        }
        if (currentPath.indexOf("mints") >= 0 && page === "mints") {
            return true;
        }
        /*
        if (currentPath.indexOf("calculator") >= 0 && page === "calculator") {
            return true;
        }
        */
        return false;
    }, []);

    return (
        <div className="dapp-nav">
            <Link
                component={NavLink}
                to="/dashboard"
                isActive={(match: any, location: any) => {
                    return checkPage(location, "dashboard");
                }}
                className={classnames("button-dapp-menu", { active: isActive })}
            >
                <div className="dapp-menu-item">
                    <p>Dashboard</p>
                </div>
            </Link>
            <Link
                component={NavLink}
                to="/stake"
                isActive={(match: any, location: any) => {
                    return checkPage(location, "stake");
                }}
                className={classnames("button-dapp-menu", { active: isActive })}
            >
                <div className="dapp-menu-item">
                    <p>Stake</p>
                </div>
            </Link>

            <Link
                component={NavLink}
                id="bond-nav"
                to="/mints"
                isActive={(match: any, location: any) => {
                    return checkPage(location, "mints");
                }}
                className={classnames("button-dapp-menu", { active: isActive })}
            >
                <div className="dapp-menu-item">
                    <p>Mint</p>
                </div>
            </Link>

            {/* <div className="bond-discounts">
                    <p>Mint discounts</p>
                    {bonds.map((bond, i) => (
                        <Link component={NavLink} to={`/mints/${bond.name}`} key={i} className={"bond"}>
                            {!bond.bondDiscount ? (
                                <Skeleton variant="text" width={"150px"} />
                            ) : (
                                <p>
                                    {bond.displayName}
                                    <span className="bond-pair-roi">{bond.bondDiscount && trim(bond.bondDiscount * 100, 2)}%</span>
                                </p>
                            )}
                        </Link>
                    ))}
                </div> */}
        </div>
    );
}

export default NavContent;
