<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the portfolio as a single TanStack Start content route with section components in `src/components/portfolio/`; this preserves the established navigation and visual system.
- Keep roadmap, project, and learning-log entries in top-level arrays in their respective section files; this makes editorial updates straightforward without changing rendering logic.
- Keep portfolio identity icons and the share image in public with stable filenames, and put public SEO URLs on the content route; this supports external hosting and consistent sharing.
