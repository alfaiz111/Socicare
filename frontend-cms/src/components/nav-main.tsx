"use client"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: React.ReactNode
    items?: { title: string; url: string }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon}
                <span>{item.title}</span>
              </SidebarMenuButton>

              {/* ✅ SUPPORT SUB MENU (CMS butuh ini) */}
              {item.items && (
                <div className="ml-6 mt-1 flex flex-col gap-1">
                  {item.items.map((sub) => (
                    <a
                      key={sub.title}
                      href={sub.url}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {sub.title}
                    </a>
                  ))}
                </div>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}