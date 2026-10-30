import { describe, expect, it } from 'vitest';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { App } from './App';

describe('HARPS public landing page', () => {
  const html = renderToStaticMarkup(createElement(App));

  it('shows the brand and primary navigation', () => {
    expect(html).toContain('HARPS.');
    expect(html).toContain('Our vision');
    expect(html).toContain('Explore');
    expect(html).toContain('Community');
  });

  it('describes the four community pillars', () => {
    for (const term of ['Wellbeing', 'Knowledge', 'Growth', 'prosperity']) {
      expect(html).toContain(term);
    }
  });

  it('does not claim to collect member data or provide registration', () => {
    expect(html).toContain('does not collect member data');
    expect(html).toContain('mailto:hello@advyamindlabs.com');
    expect(html).not.toContain('type="password"');
  });
});
