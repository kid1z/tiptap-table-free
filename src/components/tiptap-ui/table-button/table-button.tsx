import { type RefObject, useCallback } from 'react'
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
 * For custom button implementations, use the `useBlockquote` hook instead.
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
