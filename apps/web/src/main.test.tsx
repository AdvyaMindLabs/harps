import { describe, expect, it } from 'vitest';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { App } from './App';

describe('HARPS landing page', () => {
  const html = renderToStaticMarkup(createElement(App));

  it('shows the HARPS identity and core navigation', () => {
    expect(html).toContain('HARPS.');
    expect(html).toContain('Our vision');
    expect(html).toContain('Explore');
    expect(html).toContain('Community');
  });

  it('explains the community pillars', () => {
    expect(html).toContain('Wellbeing');
    expect(html).toContain('Knowledge');
    expect(html).toContain('Growth');
    expect(html).toContain('prosperity');
  });

  it('does not pretend to collect member data', () => {
    expect(html).toContain('does not collect member data');
    expect(html).toContain('mailto:hello@advyamindlabs.com');
    expect(html).not.toContain('type="password"');
  });
});
