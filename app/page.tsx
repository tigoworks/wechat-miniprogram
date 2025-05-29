"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import FruitStallPage from "@/components/fruit-stall-page"
import AccountPage from "@/components/account-page"
import FeeDetailsPage from "@/components/fee-details-page"
import FeePaymentDetailPage from "@/components/fee-payment-detail-page"
import FeePaymentDetailInfoPage from "@/components/fee-payment-detail-info-page"
import ProductManagementPage from "@/components/product-management-page"

// 页面配置
const pages = [
  { id: "fruit-stall", title: "南京精实水果档口", component: FruitStallPage },
  { id: "account", title: "我的账户", component: AccountPage },
  { id: "fee-details", title: "费用明细", component: FeeDetailsPage },
  { id: "fee-payment-detail", title: "费用缴纳明细", component: FeePaymentDetailPage },
  { id: "fee-payment-detail-info", title: "费用缴纳详情", component: FeePaymentDetailInfoPage },
  { id: "product-management", title: "商品管理", component: ProductManagementPage },
]

export default function Overview() {
  const [activeTab, setActiveTab] = useState(pages[0].id)

  // 处理锚点跳转
  const scrollToPage = (id: string) => {
    setActiveTab(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-colors duration-300">
      <div className="max-w-8xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">微信小程序页面预览</h1>
          <ThemeToggle />
        </div>

        {/* 导航栏 - 优化样式 */}
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md rounded-xl mb-8 p-2 transition-colors duration-300">
          <div className="flex overflow-x-auto p-2 scrollbar-hide space-x-2">
            {pages.map((page) => (
              <Button
                key={page.id}
                variant={activeTab === page.id ? "default" : "ghost"}
                className={`whitespace-nowrap transition-all duration-300 ${
                  activeTab === page.id
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105"
                    : "text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 dark:hover:text-orange-400"
                }`}
                onClick={() => scrollToPage(page.id)}
              >
                {page.title}
              </Button>
            ))}
          </div>
        </div>

        {/* 页面展示区 - 重新布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {pages.map((page) => {
            const PageComponent = page.component
            return (
              <div key={page.id} id={page.id} className="flex flex-col items-center">
                <Card className="shadow-2xl dark:shadow-gray-900/40 rounded-2xl overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] transform">
                  <PageComponent />
                </Card>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{page.title}</h3>
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
