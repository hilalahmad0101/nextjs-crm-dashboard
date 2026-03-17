import os
import re

SOURCE_DIR = r"c:\opensource-project\crm-dashboard"
DEST_DIR = r"c:\opensource-project\crm-dashboard\next-crm\src\app"

MAPPINGS = {
    'dashboard-overview.html': '',  # Maps to src/app/page.tsx
    'lead-management.html': 'leads',
    'add-new-lead-form.html': 'leads/new',
    'lead-details-view.html': 'leads/details',
    'lead-details-view-2.html': 'leads/details-2',
    'customer-directory.html': 'customers',
    'add-new-customer-form.html': 'customers/new',
    'customer-details-view.html': 'customers/details',
    'sales-pipeline.html': 'sales-pipeline',
    'sales-pipeline-deals.html': 'deals',
    'tasks.html': 'tasks',
    'add-new-task-form.html': 'tasks/new',
    'calendar.html': 'calendar',
    'add-new-event-form.html': 'calendar/new',
    'messages.html': 'messages',
    'analytics-reports.html': 'reports',
    'user-directory.html': 'users',
    'add-new-user-form.html': 'users/new',
    'user-profile-details.html': 'users/profile',
    'user-roles-list.html': 'roles',
    'create-new-role.html': 'roles/new',
    'role-permissions-management.html': 'roles/permissions',
    'support-tickets.html': 'support-tickets',
    'create-new-ticket-form.html': 'support-tickets/new',
    'ticket-details-view.html': 'support-tickets/details',
    'platform-settings.html': 'settings'
}

def html_to_jsx(html_str):
    # Basic attributes
    jsx = html_str.replace('class="', 'className="')
    jsx = jsx.replace('for="', 'htmlFor="')
    
    # Self closing tags
    jsx = re.sub(r'<input([^>]*[^/])>', r'<input\1/>', jsx)
    jsx = re.sub(r'<img([^>]*[^/])>', r'<img\1/>', jsx)
    jsx = jsx.replace('<br>', '<br />').replace('<hr>', '<hr />')
    
    # SVG attributes camelCase
    fixes = {
        'preserveaspectratio': 'preserveAspectRatio',
        'viewbox': 'viewBox',
        'lineargradient': 'linearGradient',
        'stroke-width': 'strokeWidth',
        'stroke-linecap': 'strokeLinecap',
        'stroke-linejoin': 'strokeLinejoin',
        'fill-rule': 'fillRule',
        'clip-rule': 'clipRule',
        'stop-color': 'stopColor',
        'stop-opacity': 'stopOpacity',
        'stroke-dasharray': 'strokeDasharray',
        'stroke-dashoffset': 'strokeDashoffset'
    }
    for k, v in fixes.items():
        jsx = jsx.replace(k, v)
        
    # Styles to objects - specific handling
    def style_repl_generic(match):
        style_str = match.group(1).strip()
        if not style_str: return 'style={{}}'
        
        declarations = [d.strip() for d in style_str.split(';') if d.strip()]
        obj_props = []
        for d in declarations:
            parts = d.split(':', 1)
            if len(parts) == 2:
                key = parts[0].strip()
                val = parts[1].strip()
                camel_key = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), key)
                val_escaped = val.replace("'", "\\'")
                obj_props.append(f"{camel_key}: '{val_escaped}'")
                
        return "style={{ " + ", ".join(obj_props) + " }}"

    jsx = re.sub(r'style="([^"]*)"', style_repl_generic, jsx)
    
    # Specifically for NextJS, comments must be {/* ... */} not <!-- ... -->
    jsx = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', jsx, flags=re.DOTALL)
    
    # replace cross-links to NextJs links
    for old_href, route in MAPPINGS.items():
        new_href = '/' + route if route else '/'
        jsx = jsx.replace(f'href="{old_href}"', f'href="{new_href}"')
    
    # Strip <header> and <aside> since they are in layout.tsx
    jsx = re.sub(r'<header.*?</header>', '', jsx, flags=re.IGNORECASE | re.DOTALL)
    jsx = re.sub(r'<aside.*?</aside>', '', jsx, flags=re.IGNORECASE | re.DOTALL)
    
    return jsx

for filename, route in MAPPINGS.items():
    filepath = os.path.join(SOURCE_DIR, filename)
    if not os.path.exists(filepath):
        print(f"Skipping {filename} - not found.")
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    # Extract main content
    m = re.search(r'<main[^>]*>(.*?)</main>', text, re.IGNORECASE | re.DOTALL)
    if m:
        inner_html = m.group(1).strip()
        jsx_content = html_to_jsx(inner_html)
        
        component_name = re.sub(r'[^a-zA-Z0-9]', '', filename.replace('.html', '').title())
        
        page_code = f"""import React from 'react';
import Link from 'next/link';

export default function {component_name}() {{
  return (
    <>
      {{/* Screen Content */}}
      {jsx_content}
    </>
  );
}}
"""
        out_dir = os.path.join(DEST_DIR, route.replace('/', os.sep))
        os.makedirs(out_dir, exist_ok=True)
        
        out_path = os.path.join(out_dir, 'page.tsx')
        with open(out_path, 'w', encoding='utf-8') as out:
            out.write(page_code)
            
        print(f"Generated {out_path}")
    else:
        print(f"Could not find <main> in {filename}")

print("Done generating all pages.")
