import type { Editor } from '@tiptap/react'
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

// export function getFilteredListOptions(
//   availableTypes: ListType[],
// ): typeof listOptions {
//   return listOptions.filter(
//     (option) => !option.type || availableTypes.includes(option.type),
//   )
// }

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
  // const filteredLists = useMemo(() => getFilteredListOptions(types), [types])

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
