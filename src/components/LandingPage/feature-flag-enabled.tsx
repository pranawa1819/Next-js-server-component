import { FEATURE_FLAGS, FeatureFlagName } from "@/lib/featureFlag"
import { ReactNode } from "react"

export const FeatureFlagEnabled = ({featureFlag, children}:{featureFlag: FeatureFlagName, children: ReactNode}) => {
  return (
    FEATURE_FLAGS[featureFlag] ? children : null
  )
}

