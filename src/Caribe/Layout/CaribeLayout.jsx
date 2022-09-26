import { NavbarApp } from "../Components/Navbar/NavbarApp";
import { SideBarApp } from "../Components/Sidebar/SideBarApp";


export const CaribeLayout = ({ children }) => {
	return (
		<div>
			<NavbarApp />
			{children}
			<div className="flex">
				<div className=" bg-gray-50  border-r h-screen">
				  <SideBarApp/>	
				</div>
				<div>Another </div>
			</div>
		</div>
	);
};
