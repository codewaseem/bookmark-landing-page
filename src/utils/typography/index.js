import Typography from "typography"
import gitHubTheme from "typography-theme-github"

const typography = new Typography(gitHubTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
