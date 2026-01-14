"use client"

import { EditorContent, EditorContext, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { TableKit } from '@tiptap/extension-table'
import { TableDropdownList } from '@/components/tiptap-ui/table-dropdown-menu'

import '@/components/tiptap-node/table-node.scss'

export default function MyEditor() {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      TableKit.configure({
        table: { resizable: true },
      }),
      StarterKit
    ],
    content: `
        <blockquote>
            <p>"The best way to predict the future is to invent it."</p><p>— Alan Kay</p>
        </blockquote>
        `,
  })

  return (
    <EditorContext.Provider value={{ editor }}>
      <TableDropdownList />

      <EditorContent editor={editor} role="presentation" />
    </EditorContext.Provider>
  )
}