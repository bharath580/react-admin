import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/supplier/supplierDetailSlice";
import emptyProfile from "../../assets/empty_profile.png";
export default function SupplierDetail() {
  const dispatch = useDispatch();
  const { supplierDetail, isLoading } = useSelector(
    (state) => state.supplierDetail
  );
  let { id } = useParams();
  useEffect(() => {
    dispatch(getById(id));
    console.log("supplierDetail", supplierDetail);
  }, [dispatch, id]);
  if (isLoading) {
    return (
      <div class="flex justify-center items-center h-screen">
        <div class="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
      </div>
    );
  }
  return (
    <div className="m-14 border-gray-400 border-2">
      <div className="pl-3 py-5 bg-gray-400 text-lg font-bold  border-gray-400 border-b-2">
        User #
        {supplierDetail && supplierDetail[0] && supplierDetail[0].supplier_id}
      </div>
      <div class="grid grid-cols-3 gap-x-2 gap-y-10 mt-4">
        <div className="text-center">
          {/* <div className="text-lg">Photo</div> */}
          <img
            className="items-center justify-center m-2 mt-4 w-60 h-72"
            src={
              supplierDetail &&
              supplierDetail[0] &&
              supplierDetail[0].supplier_image
                ? `http://13.202.98.144:2000/${supplierDetail[0].supplier_image}`
                : emptyProfile
            }
            alt="Supplier Profile"
          />
        </div>
        <div className="text-start">
          <div className="mx-2 my-4">
            <div className="text-lg">Name</div>
            <p className="text-2xl text-green-400">
              {supplierDetail &&
                supplierDetail[0] &&
                supplierDetail[0].supplier_name}
            </p>
          </div>

          <div className="mx-2 my-4">
            <div className="text-lg">Age</div>
            <p className="text-2xl text-green-400">
              {supplierDetail && supplierDetail[0] && supplierDetail[0].age}
            </p>
          </div>
          <div className="mx-2 my-4">
            <div className="text-lg">Average Quantity</div>
            <p className="text-2xl text-green-400">
              {(supplierDetail &&
                supplierDetail[0] &&
                supplierDetail[0].avg_quantity) ||
                "-"}
            </p>
          </div>
          <div className="mx-2 my-4">
            <div className="text-lg">Address</div>
            <p className="text-2xl text-green-400">
              {supplierDetail && supplierDetail[0] && supplierDetail[0].address}
            </p>
          </div>
        </div>
        <div className="text-start">
          <div className="mx-2 my-4">
            <div className="text-lg">Phone</div>
            <p className="text-2xl text-green-400">
              {(supplierDetail &&
                supplierDetail[0] &&
                supplierDetail[0].phone) ||
                "-"}
            </p>
          </div>
          <div className="mx-2 my-4">
            <div className="text-lg">Total number of orders</div>
            <p className="text-2xl text-green-400">
              {supplierDetail &&
                supplierDetail[0] &&
                supplierDetail[0].order_number}
            </p>
          </div>
          <div className="mx-2 my-4">
            <div className="text-lg">Average Load Quality</div>
            <p className="text-2xl text-green-400">-</p>
          </div>
          <div className="mx-2 my-4">
            <div className="text-lg">Specimen Signature</div>
            {supplierDetail &&
              supplierDetail[0] &&
              supplierDetail[0].supplier_signature && (
                <img
                  className="items-center justify-center  w-28 h-28"
                  src={`${
                    supplierDetail &&
                    supplierDetail[0] &&
                    supplierDetail[0].supplier_signature
                  }`}
                />
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
