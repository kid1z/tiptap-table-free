#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
};

// File templates
const fileTemplates = {
  'src/components/tiptap-icons/table-icon.tsx': `import { memo } from 'react'

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
`,

  'src/components/tiptap-icons/chevron-down-icon.tsx': `import { memo } from 'react'

type SvgProps = React.ComponentPropsWithoutRef<'svg'>

export const ChevronDownIcon = memo(({ className, ...props }: SvgProps) => (
  <svg
    className={className}
    fill="currentColor"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
))

ChevronDownIcon.displayName = 'ChevronDownIcon'
`,

  'src/components/tiptap-node/table-node.scss': `/* Basic editor styles */
.tiptap {
  :first-child {
    margin-top: 0;
  }

  /* Table-specific styling */
  table {
    border-collapse: collapse;
    margin: 0;
    overflow: hidden;
    table-layout: fixed;
    width: 100%;

    td,
    th {
      border: 1px solid var(--tt-selection-color);
      box-sizing: border-box;
      min-width: 1em;
      padding: 6px 8px;
      position: relative;
      vertical-align: top;

      > * {
        margin-bottom: 0;
      }
    }

    th {
      background-color: var(--tt-color-highlight-gray);
      font-weight: bold;
      text-align: left;
    }

    .selectedCell:after {
      background: var(--tt-selection-color);
      content: '';
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      pointer-events: none;
      position: absolute;
      z-index: 2;
    }

    .column-resize-handle {
      background-color: var(--tt-selection-color);
      bottom: -2px;
      pointer-events: none;
      position: absolute;
      right: -2px;
      top: 0;
      width: 4px;
    }
  }

  .tableWrapper {
    margin: 1.5rem 0;
    overflow-x: auto;
  }

  &.resize-cursor {
    cursor: ew-resize;
    cursor: col-resize;
  }
}
`,

  'src/components/tiptap-ui/table-button/index.tsx': `// biome-ignore lint/performance/noBarrelFile: <na>
export * from './table-button'
export * from './use-table'
`,

  'src/components/tiptap-ui/table-button/table-button.tsx': `import { type RefObject, useCallback } from 'react'
import {
  Button,
  type ButtonProps,
} from '@/components/tiptap-ui-primitive/button'
import { useTiptapEditor } from '@/hooks/use-tiptap-editor'
import type { TableList } from '../table-dropdown-menu/use-table-dropdown-menu'
import { type UseTableConfig, useTable } from './use-table'

export interface TableButtonProps
  extends Omit<ButtonProps, 'type'>,
    UseTableConfig {
  /**
   * Optional text to display alongside the icon.
   */
  text?: string
  /**
   * Optional show shortcut keys in the button.
   * @default false
   */
  showShortcut?: boolean

  onOpenChange?: (isOpen: boolean) => void
  type: TableList
  portal?: boolean
}

/**
 * Button component for toggling blockquote in a Tiptap editor.
 *
 * For custom button implementations, use the \`useBlockquote\` hook instead.
 */
export const TableButton = ({
  editor: providedEditor,
  type,
  text,
  hideWhenUnavailable = false,
  onToggled,
  showShortcut = false,
  onClick,
  children,
  ref,
  ...buttonProps
}: TableButtonProps & { ref?: RefObject<HTMLButtonElement | null> }) => {
  const { editor } = useTiptapEditor(providedEditor)

  const { handleToggle, Icon } = useTable({
    editor,
    type,
    hideWhenUnavailable,
  })

  const isVisible = true
  const canToggle = true
  const isActive = false

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(event)
      if (event.defaultPrevented) {
        return
      }
      handleToggle()
    },
    [handleToggle, onClick],
  )

  if (!(isVisible && editor && editor.isEditable)) {
    return null
  }

  return (
    <Button
      // aria-label={label}
      aria-pressed={isActive}
      data-active-state={isActive ? 'on' : 'off'}
      data-disabled={!canToggle}
      data-style="ghost"
      disabled={!canToggle}
      onClick={handleClick}
      role="button"
      showTooltip={false}
      // tooltip={label}
      tabIndex={-1}
      type="button"
      {...buttonProps}
      ref={ref}
    >
      {children ?? (
        <>
          <Icon className="tiptap-button-icon" />
          {text && <span className="tiptap-button-text">{text}</span>}
        </>
      )}
    </Button>
  )
}

TableButton.displayName = 'TableButton'
`,

  'src/components/tiptap-ui/table-button/use-table.ts': `import type { Editor } from '@tiptap/react'
import { useCallback, useEffect, useState } from 'react'
import {
  AddColumnAfterIcon,
  AddColumnBeforeIcon,
  AddRowAfterIcon,
  AddRowBeforeIcon,
  DeleteColumnIcon,
  DeleteRowIcon,
  DeleteTableIcon,
  InsertTableIcon,
  MergeCellsIcon,
  SplitCellIcon,
  TableIcon,
  ToggleHeaderCellIcon,
  ToggleHeaderColumnIcon,
  ToggleHeaderRowIcon,
} from '@/components/tiptap-icons/table-icon'
import { useTiptapEditor } from '@/hooks/use-tiptap-editor'
import {
  shouldShowButton,
  type TableList,
} from '../table-dropdown-menu/use-table-dropdown-menu'

/**
 * Configuration for the table functionality
 */
export type UseTableConfig = {
  /**
   * The Tiptap editor instance.
   */
  editor?: Editor | null
  /**
   * Whether the button should hide when table is not available.
   * @default false
   */
  /**
   * The type of list to toggle.
   */
  type: TableList
  hideWhenUnavailable?: boolean
  /**
   * Callback function called after a successful table toggle.
   */
  onToggled?: () => void
}

export const TableIconLists = {
  insertTable: InsertTableIcon,
  addColumnBefore: AddColumnBeforeIcon,
  addColumnAfter: AddColumnAfterIcon,
  deleteColumn: DeleteColumnIcon,
  addRowBefore: AddRowBeforeIcon,
  addRowAfter: AddRowAfterIcon,
  deleteRow: DeleteRowIcon,
  deleteTable: DeleteTableIcon,
  mergeCells: MergeCellsIcon,
  splitCell: SplitCellIcon,
  toggleHeaderColumn: ToggleHeaderColumnIcon,
  toggleHeaderRow: ToggleHeaderRowIcon,
  toggleHeaderCell: ToggleHeaderCellIcon,
  mergeOrSplit: TableIcon,
}

export function toggleList(editor: Editor | null, type: TableList): boolean {
  if (!editor?.isEditable) {
    return false
  }

  try {
    const chain = editor.chain().focus()

    // Wrap in specific list type
    const toggleMap: Record<TableList, () => typeof chain> = {
      insertTable: () =>
        chain.insertTable({ rows: 3, cols: 3, withHeaderRow: true }),
      addColumnBefore: () => chain.addColumnBefore(),
      addColumnAfter: () => chain.addColumnAfter(),
      deleteColumn: () => chain.deleteColumn(),
      addRowBefore: () => chain.addRowBefore(),
      addRowAfter: () => chain.addRowAfter(),
      deleteRow: () => chain.deleteRow(),
      deleteTable: () => chain.deleteTable(),
      mergeCells: () => chain.mergeCells(),
      splitCell: () => chain.splitCell(),
      toggleHeaderColumn: () => chain.toggleHeaderColumn(),
      toggleHeaderRow: () => chain.toggleHeaderRow(),
      toggleHeaderCell: () => chain.toggleHeaderCell(),
      mergeOrSplit: () => chain.mergeOrSplit(),
    }

    const toggle = toggleMap[type]
    if (!toggle) {
      return false
    }

    toggle().run()

    editor.chain().focus().selectTextblockEnd().run()

    return true
  } catch {
    return false
  }
}

export function useTable(config: UseTableConfig) {
  const { editor: providedEditor, type, onToggled } = config

  const { editor } = useTiptapEditor(providedEditor)
  const [isVisible, setIsVisible] = useState<boolean>(true)

  useEffect(() => {
    if (!editor) {
      return
    }

    const handleSelectionUpdate = () => {
      setIsVisible(shouldShowButton({ editor }))
    }

    handleSelectionUpdate()

    editor.on('selectionUpdate', handleSelectionUpdate)

    return () => {
      editor.off('selectionUpdate', handleSelectionUpdate)
    }
  }, [editor])

  const handleToggle = useCallback(() => {
    if (!editor) {
      return false
    }

    const success = toggleList(editor, type)
    if (success) {
      onToggled?.()
    }
    return success
  }, [editor, onToggled, type])

  return {
    isVisible,
    handleToggle,
    Icon: type ? TableIconLists[type] : TableIcon,
  }
}
`,

  'src/components/tiptap-ui/table-dropdown-menu/index.tsx': `// biome-ignore lint/performance/noBarrelFile: <na>
export * from './table-dropdown-menu'
`,

  'src/components/tiptap-ui/table-dropdown-menu/table-dropdown-menu.tsx': `import { useCallback, useState } from 'react'
import { ChevronDownIcon } from '@/components/tiptap-icons/chevron-down-icon'
import { TableIcon } from '@/components/tiptap-icons/table-icon'
import { Badge } from '@/components/tiptap-ui-primitive/badge'
import {
  Button,
  ButtonGroup,
  type ButtonProps,
} from '@/components/tiptap-ui-primitive/button'
import { Card, CardBody } from '@/components/tiptap-ui-primitive/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/tiptap-ui-primitive/dropdown-menu'
import { useTiptapEditor } from '@/hooks/use-tiptap-editor'
import { parseShortcutKeys } from '@/lib/tiptap-utils'
import { TableButton } from '../table-button'
import {
  type TableList,
  TableOptions,
  type UseTableDropdownConfig,
  useTableDropdownMenu,
} from './use-table-dropdown-menu'

export interface TableDropdownMenuProps
  extends Omit<ButtonProps, 'type'>,
    UseTableDropdownConfig {
  /**
   * Optional text to display alongside the icon.
   */
  text?: string
  /**
   * Optional show shortcut keys in the button.
   * @default false
   */
  showShortcut?: boolean
  types?: TableList[]

  onOpenChange?: (isOpen: boolean) => void
  portal?: boolean
}

export function TableShortcutBadge({
  shortcutKeys = 'cmd+shift+9',
}: {
  shortcutKeys?: string
}) {
  return <Badge>{parseShortcutKeys({ shortcutKeys })}</Badge>
}

export const TableDropdownList = ({
  editor: providedEditor,
  hideWhenUnavailable = false,
  text,
  onToggled,
  portal = false,
  onOpenChange,
  // types = TableOptions,
  ...props
}: TableDropdownMenuProps) => {
  const { editor } = useTiptapEditor(providedEditor)
  const [isOpen, setIsOpen] = useState(false)
  const { isVisible, isActive, Icon } = useTableDropdownMenu({
    editor,
  })

  const handleOnOpenChange = useCallback(
    (open: boolean) => {
      setIsOpen(open)
      onOpenChange?.(open)
    },
    [onOpenChange],
  )

  const tableLists = TableOptions
  const canToggle = true

  if (!(isVisible && editor && editor.isEditable)) {
    return null
  }

  const RenderIcon = Icon ?? TableIcon

  return (
    <DropdownMenu onOpenChange={handleOnOpenChange} open={isOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Table options"
          data-active-state={isActive ? 'on' : 'off'}
          data-disabled={!canToggle}
          data-style="ghost"
          disabled={!canToggle}
          role="button"
          tabIndex={-1}
          tooltip="Table"
          type="button"
          {...props}
        >
          <RenderIcon className="tiptap-button-icon" />
          <ChevronDownIcon className="tiptap-button-dropdown-small" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" portal={portal}>
        <Card>
          <CardBody>
            <ButtonGroup>
              {tableLists.map((t) => (
                <DropdownMenuItem asChild key={\`table-\${t.label}\`}>
                  <TableButton editor={editor} text={t.label} type={t.type} />
                </DropdownMenuItem>
              ))}
            </ButtonGroup>
          </CardBody>
        </Card>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

TableDropdownList.displayName = 'TableDropdownList'
`,

  'src/components/tiptap-ui/table-dropdown-menu/use-table-dropdown-menu.ts': `import type { Editor } from '@tiptap/react'
import { useEffect, useState } from 'react'
import {
  AddColumnAfterIcon,
  AddColumnBeforeIcon,
  AddRowAfterIcon,
  AddRowBeforeIcon,
  DeleteColumnIcon,
  DeleteRowIcon,
  DeleteTableIcon,
  InsertTableIcon,
  MergeCellsIcon,
  SplitCellIcon,
  TableIcon,
} from '@/components/tiptap-icons/table-icon'
import { useTiptapEditor } from '@/hooks/use-tiptap-editor'
import { isNodeInSchema } from '@/lib/tiptap-utils'

export type TableList =
  | 'insertTable'
  | 'addColumnBefore'
  | 'addColumnAfter'
  | 'deleteColumn'
  | 'addRowBefore'
  | 'addRowAfter'
  | 'deleteRow'
  | 'deleteTable'
  | 'mergeCells'
  | 'splitCell'
  | 'toggleHeaderColumn'
  | 'toggleHeaderRow'
  | 'toggleHeaderCell'
  | 'mergeOrSplit'

export type TableOption = {
  label: string
  type: TableList
  icon: React.ElementType
}

export const TableOptions: TableOption[] = [
  {
    label: 'Insert Table',
    type: 'insertTable',
    icon: InsertTableIcon,
  },
  {
    label: 'Add Column Before',
    type: 'addColumnBefore',
    icon: AddColumnBeforeIcon,
  },
  {
    label: 'Add Column After',
    type: 'addColumnAfter',
    icon: AddColumnAfterIcon,
  },
  {
    label: 'Delete Column',
    type: 'deleteColumn',
    icon: DeleteColumnIcon,
  },
  {
    label: 'Add Row Before',
    type: 'addRowBefore',
    icon: AddRowBeforeIcon,
  },
  {
    label: 'Add Row After',
    type: 'addRowAfter',
    icon: AddRowAfterIcon,
  },
  {
    label: 'Delete Row',
    type: 'deleteRow',
    icon: DeleteRowIcon,
  },
  {
    label: 'Delete Table',
    type: 'deleteTable',
    icon: DeleteTableIcon,
  },
  {
    label: 'Merge Cells',
    type: 'mergeCells',
    icon: MergeCellsIcon,
  },
  {
    label: 'Split Cell',
    type: 'splitCell',
    icon: SplitCellIcon,
  },
  {
    label: 'Toggle Header Column',
    type: 'toggleHeaderColumn',
    icon: TableIcon,
  },
  {
    label: 'Toggle Header Row',
    type: 'toggleHeaderRow',
    icon: TableIcon,
  },
  {
    label: 'Toggle Header Cell',
    type: 'toggleHeaderCell',
    icon: TableIcon,
  },
]

/**
 * Configuration for the code block functionality
 */
export type UseTableDropdownConfig = {
  /**
   * The Tiptap editor instance.
   */
  editor?: Editor | null
  /**
   * Whether the button should hide when code block is not available.
   * @default false
   */
  hideWhenUnavailable?: boolean
  /**
   * Callback function called after a successful code block toggle.
   */
  onToggled?: () => void

  types?: TableList[]
}

/**
 * Determines if the blockquote button should be shown
 */
export function shouldShowButton(props: { editor: Editor | null }): boolean {
  const { editor } = props

  if (!editor?.isEditable) {
    return false
  }
  if (!isNodeInSchema('table', editor)) {
    return false
  }

  return true
}

export function useTableDropdownMenu(config?: UseTableDropdownConfig) {
  const { editor: providedEditor } = config || {}

  const { editor } = useTiptapEditor(providedEditor)
  const [isVisible, setIsVisible] = useState(true)

  const isActive = editor?.isActive('table')

  useEffect(() => {
    if (!editor) {
      return
    }

    const handleSelectionUpdate = () => {
      setIsVisible(shouldShowButton({ editor }))
    }

    handleSelectionUpdate()

    editor.on('selectionUpdate', handleSelectionUpdate)

    return () => {
      editor.off('selectionUpdate', handleSelectionUpdate)
    }
  }, [editor])

  return {
    isVisible,
    isActive,
    label: 'Table',
    Icon: TableIcon,
  }
}
`,
};

// Helper function to create directories recursively
function ensureDirectoryExists(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExists(dirname);
  fs.mkdirSync(dirname);
}

// Main function
function main() {
  console.log(`${colors.bright}${colors.cyan}
╔══════════════════════════════════════════════════╗
║                                                  ║
║        🎨 Tiptap Table Free Generator 🎨        ║
║                                                  ║
╚══════════════════════════════════════════════════╝
${colors.reset}`);

  console.log(`\n${colors.blue}Generating Tiptap table components...${colors.reset}\n`);

  let successCount = 0;
  let errorCount = 0;

  // Generate each file
  for (const [filePath, content] of Object.entries(fileTemplates)) {
    try {
      const fullPath = path.join(process.cwd(), filePath);

      // Check if file already exists
      if (fs.existsSync(fullPath)) {
        console.log(`${colors.yellow}⚠  Skipping (already exists): ${filePath}${colors.reset}`);
        continue;
      }

      // Create directory if it doesn't exist
      ensureDirectoryExists(fullPath);

      // Write the file
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`${colors.green}✓  Created: ${filePath}${colors.reset}`);
      successCount++;
    } catch (error) {
      console.error(`${colors.yellow}✗  Failed to create ${filePath}: ${error.message}${colors.reset}`);
      errorCount++;
    }
  }

  // Summary
  console.log(`\n${colors.bright}${colors.cyan}═══════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.green}✓  Successfully created: ${successCount} files${colors.reset}`);
  if (errorCount > 0) {
    console.log(`${colors.yellow}✗  Failed: ${errorCount} files${colors.reset}`);
  }
  console.log(`${colors.bright}${colors.cyan}═══════════════════════════════════════════════════${colors.reset}\n`);

  console.log(`${colors.blue}Next steps:${colors.reset}`);
  console.log(`  1. Make sure you have installed the required Tiptap CLI:`);
  console.log(`     ${colors.cyan}npx @tiptap/cli@latest init${colors.reset}`);
  console.log(`  2. Import and use the TableDropdownList component in your editor`);
  console.log(`  3. Import the table-node.scss styles in your component\n`);

  console.log(`${colors.green}Happy coding! 🚀${colors.reset}\n`);
}

// Run the script
main();
