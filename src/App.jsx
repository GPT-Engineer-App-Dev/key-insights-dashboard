import { FaChartBar, FaChartLine, FaChartPie, FaDollarSign, FaShoppingCart, FaUser } from "react-icons/fa";

function App() {
  const metrics = [
    { icon: FaChartBar, label: "Sales", value: "$10,000" },
    { icon: FaDollarSign, label: "Revenue", value: "$50,000" },
    { icon: FaUser, label: "Customers", value: "500" },
    { icon: FaShoppingCart, label: "Orders", value: "1,000" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">Business Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map(({ icon: Icon, label, value }, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <Icon className="text-4xl text-primary mr-4" />
            <div>
              <div className="text-gray-500 text-sm">{label}</div>
              <div className="text-2xl font-bold">{value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Sales Chart</h2>
          <div className="flex justify-center items-center h-64">
            <FaChartLine className="text-6xl text-primary" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Revenue Breakdown</h2>
          <div className="flex justify-center items-center h-64">
            <FaChartPie className="text-6xl text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
