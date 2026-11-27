
import React from 'react';
import {
  Users,
  BriefcaseBusiness,
  ClipboardList,
  IndianRupee,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2
} from 'lucide-react';

const DashboardPage = () => {

  const stats = [
    {
      title: 'Total Clients',
      value: '128',
      change: '+12%',
      icon: Users,
      positive: true
    },
    {
      title: 'Active Projects',
      value: '24',
      change: '+8%',
      icon: BriefcaseBusiness,
      positive: true
    },
    {
      title: 'Pending Inquiries',
      value: '16',
      change: '-5%',
      icon: ClipboardList,
      positive: false
    },
    {
      title: 'Total Revenue',
      value: '₹8.4L',
      change: '+18%',
      icon: IndianRupee,
      positive: true
    }
  ];

  const projects = [
    { name: 'SAP Implementation', client: 'ABC Industries', status: 'In Progress' },
    { name: 'Oracle ERP Setup', client: 'Global Traders', status: 'Completed' },
    { name: 'NetSuite Integration', client: 'Tech Solutions', status: 'Pending' },
    { name: 'Microsoft Dynamics', client: 'Prime Manufacturing', status: 'In Progress' }
  ];

  return (
    <div className="space-y-6">

      {/* Welcome Section */}
      <div>
        <h2 className="text-2xl font-bold text-brand-navy">
          Welcome Back, Admin!
        </h2>
        <p className="text-sm text-enterprise-500 mt-1">
          Here's what's happening with your business today.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white p-5 rounded-xl border border-enterprise-200 shadow-subtle"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-enterprise-500 font-medium">
                  {item.title}
                </p>

                <div className="p-2 bg-blue-50 rounded-lg text-brand-blue">
                  <Icon size={20} />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-brand-navy mt-4">
                {item.value}
              </h3>

              <div className="flex items-center gap-1 mt-2">
                {item.positive ? (
                  <ArrowUpRight size={15} className="text-green-600" />
                ) : (
                  <ArrowDownRight size={15} className="text-red-500" />
                )}

                <span className={`text-xs font-semibold ${
                  item.positive ? 'text-green-600' : 'text-red-500'
                }`}>
                  {item.change}
                </span>

                <span className="text-xs text-enterprise-400">
                  vs last month
                </span>
              </div>
            </div>
          );
        })}

      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-xl border border-enterprise-200 shadow-subtle">

        <div className="p-5 border-b border-enterprise-200">
          <h3 className="font-bold text-brand-navy">
            Recent Projects
          </h3>
          <p className="text-xs text-enterprise-500 mt-1">
            Overview of your latest ERP projects
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-enterprise-50 text-enterprise-500">
              <tr>
                <th className="p-4">Project</th>
                <th className="p-4">Client</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project, index) => (
                <tr key={index} className="border-t border-enterprise-100">
                  <td className="p-4 font-semibold text-brand-navy">
                    {project.name}
                  </td>

                  <td className="p-4 text-enterprise-600">
                    {project.client}
                  </td>

                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Completed'
                        ? 'bg-green-100 text-green-700'
                        : project.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {project.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* Bottom Activity Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div className="bg-white rounded-xl border border-enterprise-200 p-5">
          <h3 className="font-bold text-brand-navy mb-4">
            Recent Activity
          </h3>

          <div className="space-y-4">
            <p className="text-sm text-enterprise-600 flex gap-2">
              <CheckCircle2 className="text-green-500 shrink-0" size={18} />
              New client project successfully created.
            </p>

            <p className="text-sm text-enterprise-600 flex gap-2">
              <BriefcaseBusiness className="text-blue-500 shrink-0" size={18} />
              SAP implementation project updated.
            </p>

            <p className="text-sm text-enterprise-600 flex gap-2">
              <Clock className="text-yellow-500 shrink-0" size={18} />
              New customer inquiry received.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-enterprise-200 p-5">
          <h3 className="font-bold text-brand-navy mb-3">
            Business Overview
          </h3>

          <p className="text-sm text-enterprise-500">
            Your business currently has 128 clients and 24 active projects.
            Keep track of project progress and incoming inquiries from this
            dashboard.
          </p>

          <div className="mt-5 bg-blue-50 rounded-lg p-4">
            <p className="text-xs text-brand-blue font-semibold">
              PROJECT COMPLETION
            </p>
            <p className="text-2xl font-bold text-brand-navy mt-1">
              78%
            </p>
            <div className="w-full bg-blue-100 h-2 rounded-full mt-3">
              <div className="bg-brand-blue h-2 rounded-full w-[78%]" />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default DashboardPage;
