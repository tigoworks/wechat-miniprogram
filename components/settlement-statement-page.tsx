"use client"

import MiniProgramShell from "@/components/mini-program-shell"

export default function SettlementStatementPage() {
  const transactions = [
    { title: "订单尾款-少补", id: "TPP25052610233159980", amount: "¥21.07", type: "positive" },
    { title: "订单尾款-多退", id: "TPP25052610350659981", amount: "-¥128.03", type: "negative" },
    { title: "订单尾款-少补", id: "TPP25052610440159985", amount: "¥1.7", type: "positive" },
    { title: "订单尾款-少补", id: "TPP25052610455659989", amount: "¥4.36", type: "positive" },
    { title: "订单尾款-少补", id: "TPP25052610481959990", amount: "¥0.4", type: "positive" },
    { title: "订单尾款-少补", id: "TPP25052611003259994", amount: "¥9.24", type: "positive" },
    { title: "订单尾款-少补", id: "TPP25052611233360012", amount: "¥14.97", type: "positive" },
    { title: "订单尾款-少补", id: "TPP25052611375260017", amount: "¥7.29", type: "positive" },
    { title: "订单尾款-少补", id: "TPP25052611475060021", amount: "¥333.96", type: "positive" },
    { title: "订单尾款-多退", id: "TPP25052612120460030", amount: "-¥59.2", type: "negative" },
    { title: "订单尾款-少补", id: "TPP25052612161860032", amount: "¥17.54", type: "positive" },
  ]

  return (
    <MiniProgramShell title="已结算对账单">
      <div className="p-4">
        {/* Header Summary Info */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 mb-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-base">结算日期：</span>
              <span className="text-gray-900 font-semibold text-lg">2025.05.29</span>
            </div>
            <div className="border-t border-blue-200 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-base">多退少补：</span>
                <span className="text-red-600 font-bold text-2xl">-¥2018.3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction List */}
        <div className="space-y-3">
          {transactions.map((transaction, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-gray-900 font-medium text-base mb-1">{transaction.title}</h3>
                  <p className="text-gray-500 text-sm font-mono">{transaction.id}</p>
                </div>
                <div className="ml-4">
                  <span
                    className={`font-semibold text-lg ${
                      transaction.type === "negative" ? "text-red-600" : "text-gray-900"
                    }`}
                  >
                    {transaction.amount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MiniProgramShell>
  )
} 