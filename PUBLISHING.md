# Publishing Guide

## Pre-Publishing Checklist

Before publishing to npm, make sure you've completed these steps:

### 1. Update package.json

- [ ] Set the correct package name
- [ ] Update version number (follow [semver](https://semver.org/))
- [ ] Add your GitHub repository URL
- [ ] Add your name/organization as author
- [ ] Verify keywords are relevant
- [ ] Remove `"private": true` (already done)

### 2. Update README.md

- [ ] Replace `yourusername` with your actual GitHub username
- [ ] Add screenshots or GIFs of the table editor in action
- [ ] Update installation instructions with correct package name
- [ ] Add badges (npm version, downloads, license, etc.)

### 3. Test Locally

Test the package locally before publishing:

```bash
# Build a tarball
npm pack

# Install it in a test project
cd /path/to/test-project
npm install /path/to/tiptap-table-free/tiptap-table-free-0.1.0.tgz

# Test the CLI
npx tiptap-table-free
```

### 4. Version Control

```bash
# Commit all changes
git add .
git commit -m "chore: prepare for initial release"

# Tag the release
git tag v0.1.0
git push origin main --tags
```

## Publishing to npm

### First Time Setup

1. Create an npm account at [npmjs.com](https://www.npmjs.com/signup)

2. Login to npm from your terminal:
```bash
npm login
```

3. Verify you're logged in:
```bash
npm whoami
```

### Publishing

1. **Dry run** to see what will be published:
```bash
npm publish --dry-run
```

2. **Publish** the package:
```bash
npm publish
```

For scoped packages (e.g., `@yourorg/tiptap-table-free`):
```bash
npm publish --access public
```

### Post-Publishing

1. Verify the package on npm:
   - Visit `https://www.npmjs.com/package/tiptap-table-free`
   - Test installation: `npx tiptap-table-free`

2. Create a GitHub release:
   - Go to your repository on GitHub
   - Click "Releases" → "Create a new release"
   - Select the tag you created
   - Add release notes

3. Update documentation:
   - Add installation badge to README
   - Update any links or references

## Updating the Package

When you need to publish updates:

1. Make your changes

2. Update the version in `package.json`:
   - Patch: `0.1.0` → `0.1.1` (bug fixes)
   - Minor: `0.1.0` → `0.2.0` (new features, backwards compatible)
   - Major: `0.1.0` → `1.0.0` (breaking changes)

3. Commit and tag:
```bash
git add .
git commit -m "feat: add new feature"
git tag v0.2.0
git push origin main --tags
```

4. Publish:
```bash
npm publish
```

## Automation (Optional)

### Using np

Install `np` for easier publishing:

```bash
npm install -g np
```

Then simply run:
```bash
np
```

This will:
- Run tests
- Bump version
- Create git tag
- Push to GitHub
- Publish to npm

### GitHub Actions

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## Troubleshooting

### Package name already exists

If the package name is taken, you can:
1. Choose a different name
2. Use a scoped package: `@yourname/tiptap-table-free`

### Permission denied

Make sure you're logged in and have permission to publish:
```bash
npm login
npm whoami
```

### Files not included

Check your `.npmignore` and `package.json` `files` field to ensure all necessary files are included.

## Best Practices

1. **Semantic Versioning**: Follow semver strictly
2. **Changelog**: Maintain a CHANGELOG.md file
3. **Tests**: Add tests before publishing
4. **Documentation**: Keep README and docs up to date
5. **License**: Include a LICENSE file (MIT is already specified)
6. **Security**: Run `npm audit` before publishing
7. **Size**: Keep package size small (check with `npm pack --dry-run`)

## Resources

- [npm Documentation](https://docs.npmjs.com/)
- [Semantic Versioning](https://semver.org/)
- [npm Package Best Practices](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Creating Node.js CLI Tools](https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line)
