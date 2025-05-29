"use client"

import MiniProgramShell from "@/components/mini-program-shell"
import { Button } from "@/components/ui/button"

export default function PaymentRecordsPage() {
  const records = [
    {
      title: "平台垫付回款缴费",
      amount: "¥4321.23",
      date: "2024.12.26 18:32:09",
    },
    {
      title: "缺货补偿费用",
      amount: "¥10000",
      date: "2024.12.26 18:32:09",
    },
    {
      title: "商品到仓超时罚款",
      amount: "¥10000",
      date: "2024.12.26 18:32:09",
    },
    {
      title: "缺货补偿费用",
      amount: "¥10000",
      date: "2024.12.26 18:32:09",
    },
    {
      title: "缺货补偿费用",
      amount: "¥10000",
      date: "2024.12.26 18:32:09",
    },
  ]

  return (
    <MiniProgramShell title="缴费记录">
      <div className="p-4 space-y-5">
        {records.map((record, index) => (
          <div key={index} className="relative bg-white rounded-xl overflow-hidden">
            {/* Left accent border */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-300"></div>

            <div className="pl-4 pr-5 py-4">
              {/* Top row: Title and Amount */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-gray-900 font-medium text-base">{record.title}</h3>
                <p className="text-gray-900 font-bold text-xl">{record.amount}</p>
              </div>

              {/* Bottom row: Date and Button */}
              <div className="flex items-center justify-between">
                <p className="text-gray-500 text-xs">{record.date}</p>
                <Button
                  variant="link"
                  size="sm"
                  className="text-orange-500 hover:text-orange-700 p-0 h-auto text-sm font-medium"
                >
                  缴费明细
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MiniProgramShell>
  )
} 