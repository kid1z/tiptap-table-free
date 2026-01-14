import { memo } from 'react'

type SvgProps = React.ComponentPropsWithoutRef<'svg'>

export const TableIcon = memo(({ className, ...props }: SvgProps) => (
  <svg
    className={className}
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
    <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
    <path d="M3 10h18" />
    <path d="M10 3v18" />
  </svg>
))

TableIcon.displayName = 'TableIcon'

export const InsertTableIcon = memo(({ className, ...props }: SvgProps) => (
  <svg
    className={className}
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
    <path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
    <path d="M3 10h18" />
    <path d="M10 3v18" />
    <path d="M16 19h6" />
    <path d="M19 16v6" />
  </svg>
))

InsertTableIcon.displayName = 'InsertTableIcon'

export const AddColumnBeforeIcon = memo(({ className, ...props }: SvgProps) => (
  <svg
    className={className}
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
    <path d="M14 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1z" />
    <path d="M5 12l4 0" />
    <path d="M7 10l0 4" />
  </svg>
))

AddColumnBeforeIcon.displayName = 'AddColumnBeforeIcon'

export const AddColumnAfterIcon = memo(({ className, ...props }: SvgProps) => (
  <svg
    className={className}
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
    <path d="M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1z" />
    <path d="M15 12l4 0" />
    <path d="M17 10l0 4" />
  </svg>
))

AddColumnAfterIcon.displayName = 'AddColumnAfterIcon'

export const DeleteColumnIcon = memo(({ className, ...props }: SvgProps) => (
  <svg
    className={className}
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
    <path d="M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1z" />
    <path d="M16 10l4 4" />
    <path d="M16 14l4 -4" />
  </svg>
))

DeleteColumnIcon.displayName = 'DeleteColumnIcon'

export const AddRowBeforeIcon = memo(({ className, ...props }: SvgProps) => (
  <svg
    className={className}
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
    <path d="M4 18v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
    <path d="M12 9v-4" />
    <path d="M10 7l4 0" />
  </svg>
))

AddRowBeforeIcon.displayName = 'AddRowBeforeIcon'

export const AddRowAfterIcon = memo(({ className, ...props }: SvgProps) => (
  <svg
    className={className}
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
    <path d="M20 6v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1z" />
    <path d="M12 15l0 4" />
    <path d="M14 17l-4 0" />
  </svg>
))

AddRowAfterIcon.displayName = 'AddRowAfterIcon'

export const DeleteRowIcon = memo(({ className, ...props }: SvgProps) => (
  <svg
    className={className}
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
    <path d="M20 6v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1z" />
    <path d="M10 16l4 4" />
    <path d="M10 20l4 -4" />
  </svg>
))

DeleteRowIcon.displayName = 'DeleteRowIcon'

export const DeleteTableIcon = memo(({ className, ...props }: SvgProps) => (
  <svg
    className={className}
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
    <path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10" />
    <path d="M3 10h18" />
    <path d="M10 3v18" />
    <path d="M16 19h6" />
  </svg>
))

DeleteTableIcon.displayName = 'DeleteTableIcon'

export const MergeCellsIcon = memo(({ className, ...props }: SvgProps) => (
  <svg
    className={className}
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
    <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2v-2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2" />
    <path d="M10 8l-2 0l0 2" />
    <path d="M8 14l0 2l2 0" />
    <path d="M14 8l2 0l0 2" />
    <path d="M16 14l0 2l-2 0" />
  </svg>
))

MergeCellsIcon.displayName = 'MergeCellsIcon'

export const SplitCellIcon = memo(({ className, ...props }: SvgProps) => (
  <svg
    className={className}
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
    <path d="M10 8v8" />
    <path d="M14 8v8" />
    <path d="M8 10h8" />
    <path d="M8 14h8" />
    <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
    <path d="M4 16v2a2 2 0 0 0 2 2h2" />
    <path d="M16 4h2a2 2 0 0 1 2 2v2" />
    <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
  </svg>
))

SplitCellIcon.displayName = 'SplitCellIcon'

export const ToggleHeaderColumnIcon = memo(
  ({ className, ...props }: SvgProps) => (
    <svg
      className={className}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
      <path d="M10 10h11" />
      <path d="M10 3v18" />
      <path d="M9 3l-6 6" />
      <path d="M10 7l-7 7" />
      <path d="M10 12l-7 7" />
      <path d="M10 17l-4 4" />
    </svg>
  ),
)

ToggleHeaderColumnIcon.displayName = 'ToggleHeaderColumnIcon'

export const ToggleHeaderRowIcon = memo(({ className, ...props }: SvgProps) => (
  <svg
    className={className}
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
    <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
    <path d="M9 3l-6 6" />
    <path d="M14 3l-7 7" />
    <path d="M19 3l-7 7" />
    <path d="M21 6l-4 4" />
    <path d="M3 10h18" />
    <path d="M10 10v11" />
  </svg>
))

ToggleHeaderRowIcon.displayName = 'ToggleHeaderRowIcon'

export const ToggleHeaderCellIcon = memo(
  ({ className, ...props }: SvgProps) => (
    <svg
      className={className}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
      <path d="M15 3l-12 12" />
      <path d="M9.5 3l-6 6" />
      <path d="M20 3.5l-5.5 5.5" />
      <path d="M9 15l-5 5" />
      <path d="M21 9h-12v12" />
    </svg>
  ),
)

ToggleHeaderCellIcon.displayName = 'ToggleHeaderCellIcon'
