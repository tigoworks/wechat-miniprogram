"use client"

import MiniProgramShell from "@/components/mini-program-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronRight, ExternalLink, Info } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function FeeDetailsPage() {
  const [activeStatus, setActiveStatus] = useState("all")

  // Mock data for all items
  const allItems = [
    {
      id: "FEE2025052025270586626277396",
      status: "可申诉",
      title: "违法仓库规定现场处罚",
      amount: 150,
      date: "2025-05-29",
      reason: "商品包装破损导致客户投诉",
      payStatus: ""
    },
    {
      id: "FEE2025052025270586626277397",
      status: "可申诉",
      title: "违法仓库规定现场处罚",
      amount: 200,
      date: "2025-05-28",
      reason: "商品数量不足导致客户投诉",
      payStatus: ""
    },
    {
      id: "FEE2025052025270586626277398",
      status: "申诉中",
      title: "违法仓库规定现场处罚",
      amount: 100,
      date: "2025-05-27",
      reason: "商品质量问题导致客户投诉",
      payStatus: ""
    },
    {
      id: "FEE2025052025270586626277399",
      status: "申诉中",
      title: "违法仓库规定现场处罚",
      amount: 300,
      date: "2025-05-26",
      reason: "商品包装破损导致客户投诉",
      payStatus: ""
    },
    {
      id: "FEE2025052025270586626277400",
      status: "待缴费",
      title: "违法仓库规定现场处罚",
      amount: 250,
      date: "2025-05-25",
      reason: "商品数量不足导致客户投诉",
      payStatus: ""
    },
    {
      id: "FEE2025052025270586626277401",
      status: "待缴费",
      title: "违法仓库规定现场处罚",
      amount: 180,
      date: "2025-05-24",
      reason: "商品质量问题导致客户投诉",
      payStatus: "缴费失败"
    },
    {
      id: "FEE2025052025270586626277402",
      status: "缴费中",
      title: "违法仓库规定现场处罚",
      amount: 120,
      date: "2025-05-23",
      reason: "商品包装破损导致客户投诉",
      payStatus: ""
    },
    {
      id: "FEE2025052025270586626277403",
      status: "缴费中",
      title: "违法仓库规定现场处罚",
      amount: 220,
      date: "2025-05-22",
      reason: "商品数量不足导致客户投诉",
      payStatus: ""
    }
  ]

  // Filter items based on status
  const appealableItems = allItems.filter(item => item.status === "可申诉")
  const appealingItems = allItems.filter(item => item.status === "申诉中")
  const pendingItems = allItems.filter(item => item.status === "待缴费")
  const payingItems = allItems.filter(item => item.status === "缴费中")

  // Calculate totals
  const appealableTotal = appealableItems.reduce((sum, item) => sum + item.amount, 0)
  const appealingTotal = appealingItems.reduce((sum, item) => sum + item.amount, 0)
  const pendingTotal = pendingItems.reduce((sum, item) => sum + item.amount, 0)
  const payingTotal = payingItems.reduce((sum, item) => sum + item.amount, 0)

  // Helper function to render status badge
  const renderStatusBadge = (status: string) => {
    const statusStyles = {
      "可申诉": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
      "申诉中": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
      "待缴费": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
      "缴费中": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
    }

    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status as keyof typeof statusStyles]}`}>
        {status}
      </span>
    )
  }

  // Helper function to render pay status text
  const renderPayStatusText = (payStatus: string) => {
    const payStatusStyles = {
      "缴费成功": "text-green-600 dark:text-green-400",
      "缴费失败": "text-red-600 dark:text-red-400",
      "缴费中": "text-purple-600 dark:text-purple-400"
    }

    if (!payStatus) return null

    return (
      <span className={`text-sm font-medium ${payStatusStyles[payStatus as keyof typeof payStatusStyles]}`}>
        {payStatus}
      </span>
    )
  }

  // Helper function to render card
  const renderCard = (item: typeof allItems[0]) => (
    <Card key={item.id} className="bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <CardContent className="p-0">
        {/* 顶部：标题和状态标签 */}
        <div className="flex items-center justify-between p-4 pb-2">
          <div className="text-base font-medium text-gray-800 dark:text-white flex-1">
            {item.title}
          </div>
          <div className="flex items-center space-x-2">
            {renderStatusBadge(item.status)}
            <ChevronRight className="h-5 w-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
          </div>
        </div>

        {/* 中间：金额和支付状态 */}
        <div className="px-4 pb-3 flex items-center justify-between">
          <div className="text-2xl font-bold text-orange-500 dark:text-orange-400">¥{item.amount}</div>
          {renderPayStatusText(item.payStatus)}
        </div>

        {/* 底部：操作按钮 */}
        <div className="flex border-t border-gray-100 dark:border-gray-700">
          <button className="flex-1 py-3 text-center text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-r border-gray-100 dark:border-gray-700">
            规则说明
          </button>
          <button className="flex-1 py-3 text-center text-sm text-orange-500 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors font-medium">
            {item.status === "待缴费" ? "缴费" : item.status === "可申诉" ? "去申诉" : "查看详情"}
          </button>
        </div>
      </CardContent>
    </Card>
  )

  // Helper function to render content based on active status
  const renderContent = () => {
    switch (activeStatus) {
      case "appealable":
        return appealableItems.map(renderCard)
      case "appealing":
        return appealingItems.map(renderCard)
      case "pending":
        return pendingItems.map(renderCard)
      case "paying":
        return payingItems.map(renderCard)
      case "all":
        return allItems.map(renderCard)
      default:
        return allItems.map(renderCard)
    }
  }

  return (
    <MiniProgramShell title="费用明细">
      <div className="flex flex-col h-full bg-orange-50 dark:bg-gray-950">
        {/* 支付状态汇总 */}
        <div className="bg-white dark:bg-gray-800 px-3 py-3 border-b border-gray-200 dark:border-gray-700">
          <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1 space-x-1">
            <div 
              className={`flex-1 text-center py-2 px-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out ${activeStatus === 'appealable' ? 'bg-white dark:bg-gray-600' : 'hover:bg-white dark:hover:bg-gray-600'}`}
              onClick={() => setActiveStatus('appealable')}
            >
              <div className="text-sm text-gray-600 dark:text-gray-400">可申诉</div>
              <div className="text-base font-medium text-gray-900 dark:text-white">¥{appealableTotal}</div>
            </div>
            <div 
              className={`flex-1 text-center py-2 px-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out ${activeStatus === 'appealing' ? 'bg-white dark:bg-gray-600' : 'hover:bg-white dark:hover:bg-gray-600'}`}
              onClick={() => setActiveStatus('appealing')}
            >
              <div className="text-sm text-gray-600 dark:text-gray-400">申诉中</div>
              <div className="text-base font-medium text-gray-900 dark:text-white">¥{appealingTotal}</div>
            </div>
            <div 
              className={`flex-1 text-center py-2 px-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out ${activeStatus === 'pending' ? 'bg-white dark:bg-gray-600' : 'hover:bg-white dark:hover:bg-gray-600'}`}
              onClick={() => setActiveStatus('pending')}
            >
              <div className="text-sm text-gray-600 dark:text-gray-400">待缴费</div>
              <div className="text-base font-medium text-gray-900 dark:text-white">¥{pendingTotal}</div>
            </div>
            <div 
              className={`flex-1 text-center py-2 px-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out ${activeStatus === 'paying' ? 'bg-white dark:bg-gray-600' : 'hover:bg-white dark:hover:bg-gray-600'}`}
              onClick={() => setActiveStatus('paying')}
            >
              <div className="text-sm text-gray-600 dark:text-gray-400">缴费中</div>
              <div className="text-base font-medium text-gray-900 dark:text-white">¥{payingTotal}</div>
            </div>
            <div 
              className={`flex-1 text-center py-2 px-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out ${activeStatus === 'all' ? 'bg-white dark:bg-gray-600' : 'hover:bg-white dark:hover:bg-gray-600'}`}
              onClick={() => setActiveStatus('all')}
            >
              <div className="text-sm text-gray-600 dark:text-gray-400">全部</div>
              <div className="text-base font-medium text-gray-900 dark:text-white">¥{allItems.reduce((sum, item) => sum + item.amount, 0)}</div>
            </div>
          </div>
        </div>

        {/* 内容区域 */}
        <div className="relative overflow-hidden">
          <div className="p-4 space-y-4">
            {renderContent()}
          </div>
        </div>
      </div>
    </MiniProgramShell>
  )
}
