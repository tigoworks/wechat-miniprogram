"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import FruitStallPage from "@/components/fruit-stall-page"
import AccountPage from "@/components/account-page"
import FeeDetailsPage from "@/components/fee-details-page"
import FeePaymentDetailPage from "@/components/fee-payment-detail-page"
import FeePaymentDetailInfoPage from "@/components/fee-payment-detail-info-page"
import ProductManagementPage from "@/components/product-management-page"
import PaymentRecordsPage from "@/components/payment-records-page"
import SettlementStatementPage from "@/components/settlement-statement-page"
import { Smartphone, Monitor } from "lucide-react"

// 页面配置
const pages = [
  { id: "fruit-stall", title: "南京精实水果档口", component: FruitStallPage },
  { id: "account", title: "我的账户", component: AccountPage },
  { id: "fee-details", title: "费用明细", component: FeeDetailsPage },
  { id: "fee-payment-detail", title: "费用缴纳明细", component: FeePaymentDetailPage },
  { id: "fee-payment-detail-info", title: "费用缴纳详情", component: FeePaymentDetailInfoPage },
  { id: "product-management", title: "商品管理", component: ProductManagementPage },
  { id: "payment-records", title: "缴费记录", component: PaymentRecordsPage },
  { id: "settlement-statement", title: "已结算对账单", component: SettlementStatementPage },
]

export default function Overview() {
  const [activeTab, setActiveTab] = useState("fruit-stall")
  const [viewMode, setViewMode] = useState<"mobile" | "desktop">("mobile")

  // 处理锚点跳转
  const scrollToPage = (id: string) => {
    setActiveTab(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const ActivePage = pages.find((page) => page.id === activeTab)?.component

  return (
    <div className="min-h-screen bg-gray-50 p-6 transition-colors duration-300">
      <div className="max-w-8xl mx-auto">
        <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 pt-4">
            <div className="flex space-x-4 pb-2">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => scrollToPage(page.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === page.id
                      ? "bg-orange-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {page.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 页面展示区 - 重新布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mt-8">
          {pages.map((page) => {
            const PageComponent = page.component
            return (
              <div key={page.id} id={page.id} className="flex flex-col items-center">
                <Card className="shadow-2xl rounded-2xl overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] transform">
                  {viewMode === "mobile" ? <PageComponent /> : <div className="text-gray-500 text-center py-12">PC端页面开发中...</div>}
                </Card>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{page.title}</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mx-auto"></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
