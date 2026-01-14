# Tiptap Table Free

A free, open-source rich text editor with advanced table support built with [Tiptap](https://tiptap.dev/) and [Next.js](https://nextjs.org). This project provides a modern, customizable editor with comprehensive table manipulation features.

## ✨ Features

- 🎨 **Modern UI Components** - Beautiful, accessible UI primitives built with Radix UI
- 📊 **Advanced Table Support** - Full-featured table editing with:
  - Insert/delete tables, rows, and columns
  - Merge and split cells
  - Resizable columns
  - Header row/column/cell toggles
  - Cell selection and manipulation
- 🎯 **Rich Text Editing** - Powered by Tiptap with StarterKit extensions
- 🌗 **Dark Mode Ready** - Complete dark mode support with CSS variables
- ⌨️ **Keyboard Shortcuts** - Efficient editing with keyboard shortcuts
- 🎭 **Customizable Styling** - Comprehensive SCSS variables for theming
- ♿ **Accessible** - Built with accessibility in mind using Radix UI primitives

## 🚀 Quick Start

### Using the CLI (Recommended)

The easiest way to add table support to your Tiptap editor is using our CLI:

```bash
npx tiptap-table-free
```

This will generate all necessary components in your project:
- `components/tiptap-icons/` - Table-related icons
- `components/tiptap-node/` - Table styling (SCSS)
- `components/tiptap-ui/table-button/` - Table button components
- `components/tiptap-ui/table-dropdown-menu/` - Table dropdown menu

After running the CLI, install the required UI primitives:

```bash
npx tiptap-ui add badge button card dropdown-menu tooltip
```

### Manual Installation

If you prefer to clone the entire project:

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tiptap-table-free.git
cd tiptap-table-free
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the editor.

## 📦 Pre-requisites

- Node.js 20+
- npm, yarn, pnpm, or bun
- Tiptap (https://tiptap.dev/)
- Next.js (https://nextjs.org/)
- Make sure that you install the latest version of tiptap/cli (https://tiptap.dev/docs/ui-components/getting-started/cli)

## 🎯 Usage

### Basic Editor Setup

```tsx
"use client"

import { EditorContent, EditorContext, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { TableKit } from '@tiptap/extension-table'
import { TableDropdownList } from '@/components/tiptap-ui/table-dropdown-menu'

export default function MyEditor() {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      TableKit.configure({
        table: { resizable: true },
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

### Table Operations

The editor supports the following table operations:

- **Insert Table** - Create a new table
- **Add Column Before/After** - Insert columns
- **Delete Column** - Remove selected column
- **Add Row Before/After** - Insert rows
- **Delete Row** - Remove selected row
- **Delete Table** - Remove entire table
- **Merge Cells** - Combine selected cells
- **Split Cell** - Divide merged cells
- **Toggle Header Row/Column/Cell** - Mark cells as headers

## 🧩 Component Structure

```
src/
├── components/
│   ├── tiptap-icons/          # SVG icons for editor actions
│   ├── tiptap-node/           # Node-specific styles (tables)
│   ├── tiptap-ui/             # High-level UI components
│   │   ├── table-button/
│   │   └── table-dropdown-menu/
│   └── tiptap-ui-primitive/   # Base UI primitives
│       ├── badge/ (need to install via tiptap/cli)
│       ├── button/ (need to install via tiptap/cli)
│       ├── dropdown-menu/ (need to install via tiptap/cli)
├── hooks/
│   └── use-tiptap-editor.ts   # Editor context hook
├── lib/
│   └── tiptap-utils.ts        # Utility functions
└── styles/
    ├── _variables.scss        # CSS custom properties
    └── _keyframe-animations.scss
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

Built with ❤️ using Tiptap and Next.js
