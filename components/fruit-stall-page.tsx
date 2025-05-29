import MiniProgramShell from "@/components/mini-program-shell"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function FruitStallPage() {
  return (
    <MiniProgramShell title="南京精实水果档口">
      <div className="bg-white dark:bg-gray-900 p-3 flex items-center space-x-2">
        <div className="w-8 h-8 bg-yellow-400 dark:bg-yellow-500 rounded-md flex items-center justify-center">
          <span className="text-white font-bold">档</span>
        </div>
        <span className="text-base font-medium text-gray-900 dark:text-white">南京精实水果档口</span>
      </div>

      <div className="p-3 space-y-3">
        {/* 业绩卡片 - 优化布局和间距 */}
        <Card className="shadow-sm border-0 rounded-xl overflow-hidden bg-white dark:bg-gray-800">
          <CardContent className="p-0">
            {/* 业绩标题和标签页 - 保持在同一行 */}
            <div className="px-4 pt-4 pb-2 flex items-center justify-between">
              <div className="flex items-center flex-1">
                <div className="text-gray-700 dark:text-gray-300 font-medium text-sm">业绩</div>
                <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-600 mx-3"></div>

                <Tabs defaultValue="today" className="flex-1">
                  <TabsList className="bg-transparent p-0 h-auto">
                    <TabsTrigger
                      value="today"
                      className="px-2 py-0 h-7 text-sm text-orange-500 dark:text-orange-400 data-[state=active]:bg-transparent data-[state=active]:text-orange-500 dark:data-[state=active]:text-orange-400 data-[state=active]:shadow-none data-[state=active]:font-medium"
                    >
                      今日
                    </TabsTrigger>
                    <TabsTrigger
                      value="yesterday"
                      className="px-2 py-0 h-7 text-sm text-gray-600 dark:text-gray-400 data-[state=active]:bg-transparent data-[state=active]:text-orange-500 dark:data-[state=active]:text-orange-400 data-[state=active]:shadow-none data-[state=active]:font-medium"
                    >
                      昨日
                    </TabsTrigger>
                    <TabsTrigger
                      value="month"
                      className="px-2 py-0 h-7 text-sm text-gray-600 dark:text-gray-400 data-[state=active]:bg-transparent data-[state=active]:text-orange-500 dark:data-[state=active]:text-orange-400 data-[state=active]:shadow-none data-[state=active]:font-medium"
                    >
                      近30天
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            {/* 业绩数据 */}
            <div className="flex justify-between items-center px-4 py-3">
              <div className="text-4xl font-bold text-gray-800 dark:text-white">0</div>
              <Button className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white rounded-full px-5 py-1 h-8 text-sm">
                去对账
              </Button>
            </div>

            {/* 业绩详情 */}
            <div className="grid grid-cols-4 border-t border-gray-100 dark:border-gray-700">
              <div className="flex flex-col items-center py-3 border-r border-gray-100 dark:border-gray-700">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">下单件数</div>
                <div className="text-base font-medium text-gray-800 dark:text-white">0</div>
              </div>
              <div className="flex flex-col items-center py-3 border-r border-gray-100 dark:border-gray-700">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">下单商品</div>
                <div className="text-base font-medium text-gray-800 dark:text-white">0</div>
              </div>
              <div className="flex flex-col items-center py-3 border-r border-gray-100 dark:border-gray-700">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">缺货商品</div>
                <div className="text-base font-medium text-gray-800 dark:text-white">0</div>
              </div>
              <div className="flex flex-col items-center py-3">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">售后商品</div>
                <div className="text-base font-medium text-gray-800 dark:text-white">0</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 功能菜单 - 优化网格布局和图标 */}
        <Card className="shadow-sm border-0 rounded-xl bg-white dark:bg-gray-800">
          <CardContent className="p-0">
            <div className="grid grid-cols-3 gap-[1px] bg-gray-100 dark:bg-gray-700">
              {/* 发货管理 */}
              <div className="bg-white dark:bg-gray-800 p-4 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-2">
                  <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M42 20V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V20"
                      stroke="#FF6B6B"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M31 30L24 23L17 30"
                      stroke="#FF6B6B"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M24 36V23" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M6 20L24 8L42 20"
                      stroke="#FF6B6B"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-900 dark:text-white">发货管理</span>
              </div>

              {/* 商品管理 */}
              <div className="bg-white dark:bg-gray-800 p-4 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-2">
                  <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M39.3 6H8.7C7.20883 6 6 7.20883 6 8.7V39.3C6 40.7912 7.20883 42 8.7 42H39.3C40.7912 42 42 40.7912 42 39.3V8.7C42 7.20883 40.7912 6 39.3 6Z"
                      stroke="#4DABF7"
                      strokeWidth="4"
                    />
                    <path d="M15 15.5H33" stroke="#4DABF7" strokeWidth="4" strokeLinecap="round" />
                    <path d="M15 24H33" stroke="#4DABF7" strokeWidth="4" strokeLinecap="round" />
                    <path d="M15 32.5H33" stroke="#4DABF7" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-sm text-gray-900 dark:text-white">商品管理</span>
              </div>

              {/* 我的售后 */}
              <div className="bg-white dark:bg-gray-800 p-4 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-2">
                  <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                      fill="#FFD43B"
                      fillOpacity="0.2"
                      stroke="#FFD43B"
                      strokeWidth="4"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24 16V24L30 30"
                      stroke="#FFD43B"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-900 dark:text-white">我的售后</span>
              </div>

              {/* 库存查询 */}
              <div className="bg-white dark:bg-gray-800 p-4 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-2">
                  <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M42 42L30 30"
                      stroke="#FF6B6B"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 32C26.1797 32 32 26.1797 32 19C32 11.8203 26.1797 6 19 6C11.8203 6 6 11.8203 6 19C6 26.1797 11.8203 32 19 32Z"
                      stroke="#FF6B6B"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-900 dark:text-white">库存查询</span>
              </div>

              {/* 优惠券 */}
              <div className="bg-white dark:bg-gray-800 p-4 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-2">
                  <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 18C4 15.7909 5.79086 14 8 14H40C42.2091 14 44 15.7909 44 18V30C44 32.2091 42.2091 34 40 34H8C5.79086 34 4 32.2091 4 30V18Z"
                      stroke="#FF6B6B"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M16 22V26" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24 22V26" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M32 22V26" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 14V8" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M36 14V8" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 40V34" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M36 40V34" stroke="#FF6B6B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm text-gray-900 dark:text-white">优惠券</span>
              </div>

              {/* 周转箱 */}
              <div className="bg-white dark:bg-gray-800 p-4 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-2">
                  <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 44H40" stroke="#FFD43B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <rect
                      x="14"
                      y="8"
                      width="20"
                      height="36"
                      rx="2"
                      fill="#FFD43B"
                      fillOpacity="0.2"
                      stroke="#FFD43B"
                      strokeWidth="4"
                      strokeLinejoin="round"
                    />
                    <path d="M20 22H28" stroke="#FFD43B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 30H28" stroke="#FFD43B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm text-gray-900 dark:text-white">周转箱</span>
              </div>

              {/* 设置 */}
              <div className="bg-white dark:bg-gray-800 p-4 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-2">
                  <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.2838 43.1722L18.2838 43.1722C18.2838 43.1722 18.2838 43.1722 18.2838 43.1722L18.284 43.1719C19.0375 42.418 20.0158 42 21 42H27C27.9843 42 28.9625 42.418 29.716 43.1719L29.7162 43.1722C30.4701 43.9261 30.8882 44.9045 30.8882 45.8889V46H17.1118V45.8889C17.1118 44.9045 17.5299 43.9261 18.2838 43.1722Z"
                      stroke="#20C997"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38Z"
                      fill="#20C997"
                      fillOpacity="0.2"
                      stroke="#20C997"
                      strokeWidth="4"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z"
                      stroke="#20C997"
                      strokeWidth="4"
                      strokeLinejoin="round"
                    />
                    <path d="M24 2V6" stroke="#20C997" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M38 24H42" stroke="#20C997" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24 42V46" stroke="#20C997" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 24H10" stroke="#20C997" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm text-gray-900 dark:text-white">设置</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MiniProgramShell>
  )
}
