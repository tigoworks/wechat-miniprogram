import MiniProgramShell from "@/components/mini-program-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ExternalLink, Info } from "lucide-react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function FeePaymentDetailPage() {
  const [activeStatus, setActiveStatus] = useState("all")

  // Mock data for appealable items
  const appealableItems = [
    {
      id: "FEE2025052025270586626277396",
      status: "可申诉",
      product: {
        name: "【补贴波板】智利桑提那车厘子2J5斤A级【纸箱】",
        image: "/images/cherry-product.png",
        type: "计件"
      },
      date: "2025-05-29",
      reason: "商品包装破损导致客户投诉",
      amount: 150
    },
    {
      id: "FEE2025052025270586626277397",
      status: "可申诉",
      product: {
        name: "【补贴波板】智利桑提那车厘子2J5斤A级【纸箱】",
        image: "/images/cherry-product.png",
        type: "计件"
      },
      date: "2025-05-29",
      reason: "商品数量不足导致客户投诉",
      amount: 200
    }
  ]

  // Calculate total amount for appealable items
  const appealableTotal = appealableItems.reduce((sum, item) => sum + item.amount, 0)

  return (
    <MiniProgramShell title="费用缴纳">
      <div className="flex flex-col h-full bg-orange-50 dark:bg-gray-950">
        {/* 顶部信息栏 */}
        <div className="bg-white dark:bg-gray-900 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <div className="text-base font-medium text-gray-800 dark:text-white">违法仓库规定现场处罚</div>
            <Button
              variant="outline"
              size="sm"
              className="h-8 px-3 text-xs text-blue-600 dark:text-blue-400 border-blue-300 dark:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              规则说明
            </Button>
          </div>
        </div>

        {/* 标签页 */}
        <Tabs defaultValue="all" className="flex-1">

          <TabsContent value="all" className="mt-0">
            <div className="p-4 space-y-4">
              {/* 费用卡片 */}
              <Card className="bg-white dark:bg-gray-800 shadow-sm border-0 rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  {/* 状态标识栏 */}
                  <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 text-sm font-medium flex justify-between items-center">
                    <span className="text-sm opacity-90 truncate max-w-[70%]">单号：FEE2025052025270586626277394</span>
                    <span className="text-amber-600 dark:text-amber-400 font-medium">待缴费</span>
                  </div>

                  <div className="p-2 bg-gray-50 dark:bg-gray-800/50">
                    {/* 商品信息区域 - 添加可点击提示 */}
                    <div className="flex space-x-4 mb-3 relative group cursor-pointer">
                      {/* 商品图片 */}
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image src="/images/cherry-product.png" alt="智利车厘子" fill className="object-cover rounded-lg" />
                        {/* 查看详情悬浮提示 */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <ExternalLink className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* 商品基本信息 */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center">
                          <div className="text-base font-medium text-gray-800 dark:text-white mb-1 leading-tight">
                            【补贴波板】智利桑提那车厘子2J5斤A级【纸箱】
                          </div>
                        </div>
                        <div className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded text-xs font-medium">
                          计件
                        </div>
                      </div>
                    </div>

                    {/* 详细信息区域 */}
                    <div className="space-y-2 mb-1">
                      {/* 创建日期 */}
                      <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-400">创建日期</span>
                        <span className="text-sm font-medium text-gray-800 dark:text-white">2025-05-28</span>
                      </div>

                      {/* 承担原因 */}
                      <div className="flex items-start justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-400 flex-shrink-0">承担原因</span>
                        <span className="text-sm font-medium text-gray-800 dark:text-white text-right ml-4">
                          商品质量问题导致客户投诉
                        </span>
                      </div>

                      {/* 申诉结果 */}
                      <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-400">申诉结果</span>
                        <span className="text-sm font-medium text-red-500 dark:text-red-400">申诉失败</span>
                      </div>

                      {/* 商家承担金额 */}
                      <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-400">商家承担金额</span>
                        <span className="text-lg font-bold text-orange-500 dark:text-orange-400">¥100</span>
                      </div>
                    </div>
                  </div>

                  {/* 底部按钮区域 - 添加查看详情按钮 */}
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex space-x-3">
                      <Button
                        variant="outline"
                        className="flex-1 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Info className="w-4 h-4 mr-2" />
                        查看详情
                      </Button>
                      <Button className="flex-1 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-medium">
                        立即缴费
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 第二个费用卡片 */}
              <Card className="bg-white dark:bg-gray-800 shadow-sm border-0 rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  {/* 状态标识栏 */}
                  <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 text-sm font-medium flex justify-between items-center">
                    <span className="text-sm opacity-90 truncate max-w-[70%]">单号：FEE2025052025270586626277395</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">待缴费</span>
                  </div>

                  <div className="p-2 bg-gray-50 dark:bg-gray-800/50">
                    {/* 商品信息区域 */}
                    <div className="flex space-x-4 mb-3 relative group cursor-pointer">
                      {/* 商品图片 */}
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image src="/images/cherry-product.png" alt="智利车厘子" fill className="object-cover rounded-lg" />
                        {/* 查看详情悬浮提示 */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <ExternalLink className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* 商品基本信息 */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center">
                          <div className="text-base font-medium text-gray-800 dark:text-white mb-1 leading-tight">
                            【补贴波板】智利桑提那车厘子2J5斤A级【纸箱】
                          </div>
                        </div>
                        <div className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded text-xs font-medium">
                          计件
                        </div>
                      </div>
                    </div>

                    {/* 详细信息区域 */}
                    <div className="space-y-2 mb-1">
                      {/* 创建日期 */}
                      <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-400">创建日期</span>
                        <span className="text-sm font-medium text-gray-800 dark:text-white">2025-05-27</span>
                      </div>

                      {/* 承担原因 */}
                      <div className="flex items-start justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-400 flex-shrink-0">承担原因</span>
                        <span className="text-sm font-medium text-gray-800 dark:text-white text-right ml-4">
                          商品质量问题导致客户投诉
                        </span>
                      </div>

                      {/* 申诉结果 */}
                      <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-400">申诉结果</span>
                        <span className="text-sm font-medium text-red-500 dark:text-red-400">申诉失败</span>
                      </div>

                      {/* 商家承担金额 */}
                      <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-400">商家承担金额</span>
                        <span className="text-lg font-bold text-orange-500 dark:text-orange-400">¥200</span>
                      </div>
                    </div>
                  </div>

                  {/* 底部按钮区域 */}
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex space-x-3">
                      <Button
                        variant="outline"
                        className="flex-1 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Info className="w-4 h-4 mr-2" />
                        查看详情
                      </Button>
                      <Button className="flex-1 bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 text-white font-medium" disabled>
                        已缴费
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="pending" className="mt-0">
            <div className="p-4 space-y-4">
              {/* 待缴费卡片 */}
              <Card className="bg-white dark:bg-gray-800 shadow-sm border-0 rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  {/* 状态标识栏 */}
                  <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 text-sm font-medium flex justify-between items-center">
                    <span className="text-sm opacity-90 truncate max-w-[70%]">单号：FEE2025052025270586626277394</span>
                    <span className="text-amber-600 dark:text-amber-400 font-medium">待缴费</span>
                  </div>

                  <div className="p-2 bg-gray-50 dark:bg-gray-800/50">
                    {/* 商品信息区域 */}
                    <div className="flex space-x-4 mb-3 relative group cursor-pointer">
                      {/* 商品图片 */}
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image src="/images/cherry-product.png" alt="智利车厘子" fill className="object-cover rounded-lg" />
                        {/* 查看详情悬浮提示 */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <ExternalLink className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* 商品基本信息 */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center">
                          <div className="text-base font-medium text-gray-800 dark:text-white mb-1 leading-tight">
                            【补贴波板】智利桑提那车厘子2J5斤A级【纸箱】
                          </div>
                        </div>
                        <div className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded text-xs font-medium">
                          计件
                        </div>
                      </div>
                    </div>

                    {/* 详细信息区域 */}
                    <div className="space-y-2 mb-1">
                      {/* 创建日期 */}
                      <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-400">创建日期</span>
                        <span className="text-sm font-medium text-gray-800 dark:text-white">2025-05-28</span>
                      </div>

                      {/* 承担原因 */}
                      <div className="flex items-start justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-400 flex-shrink-0">承担原因</span>
                        <span className="text-sm font-medium text-gray-800 dark:text-white text-right ml-4">
                          商品质量问题导致客户投诉
                        </span>
                      </div>

                      {/* 申诉结果 */}
                      <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-400">申诉结果</span>
                        <span className="text-sm font-medium text-red-500 dark:text-red-400">申诉失败</span>
                      </div>

                      {/* 商家承担金额 */}
                      <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-400">商家承担金额</span>
                        <span className="text-lg font-bold text-orange-500 dark:text-orange-400">¥100</span>
                      </div>
                    </div>
                  </div>

                  {/* 底部按钮区域 */}
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex space-x-3">
                      <Button
                        variant="outline"
                        className="flex-1 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Info className="w-4 h-4 mr-2" />
                        查看详情
                      </Button>
                      <Button className="flex-1 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-medium">
                        立即缴费
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="paid" className="mt-0">
            <div className="p-4 space-y-4">
              {/* 已缴费卡片 */}
              <Card className="bg-white dark:bg-gray-800 shadow-sm border-0 rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  {/* 状态标识栏 */}
                  <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 text-sm font-medium flex justify-between items-center">
                    <span className="text-sm opacity-90 truncate max-w-[70%]">单号：FEE2025052025270586626277395</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">已缴费</span>
                  </div>

                  <div className="p-2 bg-gray-50 dark:bg-gray-800/50">
                    {/* 商品信息区域 */}
                    <div className="flex space-x-4 mb-3 relative group cursor-pointer">
                      {/* 商品图片 */}
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image src="/images/cherry-product.png" alt="智利车厘子" fill className="object-cover rounded-lg" />
                        {/* 查看详情悬浮提示 */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <ExternalLink className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* 商品基本信息 */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center">
                          <div className="text-base font-medium text-gray-800 dark:text-white mb-1 leading-tight">
                            【补贴波板】智利桑提那车厘子2J5斤A级【纸箱】
                          </div>
                        </div>
                        <div className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded text-xs font-medium">
                          计件
                        </div>
                      </div>
                    </div>

                    {/* 详细信息区域 */}
                    <div className="space-y-2 mb-1">
                      {/* 创建日期 */}
                      <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-400">创建日期</span>
                        <span className="text-sm font-medium text-gray-800 dark:text-white">2025-05-27</span>
                      </div>

                      {/* 承担原因 */}
                      <div className="flex items-start justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-400 flex-shrink-0">承担原因</span>
                        <span className="text-sm font-medium text-gray-800 dark:text-white text-right ml-4">
                          商品质量问题导致客户投诉
                        </span>
                      </div>

                      {/* 申诉结果 */}
                      <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-400">申诉结果</span>
                        <span className="text-sm font-medium text-red-500 dark:text-red-400">申诉失败</span>
                      </div>

                      {/* 商家承担金额 */}
                      <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-400">商家承担金额</span>
                        <span className="text-lg font-bold text-orange-500 dark:text-orange-400">¥200</span>
                      </div>
                    </div>
                  </div>

                  {/* 底部按钮区域 */}
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex space-x-3">
                      <Button
                        variant="outline"
                        className="flex-1 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Info className="w-4 h-4 mr-2" />
                        查看详情
                      </Button>
                      <Button className="flex-1 bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 text-white font-medium" disabled>
                        已缴费
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="appealable" className="mt-0">
            <div className="p-4 space-y-4">
              {appealableItems.map((item) => (
                <Card key={item.id} className="bg-white dark:bg-gray-800 shadow-sm border-0 rounded-xl overflow-hidden">
                  <CardContent className="p-0">
                    {/* 状态标识栏 */}
                    <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 text-sm font-medium flex justify-between items-center">
                      <span className="text-sm opacity-90 truncate max-w-[70%]">单号：{item.id}</span>
                      <span className="text-blue-600 dark:text-blue-400 font-medium">{item.status}</span>
                    </div>

                    <div className="p-2 bg-gray-50 dark:bg-gray-800/50">
                      {/* 商品信息区域 */}
                      <div className="flex space-x-4 mb-3 relative group cursor-pointer">
                        {/* 商品图片 */}
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image src={item.product.image} alt={item.product.name} fill className="object-cover rounded-lg" />
                          {/* 查看详情悬浮提示 */}
                          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <ExternalLink className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* 商品基本信息 */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center">
                            <div className="text-base font-medium text-gray-800 dark:text-white mb-1 leading-tight">
                              {item.product.name}
                            </div>
                          </div>
                          <div className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded text-xs font-medium">
                            {item.product.type}
                          </div>
                        </div>
                      </div>

                      {/* 详细信息区域 */}
                      <div className="space-y-2 mb-1">
                        {/* 创建日期 */}
                        <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                          <span className="text-sm text-gray-600 dark:text-gray-400">创建日期</span>
                          <span className="text-sm font-medium text-gray-800 dark:text-white">{item.date}</span>
                        </div>

                        {/* 承担原因 */}
                        <div className="flex items-start justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                          <span className="text-sm text-gray-600 dark:text-gray-400 flex-shrink-0">承担原因</span>
                          <span className="text-sm font-medium text-gray-800 dark:text-white text-right ml-4">
                            {item.reason}
                          </span>
                        </div>

                        {/* 商家承担金额 */}
                        <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                          <span className="text-sm text-gray-600 dark:text-gray-400">商家承担金额</span>
                          <span className="text-lg font-bold text-orange-500 dark:text-orange-400">¥{item.amount}</span>
                        </div>
                      </div>
                    </div>

                    {/* 底部按钮区域 */}
                    <div className="p-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex space-x-3">
                        <Button
                          variant="outline"
                          className="flex-1 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <Info className="w-4 h-4 mr-2" />
                          查看详情
                        </Button>
                        <Button className="flex-1 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium">
                          去申诉
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MiniProgramShell>
  )
}
