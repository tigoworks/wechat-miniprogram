import MiniProgramShell from "@/components/mini-program-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Clock, FileText, ImageIcon, Video } from "lucide-react"
import Image from "next/image"

export default function FeePaymentDetailInfoPage() {
  return (
    <MiniProgramShell title="费用缴纳详情">
      <div className="flex flex-col h-full bg-orange-50 dark:bg-gray-950">
        {/* 顶部状态栏 */}
        <div className="bg-white dark:bg-gray-900 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ChevronLeft className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
              <div className="text-base font-medium text-gray-800 dark:text-white">费用缴纳详情</div>
            </div>
            <div className="text-amber-600 dark:text-amber-400 font-medium text-sm">待缴费</div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-4">
            {/* 商品信息卡片 */}
            <Card className="bg-white dark:bg-gray-800 shadow-sm border-0 rounded-xl overflow-hidden">
              <CardContent className="p-4">
                <div className="flex space-x-4">
                  {/* 商品图片 */}
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image src="/images/cherry-product.png" alt="智利车厘子" fill className="object-cover rounded-lg" />
                    <div className="absolute -top-1 -left-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded transform -rotate-12 font-bold">
                      强推
                    </div>
                  </div>

                  {/* 商品基本信息 */}
                  <div className="flex-1 min-w-0">
                    <div className="text-base font-medium text-gray-800 dark:text-white mb-2 leading-tight">
                      【补贴波板】智利桑提那车厘子2J5斤A级【纸箱】
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-1 rounded text-xs font-medium">
                        计件
                      </div>
                      <div className="text-sm font-medium text-gray-600 dark:text-gray-400">货号：423352345221</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 费用单基本信息 */}
            <Card className="bg-white dark:bg-gray-800 shadow-sm border-0 rounded-xl overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-center mb-3">
                  <div className="w-1 h-5 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></div>
                  <h3 className="text-base font-medium text-gray-800 dark:text-white">费用单基本信息</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">承担方</span>
                    <span className="text-sm font-medium text-gray-800 dark:text-white">商家</span>
                  </div>

                  <div className="flex justify-between items-start py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">承担原因</span>
                    <span className="text-sm font-medium text-gray-800 dark:text-white text-right">
                      商品质量问题导致客户投诉
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">关联销售单</span>
                    <span className="text-sm font-medium text-blue-500 dark:text-blue-400">SO2025051216095700</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">关联退货申请单</span>
                    <span className="text-sm font-medium text-blue-500 dark:text-blue-400">RT2025051216095700</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">创建时间</span>
                    <span className="text-sm font-medium text-gray-800 dark:text-white">2025-05-12 16:09:57</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">通知时间</span>
                    <span className="text-sm font-medium text-gray-800 dark:text-white">2025-05-12 16:09:57</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">申诉截止时间</span>
                    <span className="text-sm font-medium text-amber-600 dark:text-amber-400">2025-05-14 11:08:00</span>
                  </div>

                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">承担金额</span>
                    <span className="text-lg font-bold text-orange-500 dark:text-orange-400">¥100</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 申诉信息 */}
            <Card className="bg-white dark:bg-gray-800 shadow-sm border-0 rounded-xl overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-center mb-3">
                  <div className="w-1 h-5 bg-amber-500 dark:bg-amber-400 rounded-full mr-2"></div>
                  <h3 className="text-base font-medium text-gray-800 dark:text-white">申诉信息</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-start py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">申诉原因</span>
                    <span className="text-sm font-medium text-gray-800 dark:text-white text-right">就不缴费</span>
                  </div>

                  <div className="py-2 border-b border-gray-100 dark:border-gray-700">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">申诉凭证</div>
                    <div className="flex flex-wrap gap-2">
                      <div className="relative w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-md flex items-center justify-center">
                        <ImageIcon className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                      </div>
                      <div className="relative w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-md flex items-center justify-center">
                        <Video className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">申诉时间</span>
                    <span className="text-sm font-medium text-gray-800 dark:text-white">2025-05-12 20:14:37</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">审批意见</span>
                    <span className="text-sm font-medium text-gray-400 dark:text-gray-500">暂无</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">审批人</span>
                    <span className="text-sm font-medium text-gray-400 dark:text-gray-500">暂无</span>
                  </div>

                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">审批时间</span>
                    <span className="text-sm font-medium text-gray-400 dark:text-gray-500">暂无</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 底部操作区 */}
        <div className="bg-white dark:bg-gray-900 p-4 border-t border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="flex space-x-3">
            <Button
              variant="outline"
              className="flex-1 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <FileText className="w-4 h-4 mr-2" />
              申诉记录
            </Button>
            <Button className="flex-1 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-medium">
              <Clock className="w-4 h-4 mr-2" />
              立即缴费
            </Button>
          </div>
        </div>
      </div>
    </MiniProgramShell>
  )
}
