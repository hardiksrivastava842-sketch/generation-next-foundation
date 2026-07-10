function DonationRequests() {
  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Donation Requests
      </h1>

      <div className="bg-white shadow rounded-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-700 text-white">

            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Mobile</th>
              <th className="p-4">Amount</th>
              <th className="p-4">UTR</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td className="p-4 text-center" colSpan="7">
                No Donation Found
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default DonationRequests;