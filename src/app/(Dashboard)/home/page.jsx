const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card title="Users" count={150} />
                <Card title="Products" count={50} />
                <Card title="Orders" count={200} />
            </div>

            {/* Table Section */}
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Order ID</th>
                            <th className="border border-gray-300 px-4 py-2">Customer</th>
                            <th className="border border-gray-300 px-4 py-2">Date</th>
                            <th className="border border-gray-300 px-4 py-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">12345</td>
                            <td className="border border-gray-300 px-4 py-2">John Doe</td>
                            <td className="border border-gray-300 px-4 py-2">2024-02-05</td>
                            <td className="border border-gray-300 px-4 py-2">$120.00</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">12345</td>
                            <td className="border border-gray-300 px-4 py-2">John Doe</td>
                            <td className="border border-gray-300 px-4 py-2">2024-02-05</td>
                            <td className="border border-gray-300 px-4 py-2">$120.00</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">12345</td>
                            <td className="border border-gray-300 px-4 py-2">John Doe</td>
                            <td className="border border-gray-300 px-4 py-2">2024-02-05</td>
                            <td className="border border-gray-300 px-4 py-2">$120.00</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">12345</td>
                            <td className="border border-gray-300 px-4 py-2">John Doe</td>
                            <td className="border border-gray-300 px-4 py-2">2024-02-05</td>
                            <td className="border border-gray-300 px-4 py-2">$120.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const Card = ({ title, count }) => {
    return (
        <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600">{count}</p>
        </div>
    );
};

export default Home;
