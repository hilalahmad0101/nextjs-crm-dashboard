import re
import os

def html_to_jsx(html_str):
    # Convert 'class=' to 'className='
    jsx = html_str.replace('class="', 'className="')
    
    # Close standard unclosed tags
    jsx = re.sub(r'<input([^>]*[^/])>', r'<input\1/>', jsx)
    jsx = re.sub(r'<img([^>]*[^/])>', r'<img\1/>', jsx)
    
    # SVG camelCase attributes
    fixes = {
        'preserveaspectratio': 'preserveAspectRatio',
        'viewbox': 'viewBox',
        'lineargradient': 'linearGradient',
        'stroke-width': 'strokeWidth',
        'stop-color': 'stopColor',
        'stop-opacity': 'stopOpacity'
    }
    for k, v in fixes.items():
        jsx = jsx.replace(k, v)
        
    # React requires style to be an object. Just handle simple inline strings.
    # In dashboard-overview there might be `style="stop-color:rgba...;"`
    # It's inside a stop tag, e.g. <stop offset="0%" style="stop-color:rgba(13, 108, 242, 0.2);stop-opacity:1"></stop>
    # Convert it manually.
    jsx = jsx.replace('style="stop-color:rgba(13, 108, 242, 0.2);stop-opacity:1"', 'style={{ stopColor: "rgba(13, 108, 242, 0.2)", stopOpacity: 1 }}')
    jsx = jsx.replace('style="stop-color:rgba(13, 108, 242, 0);stop-opacity:1"', 'style={{ stopColor: "rgba(13, 108, 242, 0)", stopOpacity: 1 }}')
    
    # Deal with style="background-image: url(...)" for Avatars
    # Luckily, in page.tsx we only have Dashboard, no dynamic avatars except in Header. Wait, recently added Deals table has avatars.
    def style_repl(match):
        inner = match.group(1)
        if 'background-image:' in inner:
            url_match = re.search(r"url\('([^']+)'\)", inner)
            if url_match:
                return f"style={{{{ backgroundImage: `url('{url_match.group(1)}')` }}}}"
        return match.group(0)
    
    jsx = re.sub(r'style="([^"]+)"', style_repl, jsx)
    
    return jsx

with open(r'c:\opensource-project\crm-dashboard\dashboard-overview.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract content inside <main>
m = re.search(r'<main[^>]*>(.*?)</main>', text, re.IGNORECASE | re.DOTALL)
if m:
    inner_html = m.group(1).strip()
    jsx_content = html_to_jsx(inner_html)
    
    page = f"""export default function Dashboard() {{
  return (
    <div className="p-8">
      {{/* Dashboard Content */}}
      {jsx_content}
    </div>
  );
}}
"""
    with open(r'c:\opensource-project\crm-dashboard\next-crm\src\app\page.tsx', 'w', encoding='utf-8') as out:
        out.write(page)
    print("page.tsx generated")
