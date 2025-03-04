import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../features/dashboard/dashboard";

import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Header from "../../common/Header";
import "react-date-range/dist/styles.css"; // main style file

import Datepicker from "react-tailwindcss-datepicker";

export default function Dashboard2() {
  const dispatch = useDispatch();
  const {
    procured_volume,
    segregated,
    sold_volume,
    noOfOrders,
    quantityByMaterial,
    topSuppliers,
    segregationMaterial,
    purchaseTrend,
    segregationTrend,
    baleTrend,
    baleVolumeByMaterial,
    traceabilityValue,
    quality
    
  } = useSelector((state) => state.dashboard.dashboardData);
const {isLoading}=useSelector((state) => state.dashboard);
  const getMonday = (date) => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  };

  const getSaturday = (date) => {
    const day = date.getDay();
    const diff = 6 - day;
    return new Date(date.setDate(date.getDate() + diff));
  };
  const [value, setValue] = useState({
    startDate: getMonday(new Date()),
    endDate: getSaturday(new Date()),
  });
  useEffect(() => {
    if (value) {
      dispatch(getAll(value));
      console.log("isLoading",isLoading)
    }
    console.log("dashboardData", procured_volume);
  }, [dispatch]);
  if(purchaseTrend){
    var labels = purchaseTrend.map(item => new Date(item.order_date).toISOString().split("T")[0]);
var dataValues = purchaseTrend.map(item => Number(item.total_quantity));
console.log('dataValues',dataValues)
  }
  if(segregationTrend){
    var segregationLabels = segregationTrend.map(item => new Date(item.segregation_date).toISOString().split("T")[0]);
var segregationDataValues = segregationTrend.map(item => Number(item.total_quantity));
// console.log('dataValues',dataValues)
  }
  if(baleTrend){
    var baleLabels = baleTrend.map(item => new Date(item.bale_date).toISOString().split("T")[0]);
var baleDataValues = baleTrend.map(item => Number(item.quantity));
// console.log('dataValues',dataValues)
  }
  if(isLoading) {
    console.log("isLoading",isLoading)
    return (
      <div class="flex justify-center items-center h-screen">
        <div class="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
      </div>
    );
  }
  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
    dispatch(getAll(newValue));
  };
 
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="min-w-full">
        <Header title={"Dashboard"} />
      </div>

      <div className="max-h-[calc(100vh-100px)] overflow-y-auto">
     
            <div className="p-2 ">
              <div className="border-2">
                <Datepicker value={value} onChange={handleValueChange} />
              </div>
              <div className="mt-12">
                <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
                  <div className="relative flex flex-col rounded-xl  bg-white text-gray-700 h-28 shadow-md border-b-4 border-l-4 border-gray-300">
                    <div className="p-4 text-right ">
                      <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                        PET Procured
                      </p>
                      <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                        {(procured_volume &&
                          procured_volume[0] &&
                          procured_volume[0].volume_procured) ||
                          0}{" "}
                        kg
                      </h4>
                    </div>
                  </div>

                  <div className="relative flex flex-col rounded-xl  bg-white text-gray-700 h-28 shadow-md border-b-4 border-l-4 border-gray-300">
                    <div className="p-4 text-right ">
                      <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                        PET Segregated
                      </p>
                      <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                        {(segregated &&
                          segregated[0] &&
                          segregated[0].segragation_volume) ||
                          0}{" "}
                        kg
                      </h4>
                    </div>
                  </div>

                  <div className="relative flex flex-col rounded-xl  bg-white text-gray-700 h-28 shadow-md border-b-4 border-l-4 border-gray-300">
                    <div className="p-4 text-right ">
                      <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                        PET Sold
                      </p>
                      <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                        {(sold_volume &&
                          sold_volume[0] &&
                          sold_volume[0].volume_sold) ||
                          0}{" "}
                        kg
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
                  <div className="relative flex flex-col rounded-xl  bg-white text-gray-700 h-28 shadow-md border-b-4 border-l-4 border-gray-300">
                    <div className="p-4 text-right ">
                      <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                        Orders Received
                      </p>
                      <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                        {noOfOrders &&
                          noOfOrders[0] &&
                          noOfOrders[0].no_of_orders}
                      </h4>
                    </div>
                  </div>

                  <div className="relative flex flex-col rounded-xl  bg-white text-gray-700 h-28 shadow-md border-b-4  border-l-4 border-gray-300">
                    <div className="p-4 text-right ">
                      <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                        Quality
                      </p>
                      <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                      {quality} %
                      </h4>
                    </div>
                  </div>

                  <div className="relative flex flex-col rounded-xl  bg-white text-gray-700 h-28 shadow-md border-l-4 border-b-4 border-gray-300">
                    <div className="p-4 text-right ">
                      <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                        Traceability
                      </p>
                      <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                        {traceabilityValue} %
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="h-px my-1 mx-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-3">
              <div className="col-span-1 sm:col-span-2 mt-7">
                <h4 className="text-xl font-semibold  mb-4 text-green-500">
                  Procurement
                </h4>
              </div>

              <div className="col-span-1 sm:col-span-1">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold  mb-4">
                    Purchase quantity by material
                  </h4>
                  <table className="w-full table-auto border border-gray-500">
                    <thead>
                      <tr>
                        <th className="text-center border py-2">Material</th>
                        <th className="text-center border py-2">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quantityByMaterial &&
                        quantityByMaterial.map((material) => (
                          <tr key={material.material_name} className="">
                            <td className="text-center border py-2">
                              {material.material_name}
                            </td>
                            <td className="text-center border py-2">
                              {material.total_quantity}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-span-1 sm:col-span-1">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Purchase trend</h4>
                  <div className="chart-wrapper h-56">
                    <Bar
                      data={{
                        labels: labels,
                        datasets: [
                          {
                            label: "Revenue",
                            data: dataValues,
                             backgroundColor: "lightgreen"
                          },
                        ],
                        
                      }}
                      options={{
                        maintainAspectRatio: false, // Allows the chart to fit into the div without maintaining the aspect ratio
                        responsive: true,           // Adjusts size to the parent container
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-xl font-semibold mt-4 mb-4 text-green-500">
                Top Suppliers
              </h4>
              <table className="w-full table-auto border border-gray-500">
                <thead>
                  <tr>
                    <th className="text-center border py-2">Supplier ID </th>
                    <th className="text-center border py-2">Supplier Name </th>
                    <th className="text-center border py-2">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {topSuppliers &&
                    topSuppliers.map((material) => (
                      <tr className="" key={material.supplier_id}>
                        <td className="text-center border py-2">
                          {material.supplier_id}
                        </td>
                        <td className="text-center border py-2">
                          {material.supplier_name}
                        </td>
                        <td className="text-center border py-2">
                          {material.quantity}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <hr className="h-px my-1 mx-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-3">
              <div className="col-span-1 sm:col-span-2">
                <h4 className="text-xl font-semibold mt-7 mb-4 text-green-500">
                  Processing
                </h4>
              </div>

              <div className="col-span-1 sm:col-span-1">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold  mb-4">
                    Segregation volume by material
                  </h4>
                  <table className="w-full table-auto border border-gray-500">
                    <thead>
                      <tr>
                        <th className="text-center border py-2">Material</th>
                        <th className="text-center border py-2">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {segregationMaterial &&
                        segregationMaterial.map((material) => (
                          <tr key={material.material} className="">
                            <td className="text-center border py-2">
                              {material.material}
                            </td>
                            <td className="text-center border py-2">
                              {material.quantity}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-span-1 sm:col-span-1">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">
                    Segregation trend
                  </h4>
                  <div className="chart-wrapper h-56">
                    <Bar
                      data={{
                        labels: segregationLabels,
                        datasets: [
                          {
                            label: "Revenue",
                            data: segregationDataValues,
                            backgroundColor: "lightgreen", // Set bars to green
                            // borderColor: "green", // Optional: border color
                            // borderWidth: 1, // Optional: border width
                          },
                        ],
                      }}
                      options={{
                        maintainAspectRatio: false, // Allows the chart to fit into the div without maintaining the aspect ratio
                        responsive: true,           // Adjusts size to the parent container
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h4 className="text-xl font-semibold mt-7 mb-4 text-green-500">
                Bale volumes by material
              </h4>
              <table className="w-full table-auto border border-gray-500">
                <thead>
                  <tr>
                    <th className="text-center border py-2">Material</th>

                    <th className="text-center border py-2">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                   {baleVolumeByMaterial &&
                    baleVolumeByMaterial.map((material) => ( 
                  <tr className="">
                    <td className="text-center border py-2">{material.material}</td>

                    <td className="text-center border py-2">{material.quantity}</td>
                  </tr>
                  ))} 
                </tbody>
              </table>
            </div>
            <div className="mb-4">
              <h4 className="text-xl font-semibold mt-7 mb-4 text-green-500">
                Bales Trend
              </h4>
              <div className="chart-wrapper" style={{ height: "380px" }}>
                <Bar
                  data={{
                    labels:baleLabels,
                    datasets: [
                      {
                        label: "Revenue",
                        data: baleDataValues,
                         backgroundColor: "lightgreen"
                      },
                    ],
                  }}
                />
              </div>
            </div>
       
        
      </div>
    </div>
  );
}
