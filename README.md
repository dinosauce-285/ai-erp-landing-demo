# AI ERP Frontend

Frontend administration dashboard for the **AI ERP** system. This application provides a smooth, fast-paced workspace with a modern interface, built on Next.js 16 and the shadcn UI system.

## Technologies Used

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Core Library**: [React 19](https://react.dev/)
- **CSS Framework**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) with Radix UI Primitives
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Code Quality Tools**: ESLint, Prettier
- **Git Hooks & Commit Standardization**: Husky, lint-staged, Commitizen

## Directory Structure

```text
ai-erp-fe/
├── .agent/              # Agent configuration and workflows for Code Copilot integration
├── .husky/              # Git hooks for automated pre-commit code checking and validation
├── .next/               # Next.js build cache and development build output (generated)
│   └── dev/             # Development build artifacts
│       ├── build/       # Compiled components and pages
│       ├── cache/       # Turbopack and build cache
│       ├── server/      # Server-side rendering artifacts
│       ├── static/      # Static assets for development
│       └── types/       # Generated TypeScript types
├── .specify/            # Specification and automation scripts (PowerShell scripts, templates, memory)
├── .vscode/             # VS Code workspace settings and extensions configuration
├── public/              # Static assets (images, fonts, icons, favicons)
├── src/                 # Main application source code
│   ├── app/             # Next.js App Router structure
│   │   ├── layout.tsx   # Root layout component
│   │   ├── page.tsx     # Home page component
│   │   ├── globals.css  # Global styles
│   ├── components/      # Reusable React components (UI components, shadcn/ui)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and helper libraries
│   │   └── utils.ts     # Common utility functions (e.g., className merging)
│   ├── services/        # API services and external service integrations
│   ├── store/           # State management (Redux, Zustand, Context API)
│   ├── types/           # TypeScript type definitions and interfaces
│   └── utils/           # Additional utility functions and constants
├── .env                 # Environment variables (API Base URL, API keys)
├── .env.local           # Local environment overrides (git ignored)
├── .lintstagedrc.json   # Configuration for linting and formatting staged files
├── .eslintrc.json       # ESLint rules configuration
├── eslint.config.mjs    # ESLint flat config file
├── components.json      # shadcn/ui configuration and component aliases
├── next.config.ts       # Next.js framework configuration
├── next-env.d.ts        # Next.js TypeScript declarations (auto-generated)
├── package.json         # Project dependencies and npm scripts
├── pnpm-lock.yaml       # Lock file for package manager (pnpm)
├── postcss.config.mjs   # PostCSS configuration for Tailwind CSS
├── tailwind.config.ts   # Tailwind CSS design and component configuration
├── tsconfig.json        # TypeScript compiler configuration
└── README.md            # This file
```

### Key Directories Explained

- **`src/app/`** - Next.js App Router pages, layouts, and global styles
- **`src/components/`** - Reusable React and shadcn/ui components
- **`src/hooks/`** - Custom React hooks for state and side effects
- **`src/lib/`** - Shared utility functions and helper libraries
- **`src/services/`** - API clients and external service integrations
- **`src/store/`** - Global state management solution
- **`src/types/`** - TypeScript interfaces and type definitions
- **`src/utils/`** - Additional utility functions and constants
- **`public/`** - Static assets served directly to the browser

## System Requirements

To run this project in a development environment, you will need:

- **Node.js**: Version 18.x or higher.
- **Package Manager**: The project supports **pnpm** (preferred, as indicated by the lockfile) or **npm**.

## Git Commit Workflow (Mandatory)

This project uses **Husky** combined with **lint-staged** and **Commitizen** to automate code formatting and ensure consistent commit history.

> **STRICT WARNING:** DO NOT use the standard `git commit -m "message..."` command.

Please follow these steps to commit your changes:

**Step 1: Stage your changes** (e.g., add all modified files).

```bash
git add .
```

**Step 2: Run the interactive commit command**.

```bash
pnpm run commit
# Or: npm run commit
```

- `lint-staged` will run through all your staged source code to check for ESLint errors. If there are formatting or logic violations, they will be displayed in the terminal (you must fix them to proceed).
- In the CLI, the Commitizen system will guide you through formatting your commit message:
  - Select the **Type** (e.g., `feat` (feature), `fix` (bug fix), `chore`...).
  - Specify the **Scope** (the scope of the change or module name - e.g., 'login', 'header').
  - The main message: **Subject**.
  - Longer explanation if needed: **Body**, **Footer** (issue number).

## Available Scripts

List of command scripts in `package.json` that developers should know:

| Command (`pnpm <script>`) | Description                                                                      |
| :------------------------ | :------------------------------------------------------------------------------- |
| `dev`                     | Runs the development environment with Hot Reload feature.                        |
| `build`                   | Builds a production-ready bundle for deployment.                                 |
| `start`                   | Starts the production server after the Build process.                            |
| `lint`                    | Runs ESLint to find structural, formatting, and logic issues in the source code. |
| `prepare`                 | Generates Husky Git Hooks (runs silently after `pnpm install`).                  |
| `commit`                  | Triggers the Commitizen tool instead of using `git commit` directly.             |
