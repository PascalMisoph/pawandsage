import rehypeRaw from 'rehype-raw';

function hasRawTable(node) {
  return (node.type === 'raw' && /<table(?=[\s/>])/i.test(node.value)) ||
    node.children?.some(hasRawTable);
}

function hasClass(node, className) {
  const value = node.properties?.className ?? node.attributes?.find(
    (attribute) => attribute.name === 'class' || attribute.name === 'className'
  )?.value;
  return (Array.isArray(value) ? value : String(value ?? '').split(/\s+/)).includes(className);
}

function wrapTables(parent) {
  parent.children?.forEach((node, index) => {
    wrapTables(node);
    const tag = node.tagName ?? node.name;
    if (tag !== 'table' || hasClass(node, 'safety-table') || hasClass(parent, 'table-scroll')) return;

    parent.children[index] = {
      type: 'element',
      tagName: 'div',
      properties: { className: ['table-scroll'], tabIndex: 0, role: 'region', ariaLabel: 'Scrollable table' },
      children: [node],
    };
  });
}

export default function rehypeTableScroll() {
  const parseRaw = rehypeRaw();
  return (tree) => {
    // Astro parses raw Markdown HTML after custom plugins. Parse early only
    // when needed, after the affiliate plugin has processed raw links.
    const parsed = hasRawTable(tree) ? parseRaw(tree) : tree;
    wrapTables(parsed);
    return parsed;
  };
}
