import { useCallback, useState } from 'react'
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
                <DropdownMenuItem asChild key={`table-${t.label}`}>
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
