export type FeatureFlagName = keyof typeof FEATURE_FLAGS

export const FEATURE_FLAGS ={
    ADVANCED_FLAG : false,

} as const