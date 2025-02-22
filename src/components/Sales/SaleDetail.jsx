import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/sale/saleDetailSlice";

export default function SaleDetail() {
  const dispatch = useDispatch();
  const { summary, material } = useSelector(
    (state) => state.saleDetail.saleDetail
  );
  const { isLoading } = useSelector(
    (state) => state.saleDetail
  );
  let { id } = useParams();
  useEffect(() => {
    dispatch(getById(id));
    console.log("summary", summary);
    console.log("material", material);
  }, [id]);
  if (isLoading ) {
    return (
      <div class="flex justify-center items-center h-screen">
        <div class="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
      </div>
    );
  }
  if (!summary) {
    return <div>Loading...</div>;
  }
  if (summary.length === 0) {
    return <div>No data available for this supplier.</div>;
  }
  return (
    <div className="m-14 border-gray-400 border-2  ">
      <div className="pl-3 py-5 bg-green-700 text-white text-lg font-bold  border-gray-400 border-b-2">
        Sale #{summary[0].sale_id}
      </div>
      <div class="grid grid-cols-4 gap-x-4 gap-y-10 mt-4">
        <div className="text-center">
          <div className="text-lg">Date</div>
          <p className="text-2xl text-green-400">{summary[0].date}</p>
        </div>

        <div className="text-center">
          <div className="text-lg">Buyer Name</div>
          <p className="text-2xl text-green-400">{summary[0].buyer_name}</p>
        </div>

        <div className="text-center">
          <div className="text-lg">No. of Bales</div>
          <p className="text-2xl text-green-400">{summary[0].balesCount}</p>
        </div>

        <div className="text-center">
          <div className="text-lg">No. of suppliers</div>
          <p className="text-2xl text-green-400">{summary[0].suppliersCount}</p>
        </div>
       
      </div>
      <div className="m-6">
        
        <div className="mx-4 my-6">
          <table className="min-w-full divide-y  divide-gray-200 table-auto border-collapse border border-gray-400">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                Bale ID	
                </th>
                <th className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                Material
                </th>
              
                <th className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                Quantity
                </th>
                
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {material.map((order) => (
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order.bale_id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.bale_material}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.bale_quantity }
                </td>
               
              </tr>
              ))} 
            </tbody>
          </table>
        </div>
      </div>
     
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 my-4">
            <div className="flex flex-col items-center justify-center">
              {summary &&
              summary[0] &&
              summary[0].buyer_signature? (
                <img
                  className="w-28 h-28"
                  src={summary[0].buyer_signature}
                  alt="Buyer Signature"
                />
              ) : (
                <div className="flex items-center justify-center w-28 h-28 border rounded bg-gray-100 text-gray-500">
                  No Signature
                </div>
              )}
              <div className="text-lg mt-2">Buyer Signature</div>
            </div>

            <div className="flex flex-col items-center justify-center">
              {summary &&
              summary[0] &&
              summary[0].supervisor_signature ? (
                <img
                  className="w-28 h-28"
                  src={summary[0].supervisor_signature}
                  alt="Supervisor Signature"
                />
              ) : (
                <div className="flex items-center justify-center w-28 h-28 border rounded bg-gray-100 text-gray-500">
                  No Signature
                </div>
              )}
              <div className="text-lg mt-2">Supervisor Signature</div>
            </div>

            {/* <div className="flex flex-col items-center justify-center">
        <img 
                className="w-28 h-28" alt=" "
                src={`${purchase_order && purchase_order[0] && purchase_order[0].driver_signature}`} 
            />
            <div className="text-lg mt-2">Driver Signature</div>
        </div> */}
          </div>
    </div>
  );
}
