# frontend-starter

## TODO install list

- NextJS ✓
- Prettier ✓
- SCSS ✓
- Folder and pages structure
- Components collection
- RTK
- http-client
- env-files
- alert-provider
- formik + yup
- Auth + private route
- Crud operations
- bundle analyzing
- gzip
- Test-stages, deploy-scripts
- Utils
- Hooks
- Tests

## Tech stack

- Frontend lib: [React 18v](https://ru.legacy.reactjs.org/)
- Builder: [NextJs 13v](https://nextjs.org/)
- Typing: [TypeScript](https://www.typescriptlang.org/)
- State-managment: [Redux-toolkit](https://redux-toolkit.js.org/)
- Styles: [SCSS](https://sass-scss.ru/) with modules
- http-client: [axios](https://github.com/axios/axios)
- Form-validation: [Formik](https://formik.org/) with [yup](https://github.com/jquense/yup)
- Linters: [ESLint](https://eslint.org/)
- Code formatter: [Prettier](https://prettier.io/)
- Test stages: [Github pages](https://pages.github.com/) and [Netlify](https://www.netlify.com/)

---

## NextJS

```bash
# inside current folder
npx create-next-app@latest .

# inside specify folder
npx create-next-app@latest folder-name

# ask for the questions
? Would you like to use TypeScript? No / Yes*
? Would you like to use ESLint? No / Yes*
? Would you like to use TailWindCss? No* / Yes
? Would you like to use src/ directory? No / Yes*
? Would you like to use App Router (recommended)? No* / Yes
? Would you like to customize the default import alias? No* / Yes
```

## Prettier

`yarn add prettier`

### .prettierrc

```json
{
  "endOfLine": "auto",
  "singleQuote": true,
  "jsxSingleQuote": true,
  "arrowParens": "avoid",
  "semi": true,
  "useTabs": false,
  "trailingComma": "all",
  "tabWidth": 2
}
```

### .prettierignore

```
# Ignore artifacts:
node_modules
public
build
.next
.swc
yarn.lock
package-lock.json
```

### .vscode/settings.json + Install VS Code Prettier plugin

```json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": false,
  "prettier.singleQuote": true,
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[svg]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "svg.preview.background": "editor"
}
```

---

====================================

---

# NextJS Info

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
