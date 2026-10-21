# Protected fixture base

`fixture/protected-main` is a ruleset-protected base branch used to verify xanister/vector's `merge_pr` release pipeline against a genuinely pending required check (`fixture-check`, ~150 s). PRs into this branch from `work/ticket/<issue>` are docs-only. A PR title containing `FIXTURE-RED` makes the check fail.
fixture 6603 record.
fixture 6603 round 2 record
