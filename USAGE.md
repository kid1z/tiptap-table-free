# Usage Guide

## Installation

### Using npx (Recommended)

The easiest way to get started is using npx:

```bash
npx tiptap-table-free
```

This will generate all the necessary component files in your current directory.

### Installing as a dependency

If you want to use it multiple times in your project:

```bash
npm install -g tiptap-table-free
# Then run anywhere
tiptap-table-free
```

## What Gets Generated

When you run the CLI, the following files are created:

```
components/
├── tiptap-icons/
│   ├── table-icon.tsx          # All table-related SVG icons
│   └── chevron-down-icon.tsx   # Dropdown chevron icon
├── tiptap-node/
│   └── table-node.scss         # Table styling
├── tiptap-ui/
│   ├── table-button/
│   │   ├── index.tsx
│   │   ├── table-button.tsx    # Individual table action button
│   │   └── use-table.ts        # Table operations hook
│   └── table-dropdown-menu/
│       ├── index.tsx
│       ├── table-dropdown-menu.tsx  # Main dropdown component
│       └── use-table-dropdown-menu.ts
```

## Prerequisites

Before using the generated components, you need:

1. **Tiptap installed** in your project:
```bash
npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-table
```

2. **Tiptap UI primitives**:
```bash
npx tiptap-table-free
```

3. **Required dependencies**:
```bash
npm install @floating-ui/react @radix-ui/react-dropdown-menu react-hotkeys-hook
```

## Basic Usage

### 1. Import the components

```tsx
import { EditorContent, EditorContext, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { TableKit } from '@tiptap/extension-table'
import { TableDropdownList } from './components/tiptap-ui/table-dropdown-menu'

// Import the table styles
import './components/tiptap-node/table-node.scss'
```

### 2. Set up your editor

```tsx
export default function MyEditor() {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      TableKit.configure({
        table: { 
          resizable: true,
          handleWidth: 5,
          cellMinWidth: 50,
        },
      }),
      StarterKit
    ],
    content: '<p>Start editing...</p>',
  })

  return (
    <EditorContext.Provider value={{ editor }}>
      <TableDropdownList />
      <EditorContent editor={editor} role="presentation" />
    </EditorContext.Provider>
  )
}
```

### Available Table Operations

The following table operations are available:

- `insertTable` - Insert a new table (3x3 with header row)
- `addColumnBefore` - Add a column before the current column
- `addColumnAfter` - Add a column after the current column
- `deleteColumn` - Delete the current column
- `addRowBefore` - Add a row before the current row
- `addRowAfter` - Add a row after the current row
- `deleteRow` - Delete the current row
- `deleteTable` - Delete the entire table
- `mergeCells` - Merge selected cells
- `splitCell` - Split a merged cell
- `toggleHeaderColumn` - Toggle header column
- `toggleHeaderRow` - Toggle header row
- `toggleHeaderCell` - Toggle header cell

### Import path issues

Make sure your import paths match your project structure. You may need to adjust the `@/` alias in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Styling not working

1. Make sure you've imported the `table-node.scss` file
2. Ensure your SCSS loader is configured properly
3. Check that CSS custom properties are defined in your global styles

## Examples

### Full Editor with Table Support

```tsx
'use client'

import { EditorContent, EditorContext, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { TableKit } from '@tiptap/extension-table'
import { TableDropdownList } from '@/components/tiptap-ui/table-dropdown-menu'
import '@/components/tiptap-node/table-node.scss'

export default function RichTextEditor() {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      TableKit.configure({
        table: { resizable: true },
      }),
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
    ],
    content: `
      <h2>Welcome to the Editor</h2>
      <p>Try inserting a table using the table button above!</p>
    `,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none',
      },
    },
  })

  if (!editor) {
    return null
  }

  return (
    <div className="editor-container">
      <EditorContext.Provider value={{ editor }}>
        <div className="toolbar">
          <TableDropdownList />
        </div>
        <EditorContent editor={editor} />
      </EditorContext.Provider>
    </div>
  )
}
```

## Contributing

Found a bug or want to contribute? Check out our [GitHub repository](https://github.com/kid1z/tiptap-table-free).

## License

MIT
