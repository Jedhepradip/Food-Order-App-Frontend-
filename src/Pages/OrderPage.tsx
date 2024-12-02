import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../Redux/Store/Store';
import { FetchingOrderMenuData } from '../Redux/Features/OrderMenuSlice';

interface MenuItme {
    Quantity: number,
    description: string,
    menuId: string,
    name: string,
    price: number,
    image: string,
    _id: string
}

interface deliveryDetails {
    name: string;
    email: string;
    address: string;
    city: string;
    country: string,
    expiry: string,
    cvc: string,
}

interface OrderData {
    MenuItemsList: MenuItme[],
    deliveryDetails: deliveryDetails,
    restaurant: string,
    status: string,
    totalAmount: number,
    createdAt: string,
    updatedAt: string,
    user: [],
    __v: string,
    _id: string,
}

const OrderPage: React.FC = () => {
    const [OrderMenu, SetOrderMenuData] = useState<OrderData[]>([])
    // const [OrderMenu1, SetOrderMenuData1] = useState<MenuItme | null>(null)
    const Dispatch: AppDispatch = useDispatch()
    const OrderMenuData = useSelector((state: RootState) => state.Order.Order)

    useEffect(() => {
        if (OrderMenuData?.length) {
            SetOrderMenuData(OrderMenuData)
        }
    }, [OrderMenuData])

    useEffect(() => {
        Dispatch(FetchingOrderMenuData())
    }, [Dispatch])

    console.log(OrderMenu);


    OrderMenu.map((val) =>
        val.MenuItemsList.map((item) =>
            console.log("Description:", item.description)
        )
    );

    return (
        <>
            {/* <div className="min-h-screen bg-black p-4 text-white">
                <h1 className="text-2xl font-bold text-center mb-6">Order Details</h1>
                <div className="max-w-4xl mx-auto">
                    {OrderMenu.length === 0 ? (
                        <div className="text-center text-gray-500 text-lg">No orders found.</div>
                    ) : (
                        OrderMenu.map((order) =>
                            order.MenuItemsList.map((item) => (
                                <div
                                    key={order._id}
                                    className="flex items-center bg-gray-800 shadow-md rounded-lg p-4 mb-4"
                                >
                                    <img
                                        src={`http://localhost:3000/${item.image}`}
                                        alt={item.name}
                                        className="w-20 h-20 rounded-lg mr-4 object-cover border border-gray-600"
                                    />
                                    <div className="flex-1">
                                        <h2 className="text-xl font-semibold">{item.name}</h2>
                                        <p className="text-gray-300">{item.price}</p>
                                    </div>
                                    <div>
                                        <span
                                            className={`px-3 py-1 text-sm font-medium rounded-full ${order.status === "Pending"
                                                    ? "bg-yellow-600 text-white"
                                                    : order.status === "Delivered"
                                                        ? "bg-green-600 text-white"
                                                        : "bg-blue-600 text-white"
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </div>
                                </div>
                            ))
                        )
                    )}
                </div>
            </div> */}



            {/* <div className="flex flex-col items-center py-10 min-h-screen bg-black text-white">
                <div className="border shadow-lg rounded-lg p-6 w-full max-w-lg">
                    <h2 className="text-3xl font-semibold mb-4 text-center">
                        Order <span className="text-red-500">Details</span>
                    </h2>
                    <div className="space-y-4">
                        {OrderMenu.map((order) => (
                            order.MenuItemsList.map((item) => (
                                <div
                                    key={item._id}
                                    className="flex items-center bg-gray-800 text-white shadow-md rounded-lg p-4"
                                >
                                    <img
                                        src={`http://localhost:3000/${item.image}`}
                                        alt={item.name}
                                        className="w-20 h-20 rounded-lg mr-4 object-cover border border-gray-600"
                                    />
                                    <div className="flex-1">
                                        <h2 className="text-xl font-semibold">{item.name}</h2>
                                        <p className="text-gray-400">{item.price}</p>
                                    </div>
                                    <div>
                                        <span
                                            className={`px-3 py-1 text-sm font-medium rounded-full ${order.status === "Pending"
                                                ? "bg-yellow-600 text-white"
                                                : order.status === "Confirmed"
                                                    ? "bg-purple-600 text-white"
                                                    : order.status === "Preparing"
                                                        ? "bg-blue-600 text-white"
                                                        : order.status === "Out for Delivery"
                                                            ? "bg-orange-600 text-white"
                                                            : "bg-green-600 text-white"
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </div>
                                </div>
                            ))
                        ))}
                    </div>
                    <div className="mt-6">
                        <NavLink to="/AddToCartPage">
                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg">
                                Continue Shopping
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div> */}

            <div className="flex flex-col items-center py-10 min-h-screen bg-black text-white">
                <div className="border shadow-lg rounded-lg p-6 w-full max-w-lg">
                    <h2 className="text-3xl font-semibold mb-4 text-center">
                        Order <span className="text-red-500">Details</span>
                    </h2>
                    <div className="space-y-4">
                        {OrderMenu.map((order) =>
                            order.MenuItemsList.map((item) => (
                                <div
                                    key={item._id}
                                    className="flex items-center bg-gray-800 text-white shadow-md rounded-lg p-4"
                                >
                                    <img
                                        src={`http://localhost:3000/${item.image}`}
                                        alt={item.name}
                                        className="w-20 h-20 rounded-lg mr-4 object-cover border border-gray-600"
                                    />
                                    <div className="flex-1">
                                        <h2 className="text-xl font-semibold">{item.name}</h2>
                                        <p className="text-gray-400 font-serif">Price: ₹{item.price}</p>
                                        <p className="text-gray-400 font-serif">Quantity: {item.Quantity}</p>
                                    </div>
                                    <div>

                                        <span
                                            className={`px-3 py-1 text-sm font-medium rounded-full ${order.status === "Pending"
                                                ? "bg-yellow-600 text-white"
                                                : order.status === "Confirmed"
                                                    ? "bg-purple-600 text-white"
                                                    : order.status === "Preparing"
                                                        ? "bg-blue-600 text-white"
                                                        : order.status === "Out for Delivery"
                                                            ? "bg-orange-600 text-white"
                                                            : "bg-green-600 text-white"
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="mt-6">
                        <NavLink to="/AddToCartPage">
                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg">
                                Continue Shopping
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>

        </>
    );
};

export default OrderPage;