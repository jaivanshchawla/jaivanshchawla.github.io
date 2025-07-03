"use client"

import React, { ReactNode, forwardRef } from "react"
import { AnimatePresence, MotionConfig, motion } from "framer-motion"
import useMeasure from "react-use-measure"
import { cn } from "../../lib/utils"

type PanelContainerProps = {
  panelOpen: boolean
  handlePanelOpen: () => void
  className?: string
  videoUrl?: string
  renderButton?: (handleToggle: () => void) => ReactNode
  children: ReactNode
}

type ResizablePanelProps = {
  children: ReactNode
}

// ResizablePanel
const ResizablePanel = forwardRef<HTMLDivElement, ResizablePanelProps>(
  ({ children }, ref) => {
    return (
      <MotionConfig transition={{ duration: 0.4, ease: "easeInOut" }}>
        <div className="flex w-full flex-col items-start">
          <div className="mx-auto w-full">
            <div
              ref={ref}
              className={cn(
                children ? "rounded-r-none" : "rounded-sm",
                "relative overflow-hidden"
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </MotionConfig>
    )
  }
)
ResizablePanel.displayName = "ResizablePanel"

// SidePanel
const SidePanel = forwardRef<HTMLDivElement, PanelContainerProps>(
  ({ panelOpen, handlePanelOpen, className, renderButton, children }, ref) => {
    const [measureRef, bounds] = useMeasure()

    return (
      <ResizablePanel ref={ref}>
        <motion.div
          className={cn(
            "bg-neutral-900 rounded-r-[44px] w-[160px] md:w-[260px]",
            className
          )}
          initial={{ width: "160px" }}
          animate={{ width: panelOpen ? "97%" : "160px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ height: bounds.height > 0 ? bounds.height : 0.1 }}
            className="h-auto"
            transition={{ type: "spring", bounce: 0.02, duration: 0.65 }}
          >
            <div ref={measureRef}>
              <AnimatePresence mode="wait">
                <motion.div
                  key="panel-content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div
                    className={cn(
                      "flex items-center w-full justify-start pl-4 md:pl-4 py-1 md:py-3",
                      panelOpen ? "pr-3" : ""
                    )}
                  >
                    {renderButton && renderButton(handlePanelOpen)}
                  </div>

                  {panelOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {children}
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </ResizablePanel>
    )
  }
)
SidePanel.displayName = "SidePanel"

export { SidePanel }
