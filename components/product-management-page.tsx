import MiniProgramShell from "@/components/mini-program-shell"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Grid3X3, ChevronDown, Plus } from "lucide-react"
import Image from "next/image"

export default function ProductManagementPage() {
  const products = [
    {
      id: "2174926701511476",
      name: "【耗材】【HS】黑色车厘子标签纸",
      image: "/images/cherry-product.png",
      currentPrice: "9.9",
      unit: "提",
      unitPrice: "9.90",
      unitType: "件",
      predictedIncome: "8.5",
      predictedUnit: "提",
      predictedUnitPrice: "8.50",
      predictedUnitType: "件",
      frozenStock: 0,
      totalStock: 930,
      stockUnit: "1件/提",
      status: "在售",
      isHot: false,
    },
    {
      id: "8407686495839223",
      name: "【优蜜达】湖北三峡伦晚脐橙【精品网套】【A级】",
      image: "/images/cherry-product.png",
      currentPrice: "43.86",
      unit: "筐",
      unitPrice: "1.29",
      unitType: "斤",
      predictedIncome: "34",
      predictedUnit: "筐",
      predictedUnitPrice: "1.00",
      predictedUnitType: "斤",
      frozenStock: 0,
      totalStock: 991275.3,
      stockUnit: "34斤/筐",
      status: "在售",
      isHot: true,
    },
    {
      id: "7970567189313565",
      name: "Z 智利甜心车厘子单JD【10斤装】",
      image: "/images/cherry-product.png",
      currentPrice: "128.00",
      unit: "箱",
      unitPrice: "12.80",
      unitType: "斤",
      predictedIncome: "85.6",
      predictedUnit: "箱",
      predictedUnitPrice: "8.56",
      predictedUnitType: "斤",
      frozenStock: 5,
      totalStock: 1250,
      stockUnit: "10斤/箱",
      status: "在售",
      isHot: false,
    },
  ]

  return (
    <MiniProgramShell title="商品管理">
      <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-950">
        {/* 搜索栏 */}
        <div className="bg-white dark:bg-gray-900 p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-orange-400" />
              <Input
                placeholder="请输入商品名称、货号"
                className="pl-10 border-orange-200 dark:border-orange-800 focus:border-orange-400 dark:focus:border-orange-600 rounded-full bg-orange-50 dark:bg-orange-900/20"
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-orange-200 dark:border-orange-800 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-full px-4"
            >
              <Grid3X3 className="h-4 w-4 mr-1" />
              全部分类
            </Button>
          </div>
        </div>

        {/* 状态标签页 */}
        <div className="bg-white dark:bg-gray-900 px-4 border-b border-gray-200 dark:border-gray-800">
          <Tabs defaultValue="selling" className="w-full">
            <TabsList className="bg-transparent p-0 h-auto w-full justify-start">
              <TabsTrigger
                value="selling"
                className="px-0 py-3 mr-6 h-auto data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-orange-500 dark:data-[state=active]:border-orange-400 rounded-none text-gray-600 dark:text-gray-400 data-[state=active]:text-orange-500 dark:data-[state=active]:text-orange-400 font-medium"
              >
                在售中 (83)
              </TabsTrigger>
              <TabsTrigger
                value="sold-out"
                className="px-0 py-3 mr-6 h-auto data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-orange-500 dark:data-[state=active]:border-orange-400 rounded-none text-gray-600 dark:text-gray-400 data-[state=active]:text-orange-500 dark:data-[state=active]:text-orange-400"
              >
                已售罄
              </TabsTrigger>
              <TabsTrigger
                value="off-shelf"
                className="px-0 py-3 mr-6 h-auto data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-orange-500 dark:data-[state=active]:border-orange-400 rounded-none text-gray-600 dark:text-gray-400 data-[state=active]:text-orange-500 dark:data-[state=active]:text-orange-400"
              >
                已下架
              </TabsTrigger>
              <TabsTrigger
                value="pending"
                className="px-0 py-3 mr-6 h-auto data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-orange-500 dark:data-[state=active]:border-orange-400 rounded-none text-gray-600 dark:text-gray-400 data-[state=active]:text-orange-500 dark:data-[state=active]:text-orange-400"
              >
                待审核
              </TabsTrigger>
              <TabsTrigger
                value="rejected"
                className="px-0 py-3 h-auto data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-orange-500 dark:data-[state=active]:border-orange-400 rounded-none text-gray-600 dark:text-gray-400 data-[state=active]:text-orange-500 dark:data-[state=active]:text-orange-400"
              >
                已驳回
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* 排序选项 */}
        <div className="bg-white dark:bg-gray-900 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 p-0 h-auto">
              销量 <ChevronDown className="h-3 w-3 ml-1" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 p-0 h-auto">
              价格 <ChevronDown className="h-3 w-3 ml-1" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 p-0 h-auto">
              库存 <ChevronDown className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </div>

        {/* 商品列表 - 参考截图的布局 */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <CardContent className="p-4">
                {/* 顶部：货号和复制按钮 */}
                {/* <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400">货号：{product.id}</span>
                  <Button variant="ghost" size="sm" className="h-auto p-1 text-gray-400 hover:text-gray-600">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div> */}

                {/* 商品信息区域 */}
                {/* <div className="flex space-x-3 mb-3">
                  {/* 商品图片 */}
                {/*  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>

                  {/* 商品名称 */}
                {/*  <div className="flex-1 min-w-0">
                    <div className="text-base font-medium text-gray-800 dark:text-white line-clamp-2 leading-tight">
                      {product.name}
                    </div>
                  </div>
                </div> */}
                {/* 商品信息区域 */}
                <div className="flex space-x-3 mb-3">
                  {/* 商品图片 */}
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>

                  {/* 商品名称和货号 */}
                  <div className="flex-1 min-w-0">
                    <div className="text-base font-medium text-gray-800 dark:text-white line-clamp-2 leading-tight mb-2">
                      {product.name}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">货号：{product.id}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-500">{product.stockUnit}</span>
                    </div>
                  </div>
                </div>

                {/* 价格信息 */}
                <div className="mb-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">预计销售：</span>
                    <span className="text-lg font-bold text-red-500 dark:text-red-400">¥{product.currentPrice}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">/{product.unit}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">约</span>
                    <span className="text-lg font-bold text-red-500 dark:text-red-400">¥{product.unitPrice}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">/{product.unitType}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">预计收入：</span>
                    <span className="text-sm font-medium text-red-500 dark:text-red-400">
                      ¥{product.predictedIncome}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-500">/{product.predictedUnit}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-500">约</span>
                    <span className="text-sm font-medium text-red-500 dark:text-red-400">
                      ¥{product.predictedUnitPrice}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-500">/{product.predictedUnitType}</span>
                  </div>
                </div>

                {/* 库存信息 */}
                {/* <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">冻结库存</div>
                    <div className="text-lg font-medium text-gray-800 dark:text-white">{product.frozenStock}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">总剩余库存</div>
                    <div className="text-lg font-medium text-gray-800 dark:text-white">{product.totalStock}</div>
                  </div>
                </div> */}
                {/* 库存信息 */}
                <div className="mb-4">
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center justify-between">
                      <div className="text-center flex-1">
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">冻结库存</div>
                        <div className="text-lg font-bold text-amber-600 dark:text-amber-400">
                          {product.frozenStock}
                        </div>
                      </div>
                      <div className="w-px h-12 bg-gray-300 dark:bg-gray-600 mx-4"></div>
                      <div className="text-center flex-1">
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">总剩余库存</div>
                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{product.totalStock}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 操作按钮 */}
                <div className="grid grid-cols-4 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 text-sm text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    下架
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 text-sm text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    编辑
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 text-sm text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    调库存
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 text-sm text-orange-500 dark:text-orange-400 border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                  >
                    调价
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 浮动添加按钮 */}
        <div className="absolute bottom-6 right-6">
          <Button
            size="lg"
            className="w-14 h-14 rounded-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 shadow-lg"
          >
            <Plus className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </MiniProgramShell>
  )
}
