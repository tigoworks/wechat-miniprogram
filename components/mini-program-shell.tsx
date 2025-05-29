import type React from "react"
import { ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"

interface MiniProgramShellProps {
  title: string
  children: React.ReactNode
  className?: string
}

export default function MiniProgramShell({ title, children, className }: MiniProgramShellProps) {
  // 获取当前时间
  const currentTime = new Date().toLocaleTimeString("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  return (
    <div
      className={cn(
        "w-[390px] h-[844px] flex flex-col bg-white dark:bg-gray-900 overflow-hidden shadow-lg rounded-3xl border border-gray-200 dark:border-gray-700 flex-shrink-0",
        className,
      )}
    >
      {/* 状态栏 - 更符合iOS风格 */}
      <div className="h-11 px-5 flex items-center justify-between bg-white dark:bg-gray-900">
        <div className="text-black dark:text-white font-medium">{currentTime}</div>
        <div className="flex items-center space-x-2">
          <div className="flex space-x-[2px]">
            <div className="h-3 w-[3px] bg-black dark:bg-white rounded-sm"></div>
            <div className="h-4 w-[3px] bg-black dark:bg-white rounded-sm"></div>
            <div className="h-3 w-[3px] bg-black dark:bg-white rounded-sm"></div>
            <div className="h-2 w-[3px] bg-black dark:bg-white rounded-sm"></div>
          </div>
          <div className="ml-1.5">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.66634 2.33333C11.5073 2.33333 13.333 2.99999 14.6663 4.33333C14.8103 4.47732 15.0437 4.47732 15.1877 4.33333L16.0743 3.44666C16.1476 3.3734 16.1881 3.27458 16.1881 3.17103C16.1881 3.06748 16.1476 2.96865 16.0743 2.89539C12.2583 -0.92127 7.07434 -0.92127 3.25834 2.89539C3.18507 2.96865 3.14453 3.06748 3.14453 3.17103C3.14453 3.27458 3.18507 3.3734 3.25834 3.44666L4.14501 4.33333C4.289 4.47732 4.52234 4.47732 4.66634 4.33333C5.99967 2.99999 7.82567 2.33333 9.66634 2.33333ZM9.66634 6C10.5997 6 11.517 6.33333 12.217 7.03333C12.361 7.17732 12.5943 7.17732 12.7383 7.03333L13.625 6.14666C13.6986 6.0731 13.7394 5.97365 13.7394 5.86939C13.7394 5.76514 13.6986 5.66569 13.625 5.59213C11.1837 3.15079 8.15034 3.15079 5.70901 5.59213C5.63544 5.66569 5.59473 5.76514 5.59473 5.86939C5.59473 5.97365 5.63544 6.0731 5.70901 6.14666L6.59567 7.03333C6.73967 7.17732 6.97301 7.17732 7.11701 7.03333C7.81634 6.33399 8.73367 6 9.66634 6ZM11.167 8.96666C11.167 9.81706 10.4767 10.5 9.63367 10.5C8.79067 10.5 8.10034 9.81706 8.10034 8.96666C8.10034 8.11626 8.79067 7.43333 9.63367 7.43333C10.4767 7.43333 11.167 8.11626 11.167 8.96666Z"
                fill="currentColor"
                className="text-black dark:text-white"
              />
            </svg>
          </div>
          <div className="ml-1.5 flex items-center">
            <svg width="27" height="12" viewBox="0 0 27 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect
                opacity="0.35"
                x="0.5"
                y="0.833313"
                width="21"
                height="10.3333"
                rx="2.16667"
                stroke="currentColor"
                className="text-black dark:text-white"
              />
              <path
                opacity="0.4"
                d="M23 4V8C23.8079 7.66122 24.3333 6.87313 24.3333 6C24.3333 5.12687 23.8079 4.33878 23 4Z"
                fill="currentColor"
                className="text-black dark:text-white"
              />
              <rect
                x="2"
                y="2.33331"
                width="18"
                height="7.33333"
                rx="1.33333"
                fill="currentColor"
                className="text-black dark:text-white"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* 标题栏 - 更符合微信小程序风格 */}
      <div className="h-12 px-4 flex items-center justify-between relative bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 border-b border-orange-600 dark:border-orange-700">
        <button className="p-1.5 rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-colors">
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
        <h1 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[17px] font-medium text-white">
          {title}
        </h1>
        <div className="flex items-center space-x-3">
          <button className="p-1.5 rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="2" fill="currentColor" className="text-white" />
              <circle cx="6" cy="12" r="2" fill="currentColor" className="text-white" />
              <circle cx="18" cy="12" r="2" fill="currentColor" className="text-white" />
            </svg>
          </button>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-950">{children}</div>
    </div>
  )
}
