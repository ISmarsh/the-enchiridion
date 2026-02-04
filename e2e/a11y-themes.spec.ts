import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const ALL_THEMES = [
  'enchiridion-dark',
  'enchiridion-light',
  'finn',
  'jake',
  'bubblegum',
  'marceline',
  'bmo',
  'iceking',
  'flame',
  'lsp',
  'simon',
  'lemongrab',
  'prismo',
  'grasslands',
  'candy',
  'ice',
  'fire',
  'slime',
  'nightosphere',
];

// Screenshot every theme for visual inspection.
// Run with: npx playwright test a11y-themes --grep screenshots
test('screenshots: capture all themes', async ({ page }) => {
  for (const theme of ALL_THEMES) {
    await page.goto('/themes');
    await page.selectOption('#theme-select', theme);
    await page.waitForTimeout(100);
    await page.locator('[data-testid="theme-preview"]').screenshot({
      path: `e2e/screenshots/${theme}.png`,
    });
  }
});

// A11y check every theme.
// Run with: npx playwright test a11y-themes --grep a11y
for (const theme of ALL_THEMES) {
  test(`a11y: ${theme}`, async ({ page }) => {
    await page.goto('/themes');
    await page.selectOption('#theme-select', theme);
    await page.waitForTimeout(100);

    const results = await new AxeBuilder({ page })
      .include('[data-testid="theme-preview"]')
      .analyze();

    const summary = results.violations
      .map(
        (v) =>
          `[${v.impact}] ${v.id}: ${v.description}\n` +
          v.nodes.map((n) => `  ${n.failureSummary}`).join('\n'),
      )
      .join('\n\n');

    expect.soft(results.violations, summary).toEqual([]);
  });
}
