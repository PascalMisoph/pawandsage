// Conversion funnel blocks for Markdown/MDX articles (see src/lib/funnels.mjs).
//   feeder pages (informational): "Recommended solution" box before the first H2
//                                 + "Next step" box and "Related comparisons" at the end
//   money pages: "Related comparisons" block at the end only
// Runs BEFORE rehype-affiliate-links so the pick links get rel/target/Umami attributes.
// Internal links carry data-umami-event="funnel-click".
import { funnelFor } from './funnels.mjs';

const el = (tagName, properties = {}, children = []) => ({ type: 'element', tagName, properties, children });
const text = (value) => ({ type: 'text', value });

function slugFromFile(file) {
  const path = file?.path ?? file?.history?.[file.history.length - 1] ?? '';
  const match = String(path).match(/([^/\\]+)\.(md|mdx|markdown)$/i);
  return match ? match[1] : null;
}

const internal = (href, label, slug, position, target, className) =>
  el(
    'a',
    {
      href,
      className: className ? [className] : undefined,
      dataUmamiEvent: 'funnel-click',
      dataUmamiEventArticle: slug,
      dataUmamiEventPosition: position,
      dataUmamiEventTarget: target,
    },
    [text(label)],
  );

function topBox(slug, f) {
  const m = f.money;
  const href = `/blog/${f.target}`;
  return el('aside', { className: ['funnel-box'], ariaLabel: 'Recommended solution' }, [
    el('p', { className: ['funnel-eyebrow'] }, [text('Recommended solution')]),
    el('p', { className: ['funnel-title'] }, [text(m.problem)]),
    el('p', { className: ['funnel-intro'] }, [
      text('Our research-based picks, from the guide '),
      internal(href, m.title, slug, 'funnel-top-text', f.target),
      text(':'),
    ]),
    el(
      'ul',
      { className: ['funnel-picks'] },
      m.picks.slice(0, 3).map((p) =>
        el('li', {}, [
          el('a', { href: p.href, className: ['funnel-pick'] }, [text(p.name)]),
          el('span', { className: ['funnel-pick-note'] }, [text(p.note)]),
        ]),
      ),
    ),
    internal(href, `${m.cta} →`, slug, 'funnel-top', f.target, 'funnel-cta'),
    el('p', { className: ['funnel-note'] }, [text('Affiliate links. We may earn a commission at no extra cost to you.')]),
  ]);
}

function endBlocks(slug, f) {
  const out = [];
  if (f.kind === 'feeder') {
    const m = f.money;
    out.push(
      el('aside', { className: ['funnel-box', 'funnel-box-end'], ariaLabel: 'Next step' }, [
        el('p', { className: ['funnel-eyebrow'] }, [text('Next step')]),
        el('p', { className: ['funnel-intro'] }, [
          text(`${m.problem} Start with our top pick, `),
          el('a', { href: m.picks[0].href, className: ['funnel-pick'] }, [text(m.picks[0].name)]),
          text(', or compare every option in our guide '),
          internal(`/blog/${f.target}`, m.title, slug, 'funnel-end-text', f.target),
          text('.'),
        ]),
      ]),
    );
  }
  if (f.related.length) {
    out.push(
      el('nav', { className: ['related-comparisons'], ariaLabel: f.relatedTitle ?? 'Related comparisons' }, [
        el('p', { className: ['funnel-eyebrow'] }, [text(f.relatedTitle ?? 'Related comparisons')]),
        el(
          'ul',
          {},
          f.related.map(([s, label], i) => el('li', {}, [internal(`/blog/${s}`, label, slug, `related-${i + 1}`, s)])),
        ),
      ]),
    );
  }
  return out;
}

export default function rehypeFunnelBox() {
  return (tree, file) => {
    const slug = slugFromFile(file);
    if (!slug) return;
    const f = funnelFor(slug);
    if (!f) return;
    const kids = tree.children;
    if (f.kind === 'feeder') {
      let idx = kids.findIndex((n) => n.type === 'element' && n.tagName === 'h2');
      if (idx < 0) {
        let seen = 0;
        idx = kids.findIndex((n) => n.type === 'element' && n.tagName === 'p' && ++seen === 2) + 1 || kids.length;
      }
      kids.splice(idx, 0, topBox(slug, f), text('\n'));
    }
    kids.push(text('\n'), ...endBlocks(slug, f));
  };
}
