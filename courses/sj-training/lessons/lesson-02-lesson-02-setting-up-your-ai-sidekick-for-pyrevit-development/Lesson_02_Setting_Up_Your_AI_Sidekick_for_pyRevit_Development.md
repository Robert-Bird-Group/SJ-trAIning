# Lesson 02 - Setting Up Your AI Sidekick for pyRevit Development

## Why Do We Need an AI Sidekick?

AI can write code quickly, but fast code is not always safe code. In Revit, scripts can affect real project models, so your AI assistant needs the right context.

The goal is not to ask AI to magically build everything. The goal is to create a workflow where AI helps you:

- Explain concepts
- Draft first versions
- Review code
- Find bugs
- Write documentation
- Suggest safer patterns

## 🧠 What Context Should AI Know?

Your AI Sidekick should know:

- You are writing **Python for pyRevit**
- The code runs inside **Revit**, not normal desktop Python
- Revit API changes may exist between versions
- Transactions are required for model changes
- Worksharing and project safety matter
- Tools should be readable, documented, and maintainable

## 📦 Create Your AI Sidekick Context File

Create a file called:

```text
_ai_sidekick_context.md
```

Add this starter context:

```markdown
# AI Sidekick Context

I am building pyRevit tools for Autodesk Revit.

## Development Rules
- Use Python compatible with pyRevit.
- Explain code before making large changes.
- Keep tools safe for real Revit projects.
- Use clear variable names.
- Add comments where they help beginners understand the logic.
- Use Revit transactions only when modifying the model.
- Ask me to confirm destructive actions in the UI.

## Preferred Workflow
1. Restate the tool goal.
2. List assumptions.
3. Suggest a simple implementation plan.
4. Write code in small sections.
5. Explain what each section does.
6. Suggest test cases.
```

## ⚠️ Privacy Reminder

Do not paste confidential model data, client information, credentials, commercial information, or sensitive project details into AI tools unless your company has explicitly approved that workflow.

## 👉 Prompt Template

```text
I am building a pyRevit tool.

Tool goal:
[describe the task]

Revit version:
[version]

User input:
[selection / form / active view / active document]

Expected result:
[what should happen]

Please give me:
1. A simple implementation plan
2. Risks or assumptions
3. A first draft script
4. Suggested test cases
```

## 💪 Simple Exercise

Use your tool idea from Lesson 01 and rewrite it as an AI-ready prompt using the template above.

## ✅ Lesson Outcome

You now have a reusable AI Sidekick context file and a safer prompt structure for pyRevit development.
