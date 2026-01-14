import type { Editor } from '@tiptap/react'
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
