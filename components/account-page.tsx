import MiniProgramShell from "@/components/mini-program-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, ChevronRight, Eye, Shield } from "lucide-react"

export default function AccountPage() {
  return (
    <MiniProgramShell title="我的账户">
      <div className="flex flex-col h-full">
        {/* 账户总览 - 优化布局和视觉层次 */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 p-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <span className="text-base">总金额(元)</span>
              <Eye className="ml-2 h-4 w-4 opacity-80" />
            </div>
            <div className="flex items-center bg-white/20 dark:bg-white/10 px-2 py-1 rounded-full">
              <Shield className="h-3 w-3 mr-1 opacity-80" />
              <span className="text-xs opacity-80">安全保障中</span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="text-4xl font-bold">39033303.29</div>
            <Button className="bg-white text-orange-500 hover:bg-gray-100 dark:bg-gray-800 dark:text-orange-400 dark:hover:bg-gray-700 rounded-full px-5 py-1 h-8 text-sm">
              提现
            </Button>
          </div>

          <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border-0">
            <CardContent className="p-0">
              <div className="grid grid-cols-3 divide-x divide-gray-100 dark:divide-gray-700">
                <div className="flex flex-col items-center py-3">
                  <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">可提现(元)</span>
                  <span className="text-black dark:text-white font-bold text-base">38993447.15</span>
                </div>
                <div className="flex flex-col items-center py-3">
                  <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">未结算(元)</span>
                  <span className="text-black dark:text-white font-bold text-base">39856.14</span>
                </div>
                <div className="flex flex-col items-center py-3">
                  <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">保证金(元)</span>
                  <span className="text-black dark:text-white font-bold text-base">0</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex mt-4 border-t border-orange-400/30 dark:border-orange-600/30 pt-3">
            <div className="flex-1 flex items-center justify-center">
              <span className="text-sm">提现规则</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 opacity-80"
              >
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                <path d="M12 8V12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="16" r="1" fill="white" />
              </svg>
            </div>
            <div className="w-[1px] bg-orange-400/30 dark:bg-orange-600/30 mx-4"></div>
            <div className="flex-1 flex items-center justify-center">
              <span className="text-sm">提现记录</span>
            </div>
          </div>
        </div>

        {/* 交易记录 - 优化标签页和列表样式 */}
        <div className="flex-1 bg-gray-100 dark:bg-gray-950">
          <Tabs defaultValue="unsettled" className="w-full">
            <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between px-3 h-12">
                <TabsList className="bg-transparent p-0 h-auto">
                  <TabsTrigger
                    value="withdrawable"
                    className="px-3 py-2 h-8 data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-orange-500 dark:data-[state=active]:border-orange-400 rounded-none text-gray-600 dark:text-gray-400 data-[state=active]:text-orange-500 dark:data-[state=active]:text-orange-400"
                  >
                    可提现
                  </TabsTrigger>
                  <TabsTrigger
                    value="unsettled"
                    className="px-3 py-2 h-8 data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-orange-500 dark:data-[state=active]:border-orange-400 rounded-none text-gray-600 dark:text-gray-400 data-[state=active]:text-orange-500 dark:data-[state=active]:text-orange-400"
                  >
                    未结算
                  </TabsTrigger>
                </TabsList>

                <Button
                  variant="outline"
                  size="sm"
                  className="text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 h-8 px-3"
                >
                  请选择日期 <ChevronDown className="h-3 w-3 ml-1 opacity-60" />
                </Button>
              </div>
            </div>

            <TabsContent value="withdrawable" className="mt-0">
              {/* 可提现内容为空，因为日期选择已经移到上方 */}
            </TabsContent>

            <TabsContent value="unsettled" className="mt-0">
              {/* 日期选择已经移到上方，这里直接显示交易记录 */}

              {/* 交易记录列表 - 优化视觉层次和间距 */}
              <div className="space-y-3 mt-2">
                {/* 5月23日记录 */}
                <div className="bg-white dark:bg-gray-900 shadow-sm">
                  <div className="bg-orange-50 dark:bg-gray-800 px-4 py-2.5 flex justify-between items-center">
                    <div className="text-gray-700 dark:text-gray-300 text-sm">收入/赠付日期: 2025.05.23</div>
                    <div className="text-orange-500 dark:text-orange-400 font-medium text-sm">收入总额: ¥61437.47</div>
                  </div>

                  <div className="border-b border-gray-100 dark:border-gray-800">
                    <div className="flex justify-between items-center px-4 py-3">
                      <div className="text-gray-700 dark:text-gray-300">供货收入</div>
                      <div className="flex items-center">
                        <span className="text-orange-500 dark:text-orange-400 font-medium mr-2">¥63699.85</span>
                        <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-100 dark:border-gray-800">
                    <div className="flex justify-between items-center px-4 py-3">
                      <div className="text-gray-700 dark:text-gray-300">售后赠付</div>
                      <div className="flex items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium mr-2">-¥2415.71</span>
                        <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center px-4 py-3">
                      <div className="text-gray-700 dark:text-gray-300">订单尾款</div>
                      <div className="flex items-center">
                        <span className="text-orange-500 dark:text-orange-400 font-medium mr-2">¥153.32</span>
                        <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5月22日记录 */}
                <div className="bg-white dark:bg-gray-900 shadow-sm">
                  <div className="bg-orange-50 dark:bg-gray-800 px-4 py-2.5 flex justify-between items-center">
                    <div className="text-gray-700 dark:text-gray-300 text-sm">收入/赠付日期: 2025.05.22</div>
                    <div className="text-gray-700 dark:text-gray-300 font-medium text-sm">收入总额: -¥20829.95</div>
                  </div>

                  <div className="border-b border-gray-100 dark:border-gray-800">
                    <div className="flex justify-between items-center px-4 py-3">
                      <div className="text-gray-700 dark:text-gray-300">供货收入</div>
                      <div className="flex items-center">
                        <span className="text-orange-500 dark:text-orange-400 font-medium mr-2">¥0</span>
                        <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-100 dark:border-gray-800">
                    <div className="flex justify-between items-center px-4 py-3">
                      <div className="text-gray-700 dark:text-gray-300">售后赠付</div>
                      <div className="flex items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium mr-2">-¥20524.51</span>
                        <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center px-4 py-3">
                      <div className="text-gray-700 dark:text-gray-300">订单尾款</div>
                      <div className="flex items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium mr-2">-¥305.44</span>
                        <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5月18日记录 */}
                <div className="bg-white dark:bg-gray-900 shadow-sm">
                  <div className="bg-orange-50 dark:bg-gray-800 px-4 py-2.5 flex justify-between items-center">
                    <div className="text-gray-700 dark:text-gray-300 text-sm">收入/赠付日期: 2025.05.18</div>
                    <div className="text-gray-700 dark:text-gray-300 font-medium text-sm">收入总额: -¥309.83</div>
                  </div>

                  <div className="border-b border-gray-100 dark:border-gray-800">
                    <div className="flex justify-between items-center px-4 py-3">
                      <div className="text-gray-700 dark:text-gray-300">供货收入</div>
                      <div className="flex items-center">
                        <span className="text-orange-500 dark:text-orange-400 font-medium mr-2">¥0</span>
                        <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center px-4 py-3">
                      <div className="text-gray-700 dark:text-gray-300">售后赠付</div>
                      <div className="flex items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium mr-2">-¥309.83</span>
                        <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MiniProgramShell>
  )
}
