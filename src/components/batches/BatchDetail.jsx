import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/batch/batchDetailSlice";

export default function BatchDetail() {
  const dispatch = useDispatch();
  const { summary, material,segregation,quality,rejects,seg_loss } = useSelector(
    (state) => state.batchDetail.batchDetail
  );
  const { isLoading } = useSelector(
    (state) => state.batchDetail
  );
  let { id } = useParams();
  useEffect(() => {
    dispatch(getById(id));
    console.log("batch detail", summary);
    // console.log("purchase_order_detail",purchase_order_details)
  }, [id]);
console.log("isLoading",isLoading)
  if (isLoading) {
    return(
      <div class="flex justify-center items-center h-screen">
      <div class="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
    </div>
    )
  }
  if (!material) {
    return(
      <div class="flex justify-center items-center h-screen">
      <div class="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
    </div>
    )
  }


  // Check if purchase_order_details is not yet loaded
  if (!summary) {
    return(
      <div class="flex justify-center items-center h-screen">
      <div class="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
    </div>
    )
  }
  if(!segregation || !quality || !rejects || !seg_loss){
    <div class="flex justify-center items-center h-screen">
    <div class="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
  </div>
  }
  return (
    <div className="m-14 border-gray-400 border-2  ">
      <div className="pl-3 py-5 bg-green-700 text-white text-lg font-bold  border-gray-400 border-b-2">
        Batch #{summary[0].batch_id}
      </div>
      <div class="grid grid-cols-3 gap-x-4 gap-y-10 mt-4">
        <div className="text-center">
          <p className="text-3xl text-green-400 mb-1">
            {summary[0].orderCount}
          </p>
          <div className="text-lg font-semibold">Orders</div>
        </div>

        <div className="text-center">
          <p className="text-3xl text-green-400 mb-1">{summary[0].quantity}</p>
          <div className="text-lg font-semibold">Total Quantity</div>
        </div>

        <div className="text-center">
          <p className="text-3xl text-green-400 mb-1">{summary[0].date}</p>
          <div className="text-lg font-semibold">Data Created</div>
        </div>
      </div>
      <div className="m-6">
        <h4 className="text-2xl font-semibold">Material Details</h4>
        <div className="mx-4 my-6">
          <table className="min-w-full divide-y  divide-gray-200 table-auto border-collapse border border-gray-400">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                  PO ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                  Material Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                  Material Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                  Supplier
                </th>
                <th className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                  Sacks
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {material.map((order) => (
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.purchase_order_id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.display_material_id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.material_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.supplier_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.sacks}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
     {summary[0].status != 1 &&<> <div className="m-6">
        <h4 className="text-2xl font-semibold">Segregation Details</h4>
        <div className="mx-4 my-6">
          <table className="min-w-full divide-y  divide-gray-200 table-auto border-collapse border border-gray-400">
            <thead className="bg-gray-50">
              <tr>
               
                <th className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                  Material
                </th>
                <th className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
               
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {segregation.map((order) => (
                <tr>
                  
                
                  <td className="px-6 py-4 whitespace-nowrap  text-sm text-gray-500">
                    {order.material_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap   text-sm text-gray-500">
                    {order.quantity}
                  </td>
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-x-4 gap-y-10 mt-4 mb-3">
      <div className="text-center">
        <p className="text-2xl text-green-400 mb-1">
          {quality+ '%'}
        </p>
        <div className="text-lg font-semibold">Quality</div>
      </div>

      <div className="text-center">
        <p className="text-2xl text-green-400 mb-1">{rejects + 'kg'}</p>
        <div className="text-lg font-semibold">Rejects Quantity</div>
      </div>

      <div className="text-center">
        <p className="text-2xl text-green-400 mb-1">{seg_loss + '%'}</p>
        <div className="text-lg font-semibold">Segregation Loss</div>
      </div>
    </div>
    </>
      }
    </div>
  );
}
