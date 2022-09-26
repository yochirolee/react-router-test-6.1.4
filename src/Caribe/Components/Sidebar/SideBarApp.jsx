import { React } from "react";
import { Sidebar} from "flowbite-react";
import {
	HiChartPie,
	HiShoppingBag,
	HiInbox,
	HiArrowSmRight,
	HiTable,
	HiUser,
	HiHome,
	HiPencil,
} from "react-icons/hi";
export const SideBarApp = () => {
	return (
		<Sidebar>
			<Sidebar.Items>
				<Sidebar.ItemGroup>
					<Sidebar.Item href="#" icon={HiHome}>
						Inicio
					</Sidebar.Item>
					<Sidebar.Collapse icon={HiPencil} label="Ordenes">
						<Sidebar.Item href="#">Crear Orden</Sidebar.Item>
					</Sidebar.Collapse>

					<Sidebar.Item href="#" icon={HiUser}>
						Users
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={HiShoppingBag}>
						Products
					</Sidebar.Item>
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	);
};
