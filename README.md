# Code Analysis Tool Monorepo

This monorepo contains a **Next.js frontend** application that allows users to input code snippets and then receive three outputs from an integrated OpenAI model:

1. A natural-language explanation of what the code does.  
2. A refactored version of the code.  
3. A step-by-step explanation detailing how the reasoning was derived.

The analysis is powered by **OpenAI GPT-4o-mini**, ensuring high-quality code insights.

---

## Monorepo Setup

This repository uses `pnpm` as the package manager and `TurboRepo` for task orchestration.

### Directory Structure
```
my-monorepo/
├── apps/
│   ├── plank-test/  # Next.js frontend
├── pnpm-workspace.yaml
├── package.json
├── turbo.json
└── README.md
```

---

## Installation

1. **Install Dependencies**  
   Make sure you have `pnpm` installed globally:
   ```bash
   npm install -g pnpm
   ```
   
   Then install all dependencies:
   ```bash
   pnpm install
   ```

2. **Set Up Environment Variables**  
   Inside `apps/plank-test`, create a `.env` file. Use `.env.example` as a template:
   ```env
   # Required
   OPENAI_API_KEY=YOUR_OPENAI_API_KEY
   ```

   Replace `YOUR_OPENAI_API_KEY` with the provided OpenAI key.  

---

## Running the Project

To start the project in development mode:

```bash
pnpm run dev
```

The frontend application will be accessible at:  
[http://localhost:3000](http://localhost:3000)

---

## Scripts

The following scripts are defined in the **root** `package.json`:

| Command                | Description                                        |
|------------------------|----------------------------------------------------|
| `pnpm run dev`         | Starts the development server.                     |
| `pnpm run build`       | Builds the project for production.                 |
| `pnpm run start`       | Runs the production server after building.         |
| `pnpm run lint`        | Lints all packages in the monorepo.                |
| `pnpm run zip`         | Compresses the monorepo into `project.zip` (Linux/Mac). |
| `pnpm run 7zip` | Compresses the monorepo into `project.zip` (7zip). |

**Within the `plank-test` app:**

| Command           | Description                              |
|-------------------|------------------------------------------|
| `pnpm run dev`    | Starts the Next.js development server.   |
| `pnpm run build`  | Builds the Next.js app for production.   |
| `pnpm run start`  | Runs the production server.              |
| `pnpm run lint`   | Lints the code in the Next.js app.       |

---

## Dependencies

### Root Dependencies
- **TurboRepo**: Task orchestration.

### `plank-test` App Dependencies
- **Next.js**: Frontend framework.
- **Tailwind CSS**: Styling framework.
- **Heroicons**: Icon library.
- **Highlight.js**: Syntax highlighting for code snippets.
- **React Markdown**: Render Markdown content.
- **Rehype Highlight**: Integrates Highlight.js with React Markdown.
- **Remark Breaks**: Adds Markdown support for hard line breaks.
- **Zod**: Schema validation.
- **OpenAI Node Library**: Integration with OpenAI APIs.
- **TypeScript**: Type-safe development.

---

## Deployment

No specific deployment instructions are provided. After building, you can host the resulting Next.js application on any platform that supports Node.js.


---

## Stretch Goals

If given more time, here are some potential features to add:

1. **Advanced Syntax Highlighting**: Improve the code editor or input area with more robust syntax highlighting and linting.
2. **Language Detection**: Automatically detect the programming language of the provided snippet and tailor the explanation accordingly.
3. **User Authentication & Session Management**: Allow users to create accounts, save previous analyses, and revisit past sessions.
4. **Shareable Links**: Generate unique URLs to share analysis results.
5. **OpenAI Moderation**: I implemented a moderation check with OpenAI, but it is not currently being used because the provided API key does not have access to the moderation endpoint. If the key is updated, the moderation check can be enabled.


---

## Questions?

If you have any questions or need clarification, feel free to email:  
[brunocaetano94@hotmail.com](mailto:brunocaetano94@hotmail.com)

---

