import MiniProgramShell from "@/components/mini-program-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Info, Calendar, AlertTriangle, FileText } from "lucide-react"
import Image from "next/image"

// 布局1：紧凑横向布局
export function CompactLayout() {
  return (
    <MiniProgramShell title="费用缴纳明细 - 紧凑布局">
      <div className="flex flex-col h-full bg-orange-50 dark:bg-gray-950">
        <div className="bg-white dark:bg-gray-900 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <div className="text-base font-medium text-gray-800 dark:text-white">违法仓库规定现场处罚</div>
            <Button variant="outline" size="sm" className="h-8 px-3 text-xs text-blue-600 dark:text-blue-400">
              规则说明
            </Button>
          </div>
        </div>

        <div className="flex-1 p-4">
          <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              {/* 状态栏 */}
              <div className="bg-orange-500 dark:bg-orange-600 text-white px-4 py-2 flex justify-between items-center">
                <span className="text-xs">单号：FEE2025052025270586626277394</span>
                <span className="text-sm font-medium">待缴费</span>
              </div>

              {/* 商品信息 - 横向紧凑 */}
              <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image src="/images/cherry-product.png" alt="智利车厘子" fill className="object-cover rounded-lg" />
                    <div className="absolute -top-1 -left-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded transform -rotate-12 font-bold">
                      强推
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-800 dark:text-white mb-1 line-clamp-2">
                      【补贴波板】智利桑提那车厘子2J5斤A级【纸箱】
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2 py-1 rounded text-xs">
                        计件
                      </span>
                      <span className="text-lg font-bold text-orange-500 dark:text-orange-400">¥100</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 详细信息 - 网格布局 */}
              <div className="p-4 grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">2025-05-28</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <span className="text-red-500 dark:text-red-400">申诉失败</span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-600 dark:text-gray-400">承担原因：</span>
                  <span className="text-gray-800 dark:text-white">商品质量问题导致客户投诉</span>
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-100 dark:border-gray-700">
                <div className="flex space-x-3">
                  <Button variant="outline" className="flex-1">
                    <Info className="w-4 h-4 mr-2" />
                    查看详情
                  </Button>
                  <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">立即缴费</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MiniProgramShell>
  )
}

// 布局2：垂直卡片布局
export function VerticalLayout() {
  return (
    <MiniProgramShell title="费用缴纳明细 - 垂直布局">
      <div className="flex flex-col h-full bg-orange-50 dark:bg-gray-950">
        <div className="bg-white dark:bg-gray-900 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <div className="text-base font-medium text-gray-800 dark:text-white">违法仓库规定现场处罚</div>
            <Button variant="outline" size="sm" className="h-8 px-3 text-xs text-blue-600 dark:text-blue-400">
              规则说明
            </Button>
          </div>
        </div>

        <div className="flex-1 p-4">
          <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              {/* 商品图片区域 */}
              <div className="relative h-32 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30">
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">待缴费</div>
                  <div className="bg-white/90 dark:bg-gray-800/90 px-2 py-1 rounded text-xs text-gray-600 dark:text-gray-400">
                    单号：FEE202505...
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="relative w-20 h-20">
                    <Image
                      src="/images/cherry-product.png"
                      alt="智利车厘子"
                      fill
                      className="object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute -top-1 -left-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded transform -rotate-12 font-bold">
                      强推
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">¥100</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">承担金额</div>
                  </div>
                </div>
              </div>

              {/* 商品信息 */}
              <div className="p-4">
                <div className="text-base font-medium text-gray-800 dark:text-white mb-3">
                  【补贴波板】智利桑提那车厘子2J5斤A级【纸箱】
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">创建日期</span>
                    <span className="text-gray-800 dark:text-white">2025-05-28</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">申诉结果</span>
                    <span className="text-red-500 dark:text-red-400">申诉失败</span>
                  </div>
                  <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">承担原因：</span>
                    <span className="text-gray-800 dark:text-white">商品质量问题导致客户投诉</span>
                  </div>
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-100 dark:border-gray-700">
                <div className="flex space-x-3">
                  <Button variant="outline" className="flex-1">
                    查看详情
                  </Button>
                  <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">立即缴费</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MiniProgramShell>
  )
}

// 布局3：列表式布局
export function ListLayout() {
  return (
    <MiniProgramShell title="费用缴纳明细 - 列表布局">
      <div className="flex flex-col h-full bg-orange-50 dark:bg-gray-950">
        <div className="bg-white dark:bg-gray-900 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <div className="text-base font-medium text-gray-800 dark:text-white">违法仓库规定现场处罚</div>
            <Button variant="outline" size="sm" className="h-8 px-3 text-xs text-blue-600 dark:text-blue-400">
              规则说明
            </Button>
          </div>
        </div>

        <div className="flex-1 p-4">
          <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              {/* 头部信息 */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm opacity-90">单号：FEE2025052025270586626277394</span>
                  <span className="bg-white/20 px-2 py-1 rounded text-sm">待缴费</span>
                </div>
                <div className="text-2xl font-bold">¥100</div>
                <div className="text-sm opacity-90">商家承担金额</div>
              </div>

              {/* 商品信息行 */}
              <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image src="/images/cherry-product.png" alt="智利车厘子" fill className="object-cover rounded-lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-800 dark:text-white line-clamp-1">
                      【补贴波板】智利桑提那车厘子2J5斤A级【纸箱】
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">计件商品</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* 详细信息列表 */}
              <div className="divide-y divide-gray-100 dark:divide-gray-700">
                <div className="px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">创建日期</span>
                  </div>
                  <span className="text-sm font-medium text-gray-800 dark:text-white">2025-05-28</span>
                </div>

                <div className="px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">申诉结果</span>
                  </div>
                  <span className="text-sm font-medium text-red-500 dark:text-red-400">申诉失败</span>
                </div>

                <div className="px-4 py-3">
                  <div className="flex items-start space-x-3">
                    <FileText className="w-4 h-4 text-gray-400 mt-0.5" />
                    <div className="flex-1">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">承担原因</div>
                      <div className="text-sm text-gray-800 dark:text-white">商品质量问题导致客户投诉</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50">
                <div className="flex space-x-3">
                  <Button variant="outline" className="flex-1">
                    查看详情
                  </Button>
                  <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">立即缴费</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MiniProgramShell>
  )
}

// 布局4：简化布局
export function MinimalLayout() {
  return (
    <MiniProgramShell title="费用缴纳明细 - 简化布局">
      <div className="flex flex-col h-full bg-orange-50 dark:bg-gray-950">
        <div className="bg-white dark:bg-gray-900 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <div className="text-base font-medium text-gray-800 dark:text-white">违法仓库规定现场处罚</div>
            <Button variant="outline" size="sm" className="h-8 px-3 text-xs text-blue-600 dark:text-blue-400">
              规则说明
            </Button>
          </div>
        </div>

        <div className="flex-1 p-4">
          <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-6">
              {/* 核心信息 */}
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-orange-500 dark:text-orange-400 mb-2">¥100</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm mb-4">商家承担金额</div>
                <div className="inline-flex items-center bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full text-sm">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  待缴费
                </div>
              </div>

              {/* 商品信息 */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image src="/images/cherry-product.png" alt="智利车厘子" fill className="object-cover rounded-lg" />
                    <div className="absolute -top-1 -left-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded transform -rotate-12 font-bold">
                      强推
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-800 dark:text-white mb-1">
                      【补贴波板】智利桑提那车厘子2J5斤A级【纸箱】
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">单号：FEE2025052025270586626277394</div>
                  </div>
                </div>
              </div>

              {/* 关键信息 */}
              <div className="space-y-2 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">创建时间</span>
                  <span className="text-gray-800 dark:text-white">2025-05-28</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">申诉状态</span>
                  <span className="text-red-500 dark:text-red-400">申诉失败</span>
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="space-y-3">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3">
                  立即缴费 ¥100
                </Button>
                <Button variant="outline" className="w-full">
                  查看详情
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MiniProgramShell>
  )
}

// 主组件 - 展示所有布局
export default function FeePaymentDetailLayouts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-8">
      <div className="flex flex-col items-center">
        <CompactLayout />
        <h3 className="mt-4 text-lg font-semibold">紧凑横向布局</h3>
        <p className="text-sm text-gray-600 text-center">信息密度高，适合快速浏览</p>
      </div>

      <div className="flex flex-col items-center">
        <VerticalLayout />
        <h3 className="mt-4 text-lg font-semibold">垂直卡片布局</h3>
        <p className="text-sm text-gray-600 text-center">视觉层次清晰，突出重点</p>
      </div>

      <div className="flex flex-col items-center">
        <ListLayout />
        <h3 className="mt-4 text-lg font-semibold">列表式布局</h3>
        <p className="text-sm text-gray-600 text-center">结构化展示，易于扫描</p>
      </div>

      <div className="flex flex-col items-center">
        <MinimalLayout />
        <h3 className="mt-4 text-lg font-semibold">简化布局</h3>
        <p className="text-sm text-gray-600 text-center">突出核心信息，操作简单</p>
      </div>
    </div>
  )
}
