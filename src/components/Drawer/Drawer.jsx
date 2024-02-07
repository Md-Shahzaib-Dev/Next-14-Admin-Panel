import Link from 'next/link';

const Drawer = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'hidden'}`}>
            <div className="absolute inset-y-0 left-0 w-64 bg-gray-800 py-6 px-4">
                <div className="text-white text-2xl text-center hover:text-gray-200 mb-8 cursor-pointer">My Admin</div>
                <nav>
                    <ul className="space-y-2 gap-3 flex justify-center items-start flex-col">
                        <NavItem href="/home">Home</NavItem>
                        <NavItem href="/employees">Employees</NavItem>
                        <NavItem href="/orders">Orders</NavItem>
                        <NavItem href="/products">Products</NavItem>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

const NavItem = ({ href, children }) => {
    return <Link href={href} className="text-white hover:text-gray-300">{children}</Link>;
};

export default Drawer;
