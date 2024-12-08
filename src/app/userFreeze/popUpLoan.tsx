"use client"; // Add this directive at the top
import React, { useState } from "react";
import { LoadDPDData } from "./data/loanDPDData"
import { UserFreeze } from "./userFreezeView";
type LoanDPD = {
    loan_number: string,
    name: string,
    user_id: number,
    upload_date: string,
    disbursed_date: string,
    late_fee_amount: number,
    late_fee_pay: number,
    late_fee_unpay: number,
    period: string
}
type PopUpLoanType = {
    user: UserFreeze,
    onClose: () => void
}
const PopUpLoan = ({ user, onClose }: PopUpLoanType) => {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10;
    const dataDPDUser: LoanDPD[] = LoadDPDData.filter(v => v.user_id === user.user_id);

    const totalPages = Math.ceil(dataDPDUser.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = dataDPDUser.slice(indexOfFirstItem, indexOfLastItem);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    }
    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }
    return (
        <div className="flex flex-col max-h-[80%] p-6 bg-white text-black">
            <div className="flex justify-between">
                <h1 className="text-xl font-bold mb-4">Loan DPD List</h1>
                <button onClick={onClose}>Close</button>
            </div>

            {/* Wrapper for Table and Pagination */}
            <div className="flex flex-col flex-grow border border-gray-300 rounded">
                {/* Table Container */}
                <div className="flex-grow overflow-auto">
                    <table className="min-w-full border border-gray-300">
                        <thead className="bg-gray-100 sticky top-0 z-10">
                            <tr>
                                <th className="text-left px-4 py-2 border">No</th>
                                <th className="text-left px-4 py-2 border">Loan Number</th>
                                <th className="text-left px-4 py-2 border">Uploaded Date</th>
                                <th className="text-left px-4 py-2 border">Disbursed Date</th>
                                <th className="text-left px-4 py-2 border">Late Fee</th>
                                <th className="text-left px-4 py-2 border">Late Fee Pay</th>
                                <th className="text-left px-4 py-2 border">Late Fee Unpay</th>
                                <th className="text-left px-4 py-2 border">Period</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50 cursor-pointer">
                                    <td className="px-4 py-2 border">{index + 1}</td>
                                    <td className="px-4 py-2 border">{item.loan_number}</td>
                                    <td className="px-4 py-2 border">{item.upload_date}</td>
                                    <td className="px-4 py-2 border">{item.disbursed_date}</td>
                                    <td className="px-4 py-2 border">{item.late_fee_amount}</td>
                                    <td className="px-4 py-2 border">{item.late_fee_pay}</td>
                                    <td className="px-4 py-2 border">{item.late_fee_unpay}</td>
                                    <td className="px-4 py-2 border">{item.period}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Section */}
                <div className="flex justify-between items-center p-4 bg-gray-100 border-t">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200 rounded"
                    >
                        Previous
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200 rounded"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>

    )
}
export default PopUpLoan