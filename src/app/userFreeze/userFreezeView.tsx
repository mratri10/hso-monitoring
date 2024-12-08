"use client"; // Add this directive at the top
import React from "react";
import { ParentUserData } from "./data/parentUserData";

export type UserFreeze = {
    loan_dpd: number;
    parent_user_id: number;
    name: string;
    updated_at: string;
    sum_money: number;
    limit_money: number;
    mobile: string;
    user_id: number;
};
type ParentUser = {
    user_id: number,
    partner: string,
    mobile: string,
    email: string,
    partner_user_no: string
}
type UserFreezeType = {
    data: UserFreeze[],
    onUser: (data: UserFreeze) => void
}
const UserFreezeView: React.FC<UserFreezeType> = ({ data, onUser }) => {
    const parent = (dataFreeze: UserFreeze): ParentUser | undefined => {
        return ParentUserData.find(v => v.user_id === dataFreeze.parent_user_id) as ParentUser
    }
    const formatRupiah = (amount: number): string => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0
        }).format(amount)
    }
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">Freeze User List</h1>
            <div className="overflow-x-auto text-black">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="text-left px-4 py-2 border">Total Loan DPD</th>
                            <th className="text-left px-4 py-2 border">Name</th>
                            <th className="text-left px-4 py-2 border">Mobile</th>
                            <th className="text-left px-4 py-2 border">Parent</th>
                            <th className="text-left px-4 py-2 border">Last Updated</th>
                            <th className="text-left px-4 py-2 border">Sum Money</th>
                            <th className="text-left px-4 py-2 border">Limit Money</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50 ">
                                <td className="px-4 py-2 border cursor-pointer" onClick={() => onUser(item)}>{item.loan_dpd}</td>
                                <td className="px-4 py-2 border">{item.name}</td>
                                <td className="px-4 py-2 border">{item.mobile}</td>
                                <td className="px-4 py-2 border">{parent(item)?.partner_user_no}</td>
                                <td className="px-4 py-2 border">{item.updated_at}</td>
                                <td className="px-4 py-2 border text-right">{formatRupiah(item.sum_money)}</td>
                                <td className="px-4 py-2 border text-right">{formatRupiah(item.limit_money)}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default UserFreezeView;