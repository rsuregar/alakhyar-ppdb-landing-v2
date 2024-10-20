export interface NavItem {
  title: string
  href?: string
  key?: string | undefined
  disabled?: boolean
  external?: boolean
  children?: NavItem[]
}
