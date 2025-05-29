"use client"

import MiniProgramShell from "@/components/mini-program-shell"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function FeeDetailsPage() {
  const [activeTab, setActiveTab] = useState("pending")

  const tabs = [
    { id: "appealable", label: "可申诉", amount: "¥0" },
    { id: "appealing", label: "申诉中", amount: "¥0" },
    { id: "pending", label: "待缴费", amount: "¥700" },
    { id: "all", label: "全部", amount: null },
  ]

  return (
    <MiniProgramShell title="费用明细">
      <div className="flex flex-col h-full bg-orange-50 dark:bg-gray-950">
        {/* 顶部操作栏 */}
        <div className="bg-orange-50 dark:bg-gray-900 px-4 py-3 flex items-center justify-between border-b border-orange-100 dark:border-gray-800">
          <div className="flex items-center">
            <span className="text-gray-800 dark:text-gray-200 font-medium mr-1">日期选择</span>
            <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </div>
          <div className="flex items-center">
            <span className="text-gray-800 dark:text-gray-200 font-medium mr-1">缴费记录</span>
            <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </div>
        </div>

        {/* 费用状态标签栏 */}
        <div className="bg-white dark:bg-gray-800 px-3 py-3 border-b border-gray-200 dark:border-gray-700">
          <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1 space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2 px-3 rounded-md text-center transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white dark:bg-gray-600 shadow-sm text-orange-500 dark:text-orange-400 font-medium"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                }`}
              >
                <div className="text-sm">{tab.label}</div>
                {tab.amount && (
                  <div
                    className={`text-sm font-bold mt-0.5 ${
                      activeTab === tab.id ? "text-orange-500 dark:text-orange-400" : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {tab.amount}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 费用列表 */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {activeTab === "pending" && (
            <>
              {Array.from({ length: 7 }, (_, index) => (
                <Card
                  key={index}
                  className="bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                >
                  <CardContent className="p-0">
                    {/* 顶部：标题和状态标签 */}
                    <div className="flex items-center justify-between p-4 pb-2">
                      <div className="text-base font-medium text-gray-800 dark:text-white flex-1">
                        违法仓库规定现场处罚
                      </div>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            index === 0
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                              : index === 1
                                ? "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                                : index === 2
                                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                  : index === 3
                                    ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                                    : index === 4
                                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                                      : index === 5
                                        ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
                                        : "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
                          }`}
                        >
                          {index === 0
                            ? "待缴费"
                            : index === 1
                              ? "已作废"
                              : index === 2
                                ? "已完成"
                                : index === 3
                                  ? "申诉中"
                                  : index === 4
                                    ? "已驳回"
                                    : index === 5
                                      ? "审核中"
                                      : "待缴费"}
                        </span>
                        <ChevronRight className="h-5 w-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                      </div>
                    </div>

                    {/* 中间：金额 */}
                    <div className="px-4 pb-3">
                      <div className="text-2xl font-bold text-orange-500 dark:text-orange-400">¥100</div>
                    </div>

                    {/* 底部：操作按钮 */}
                    <div className="flex border-t border-gray-100 dark:border-gray-700">
                      <button className="flex-1 py-3 text-center text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-r border-gray-100 dark:border-gray-700">
                        规则说明
                      </button>
                      <button className="flex-1 py-3 text-center text-sm text-orange-500 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors font-medium">
                        缴费
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </>
          )}

          {activeTab === "appealable" && (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="text-gray-400 dark:text-gray-500 text-base mb-2">暂无可申诉费用</div>
              <div className="text-gray-300 dark:text-gray-600 text-sm">当前没有可以申诉的费用项目</div>
            </div>
          )}

          {activeTab === "appealing" && (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="text-gray-400 dark:text-gray-500 text-base mb-2">暂无申诉中费用</div>
              <div className="text-gray-300 dark:text-gray-600 text-sm">当前没有正在申诉的费用项目</div>
            </div>
          )}

          {activeTab === "all" && (
            <>
              {Array.from({ length: 7 }, (_, index) => (
                <Card
                  key={index}
                  className="bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                >
                  <CardContent className="p-0">
                    {/* 顶部：标题和状态标签 */}
                    <div className="flex items-center justify-between p-4 pb-2">
                      <div className="text-base font-medium text-gray-800 dark:text-white flex-1">
                        违法仓库规定现场处罚
                      </div>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            index === 0
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                              : index === 1
                                ? "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                                : index === 2
                                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                  : index === 3
                                    ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                                    : index === 4
                                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                                      : index === 5
                                        ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
                                        : "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
                          }`}
                        >
                          {index === 0
                            ? "待缴费"
                            : index === 1
                              ? "已作废"
                              : index === 2
                                ? "已完成"
                                : index === 3
                                  ? "申诉中"
                                  : index === 4
                                    ? "已驳回"
                                    : index === 5
                                      ? "审核中"
                                      : "待缴费"}
                        </span>
                        <ChevronRight className="h-5 w-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                      </div>
                    </div>

                    {/* 中间：金额 */}
                    <div className="px-4 pb-3">
                      <div className="text-2xl font-bold text-orange-500 dark:text-orange-400">¥100</div>
                    </div>

                    {/* 底部：操作按钮 */}
                    <div className="flex border-t border-gray-100 dark:border-gray-700">
                      <button className="flex-1 py-3 text-center text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-r border-gray-100 dark:border-gray-700">
                        规则说明
                      </button>
                      <button className="flex-1 py-3 text-center text-sm text-orange-500 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors font-medium">
                        缴费
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </>
          )}
        </div>
      </div>
    </MiniProgramShell>
  )
}
